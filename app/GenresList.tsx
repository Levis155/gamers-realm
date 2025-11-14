"use client";

import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Image, Spinner, Text } from "@chakra-ui/react";
import { HStack, List, ListItem } from "@chakra-ui/react";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} py="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
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
