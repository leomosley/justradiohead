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
  createdAt: Date;
  updatedAt: Date;
}

export interface ImageModel {
  id: string;
  imageURL: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CollectionModel {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LinksModel {
  id: string;
  text: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}