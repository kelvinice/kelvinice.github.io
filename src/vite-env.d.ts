/// <reference types="vite/client" />

/** Output of vite-imagetools with `as=picture` (see `?picture` / `?avatar` in vite.config.ts). */
interface ImagePicture {
  sources: Record<string, string>
  img: { src: string; w: number; h: number }
}

declare module '*?picture' {
  const picture: ImagePicture
  export default picture
}

declare module '*?avatar' {
  const picture: ImagePicture
  export default picture
}
