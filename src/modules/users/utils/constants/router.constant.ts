

const ROUTER_PREFIX: string = '/users/';

// Auth Routes
export const getUserById: string = ROUTER_PREFIX + ':id';
export const getUserAndAlbumById: string = ROUTER_PREFIX + ':id/albums';
export const getAlbumAndImageById: string = ROUTER_PREFIX + ':id/images';
