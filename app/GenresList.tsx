"use client";

import useGenres from "@/hooks/useGenres";
import { Image, Text } from "@chakra-ui/react";
import { HStack, List, ListItem } from "@chakra-ui/react";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} py="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
              alt={genre.name}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
