import { Collection, Images } from "@prisma/client";

export interface AdminUser {
  id: string;
  name?: string;
}

export interface ImagesWithCollections extends Images {
  collections: Collection[];
}