module.exports = {

    // region 100

    Status100Continue: 100,
    Status101SwitchingProtocols: 101,
    Status102Processing: 102,

    // endregion 100

    // region 200

    Status200OK: 200,
    Status201Created: 201,
    Status202Accepted: 202,
    Status203NonAuthoritative: 203,
    Status204NoContent: 204,
    Status205ResetContent: 205,
    Status206PartialContent: 206,
    Status207MultiStatus: 207,
    Status208AlreadyReported: 208,
    Status226IMUsed: 226,

    // endregion 200

    // region 300

    Status300MultipleChoices: 300,
    Status301MovedPermanently: 301,
    Status302Found: 302,
    Status303SeeOther: 303,
    Status304NotModified: 304,
    Status305UseProxy: 305,
    Status306SwitchProxy: 306, // RFC 2616, removed
    Status307TemporaryRedirect: 307,
    Status308PermanentRedirect: 308,

    // endregion 300

    // region 400

    Status400BadRequest: 400,
    Status401Unauthorized: 401,
    Status402PaymentRequired: 402,
    Status403Forbidden: 403,
    Status404NotFound: 404,
    Status405MethodNotAllowed: 405,
    Status406NotAcceptable: 406,
    Status407ProxyAuthenticationRequired: 407,
    Status408RequestTimeout: 408,
    Status409Conflict: 409,
    Status410Gone: 410,
    Status411LengthRequired: 411,
    Status412PreconditionFailed: 412,
    Status413RequestEntityTooLarge: 413, // RFC 2616, renamed
    Status413PayloadTooLarge: 413, // RFC 7231
    Status414RequestUriTooLong: 414, // RFC 2616, renamed
    Status414UriTooLong: 414, // RFC 7231
    Status415UnsupportedMediaType: 415,
    Status416RequestedRangeNotSatisfiable: 416, // RFC 2616, renamed
    Status416RangeNotSatisfiable: 416, // RFC 7233
    Status417ExpectationFailed: 417,
    Status418ImATeapot: 418,
    Status419AuthenticationTimeout: 419, // Not defined in any RFC
    Status421MisdirectedRequest: 421,
    Status422UnprocessableEntity: 422,
    Status423Locked: 423,
    Status424FailedDependency: 424,
    Status426UpgradeRequired: 426,
    Status428PreconditionRequired: 428,
    Status429TooManyRequests: 429,
    Status431RequestHeaderFieldsTooLarge: 431,
    Status451UnavailableForLegalReasons: 451,

    // endregion 400

    // region 500

    Status500InternalServerError: 500,
    Status501NotImplemented: 501,
    Status502BadGateway: 502,
    Status503ServiceUnavailable: 503,
    Status504GatewayTimeout: 504,
    Status505HttpVersionNotsupported: 505,
    Status506VariantAlsoNegotiates: 506,
    Status507InsufficientStorage: 507,
    Status508LoopDetected: 508,
    Status510NotExtended: 510,
    Status511NetworkAuthenticationRequired: 511,

    // endregion 500
}