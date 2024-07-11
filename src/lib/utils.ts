import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function dateFormater(dateString: string): string {
  const date: Date = new Date(dateString);
    const now: Date = new Date();
    const diff: number = now.getTime() - date.getTime();
    
    const seconds: number = Math.floor(diff / 1000);
    const minutes: number = Math.floor(diff / 60000);
    const hours: number = Math.floor(diff / 3600000);
    const days: number = Math.floor(diff / 86400000);

    if (seconds < 60) {
        return ' just now';
    } else if (minutes < 60) {
        return minutes + ' minutes ago';
    } else if (hours < 24) {
        return hours + ' hours ago';
    } else {
        return days + ' days ago';
    }
}


export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};