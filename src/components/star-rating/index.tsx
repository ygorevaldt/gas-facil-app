// components/StarRating.tsx
import { colors } from "@/constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
}

export const StarRating = ({ rating, max = 5, size = 18 }: StarRatingProps) => {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    if (i <= rating) {
      stars.push(<FontAwesome key={i} name="star" size={size} color={colors.yellow[500]} />);
    } else if (i - rating <= 0.5) {
      stars.push(
        <FontAwesome key={i} name="star-half-empty" size={size} color={colors.yellow[500]} />
      );
    } else {
      stars.push(<FontAwesome key={i} name="star-o" size={size} color={colors.yellow[500]} />);
    }
  }

  return <View style={styles.container}>{stars}</View>;
};
