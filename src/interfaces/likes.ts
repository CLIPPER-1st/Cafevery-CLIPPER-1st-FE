export interface Likes {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  address: string;
  start_time: string;
  end_time: string;
  likes: number;
  liked: boolean | null;
  //in_business: boolean;
}

export interface ILikesList {
  cafes: Likes[];
}
