import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { colors } from "@/constants/colors";
import { useUser } from "@/hooks";
import { cleanCep } from "@/utils";
import * as Loc from "expo-location";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SkeletonMap } from "./skeleton-map";
import { styles } from "./styles";

export default function Location() {
  const [location, setLocation] = useState<Loc.LocationObjectCoords>();
  const [locationDenied, setLocationDenied] = useState(false);
  const [address, setAddress] = useState("");
  const { user, updateAddress } = useUser();

  useEffect(() => {
    (async () => {
      try {
        const permission = await getLocationPermission();
        if (!permission) {
          Alert.alert(
            "Acesso a localização",
            "Você precisa fornecer o acesso a sua localização para continuar."
          );
          setLocationDenied(true);
          return;
        }

        const currentLocation = await getCurrentLocation();
        await getAddressFromCoodenates(currentLocation);
      } catch (error) {
        Alert.alert("Localização", "Não foi possivel obter a sua localização");
        console.error(error);
      }
    })();
  }, []);

  async function getLocationPermission() {
    let { status } = await Loc.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.warn("Permissão de localização negada!");
      return false;
    }
    return true;
  }

  async function getCurrentLocation() {
    const currentLocation = await Loc.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
    return currentLocation;
  }

  async function getAddressFromCoodenates(currentLocation: Loc.LocationObject) {
    let reverseGeocode = await Loc.reverseGeocodeAsync(currentLocation.coords);
    if (reverseGeocode.length > 0) {
      let { street, city, region, postalCode, district } = reverseGeocode[0];
      const formattedAddress = [district, street, city, region, postalCode]
        .filter(Boolean)
        .join(", ");
      setAddress(formattedAddress);

      updateAddress({
        street: street || undefined,
        city: city || undefined,
        district: district || undefined,
        cep: postalCode ? Number(cleanCep(postalCode)) : undefined,
        latitude: currentLocation?.coords?.latitude,
        longitude: currentLocation?.coords?.longitude,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Onde iremos entregar?</Text>
        <Text
          style={[
            styles.headerSubtitle,
            { color: locationDenied ? colors.red[800] : colors.black },
          ]}
        >
          {locationDenied
            ? "Você precisa fornecer ao app o acesso a sua localização nas configurações do seu celular para continuar."
            : "Caso você não esteja vendo a localização correta, poderá atualizar seu endereço mais tarde"}
        </Text>
      </View>
      <View style={styles.form}>
        <Input
          placeholder="Seu endereço"
          value={address}
          onChangeText={setAddress}
          label="Endereço:"
          editable={false}
        />
      </View>
      {location && location?.latitude && location?.longitude ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
        </MapView>
      ) : (
        <SkeletonMap />
      )}

      <Button
        text="Continuar"
        onPress={() => router.navigate("/location-details")}
        disabled={locationDenied}
      />
    </View>
  );
}
