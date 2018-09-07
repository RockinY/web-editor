import isURL from 'validator/lib/isURL';

export const IFRAME_TAG = /(<iframe.*?src=['"](.*?)['"])/gi;
export const CODEPEN_URLS = /(https?:\/\/)?(.+?\.)?codepen.io(\/[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?/gi;
export const STARTS_WITH_PROTOCOL = /^https?:\/\//i;

const addProtocolToString = (url: string) => {
  if (STARTS_WITH_PROTOCOL.test(url)) {
    return url;
  } else {
    return `https://${url}`;
  }
};

const parseEmbedUrl = incomingUrl => {
  /* Check iframe */
  const isIframeTag = incomingUrl.match(IFRAME_TAG)
  if (isIframeTag) {
    return {
      url: IFRAME_TAG.exec(incomingUrl)[2]
    }
  }

  /* Pre process */
  const url = addProtocolToString(incomingUrl);

  /* Codepen */
  const isCodePenUrl = url.match(CODEPEN_URLS);
  if (isCodePenUrl) {
    return {
      url,
      height: 300,
    };
  }

  if (!isURL(url)) return null;

  return {
    url,
  };
}

export default parseEmbedUrl