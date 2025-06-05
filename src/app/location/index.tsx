import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useUser } from "@/hooks";
import { findAddress } from "@/http/address";
import * as Loc from "expo-location";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SkeletonMap } from "./skeleton-map";
import { styles } from "./styles";

export default function Location() {
  const [location, setLocation] = useState<Loc.LocationObjectCoords>();
  const [address, setAddress] = useState("");
  const { user, updateAddress } = useUser();

  useEffect(() => {
    (async () => {
      const userAddress = await findAddress({
        sessionId: user.session_id,
      });
      if (userAddress) {
        router.navigate("/catalog");
        return;
      }

      const permission = await getLocationPermission();
      if (!permission) return;

      const currentLocation = await getCurrentLocation();
      await getAddressFromCoodenates(currentLocation);
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
      let { street, city, region, postalCode } = reverseGeocode[0];
      setAddress(`${street}, ${city} - ${region}, ${postalCode}`);
      updateAddress({
        street: street || undefined,
        city: city || undefined,
        district: region || undefined,
        cep: postalCode ? Number(postalCode) : undefined,
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Onde iremos entregar?</Text>
        <Text style={styles.headerSubtitle}>
          Caso você não esteja vendo a localização correta, digite abaixo o endereço ou CEP
        </Text>
      </View>
      <View style={styles.form}>
        <Input
          placeholder="Digite seu endereço ou CEP"
          value={address}
          onChangeText={setAddress}
          label="Endereço:"
        />
      </View>
      {location ? (
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

      <Button text="Continuar" onPress={() => router.navigate("/location-details")} />
    </View>
  );
}
