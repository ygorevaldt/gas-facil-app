// components/StarRating.tsx
import { colors } from "@/constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  onRate?: (value: number) => void;
}

export const StarRating = ({ rating, max = 5, size = 18, onRate }: StarRatingProps) => {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    const isFilled = i <= rating;

    const star = (
      <FontAwesome
        key={i}
        name={isFilled ? "star" : "star-o"}
        size={size}
        color={colors.yellow[500]}
        style={{ marginHorizontal: 2 }}
      />
    );

    stars.push(
      onRate ? (
        <TouchableOpacity key={i} onPress={() => onRate(i)}>
          {star}
        </TouchableOpacity>
      ) : (
        star
      )
    );
  }

  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};
