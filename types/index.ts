export interface AdminUser {
  id: string;
  name?: string;
}

export interface Show {
  id: string;
  title: string;
  venue: string;
  location: string;
  ticketLink: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id: string;
  imageURL: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}