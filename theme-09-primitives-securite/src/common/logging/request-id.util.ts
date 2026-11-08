import { createUlid, ULID_REGEX } from '@common/database';

export const REQUEST_ID_HEADER = 'x-request-id';
export const REQUEST_ID_RESPONSE_HEADER = 'X-Request-Id';

/**
 * An incoming X-Request-Id is never authorization/security context. It is
 * accepted only when it is already a well-formed ULID; anything else is
 * replaced by a fresh server-generated ULID rather than rejected outright,
 * so a malformed header never breaks the request.
 */
export const resolveRequestId = (
  incomingHeaderValue: string | string[] | undefined,
): string => {
  const rawValue = Array.isArray(incomingHeaderValue)
    ? incomingHeaderValue[0]
    : incomingHeaderValue;

  if (rawValue && ULID_REGEX.test(rawValue)) {
    return rawValue;
  }

  return createUlid();
};
