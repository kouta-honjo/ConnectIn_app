// src/types/index.ts

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatarUrl?: string;
}

export interface Circle {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  imageUrl?: string;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'like' | 'comment' | 'follow' | 'circle_invite';
  message: string;
  timestamp: string;
  read: boolean;
}
