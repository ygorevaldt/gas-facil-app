import { Button } from "@/components/button";
import { useUser } from "@/hooks";
import * as Loc from "expo-location";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Form } from "./form";
import { Header } from "./header";
import { Map } from "./map";
import { SkeletonMap } from "./skeleton-map";
import { styles } from "./styles";

export default function Location() {
  const [location, setLocation] = useState<Loc.LocationObjectCoords>();
  const [address, setAddress] = useState("");
  const { address: userAddres } = useUser();

  useEffect(() => {
    (async () => {
      if (userAddres) {
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
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <Form address={address} setAddress={setAddress} />
      {location ? <Map location={location} /> : <SkeletonMap />}
      <Button text="Confirmar localização" onPress={() => router.navigate("/location-details")} />
    </View>
  );
}
