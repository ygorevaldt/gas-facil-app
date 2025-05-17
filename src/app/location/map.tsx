import * as Loc from "expo-location";
import MapView, { MapViewProps, Marker } from "react-native-maps";
import { styles } from "./styles";

interface MapProps extends MapViewProps {
  location: Loc.LocationObjectCoords;
}

export function Map(props: MapProps) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: props.location.latitude,
        longitude: props.location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={{ latitude: props.location.latitude, longitude: props.location.longitude }}
      />
    </MapView>
  );
}
