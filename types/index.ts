export interface AdminUser {
  id: string;
  name?: string;
}

export interface ShowModel {
  id: string;
  title: string;
  venue: string;
  location: string;
  ticketLink: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface ImageModel {
  id: string;
  imageURL: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CollectionModel {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}