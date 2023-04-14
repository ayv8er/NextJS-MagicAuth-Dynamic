import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

const createMagic = (key) =>
  typeof window != "undefined" &&
  new Magic(key, {
    extension: [new OAuthExtension()],
  });

export const magic = createMagic("pk_live_F0F90BB7094C2ACE");