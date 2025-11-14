import apiClient from "@/services/apiClient";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = () => useData<Game>("/games");

export default useGames;
