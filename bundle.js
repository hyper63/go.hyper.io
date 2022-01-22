// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var Status;
(function(Status1) {
    Status1[Status1["Continue"] = 100] = "Continue";
    Status1[Status1["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    Status1[Status1["Processing"] = 102] = "Processing";
    Status1[Status1["EarlyHints"] = 103] = "EarlyHints";
    Status1[Status1["OK"] = 200] = "OK";
    Status1[Status1["Created"] = 201] = "Created";
    Status1[Status1["Accepted"] = 202] = "Accepted";
    Status1[Status1["NonAuthoritativeInfo"] = 203] = "NonAuthoritativeInfo";
    Status1[Status1["NoContent"] = 204] = "NoContent";
    Status1[Status1["ResetContent"] = 205] = "ResetContent";
    Status1[Status1["PartialContent"] = 206] = "PartialContent";
    Status1[Status1["MultiStatus"] = 207] = "MultiStatus";
    Status1[Status1["AlreadyReported"] = 208] = "AlreadyReported";
    Status1[Status1["IMUsed"] = 226] = "IMUsed";
    Status1[Status1["MultipleChoices"] = 300] = "MultipleChoices";
    Status1[Status1["MovedPermanently"] = 301] = "MovedPermanently";
    Status1[Status1["Found"] = 302] = "Found";
    Status1[Status1["SeeOther"] = 303] = "SeeOther";
    Status1[Status1["NotModified"] = 304] = "NotModified";
    Status1[Status1["UseProxy"] = 305] = "UseProxy";
    Status1[Status1["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    Status1[Status1["PermanentRedirect"] = 308] = "PermanentRedirect";
    Status1[Status1["BadRequest"] = 400] = "BadRequest";
    Status1[Status1["Unauthorized"] = 401] = "Unauthorized";
    Status1[Status1["PaymentRequired"] = 402] = "PaymentRequired";
    Status1[Status1["Forbidden"] = 403] = "Forbidden";
    Status1[Status1["NotFound"] = 404] = "NotFound";
    Status1[Status1["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    Status1[Status1["NotAcceptable"] = 406] = "NotAcceptable";
    Status1[Status1["ProxyAuthRequired"] = 407] = "ProxyAuthRequired";
    Status1[Status1["RequestTimeout"] = 408] = "RequestTimeout";
    Status1[Status1["Conflict"] = 409] = "Conflict";
    Status1[Status1["Gone"] = 410] = "Gone";
    Status1[Status1["LengthRequired"] = 411] = "LengthRequired";
    Status1[Status1["PreconditionFailed"] = 412] = "PreconditionFailed";
    Status1[Status1["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    Status1[Status1["RequestURITooLong"] = 414] = "RequestURITooLong";
    Status1[Status1["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    Status1[Status1["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    Status1[Status1["ExpectationFailed"] = 417] = "ExpectationFailed";
    Status1[Status1["Teapot"] = 418] = "Teapot";
    Status1[Status1["MisdirectedRequest"] = 421] = "MisdirectedRequest";
    Status1[Status1["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    Status1[Status1["Locked"] = 423] = "Locked";
    Status1[Status1["FailedDependency"] = 424] = "FailedDependency";
    Status1[Status1["TooEarly"] = 425] = "TooEarly";
    Status1[Status1["UpgradeRequired"] = 426] = "UpgradeRequired";
    Status1[Status1["PreconditionRequired"] = 428] = "PreconditionRequired";
    Status1[Status1["TooManyRequests"] = 429] = "TooManyRequests";
    Status1[Status1["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    Status1[Status1["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    Status1[Status1["InternalServerError"] = 500] = "InternalServerError";
    Status1[Status1["NotImplemented"] = 501] = "NotImplemented";
    Status1[Status1["BadGateway"] = 502] = "BadGateway";
    Status1[Status1["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    Status1[Status1["GatewayTimeout"] = 504] = "GatewayTimeout";
    Status1[Status1["HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
    Status1[Status1["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    Status1[Status1["InsufficientStorage"] = 507] = "InsufficientStorage";
    Status1[Status1["LoopDetected"] = 508] = "LoopDetected";
    Status1[Status1["NotExtended"] = 510] = "NotExtended";
    Status1[Status1["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(Status || (Status = {}));
const STATUS_TEXT = new Map([
    [
        Status.Continue,
        "Continue"
    ],
    [
        Status.SwitchingProtocols,
        "Switching Protocols"
    ],
    [
        Status.Processing,
        "Processing"
    ],
    [
        Status.EarlyHints,
        "Early Hints"
    ],
    [
        Status.OK,
        "OK"
    ],
    [
        Status.Created,
        "Created"
    ],
    [
        Status.Accepted,
        "Accepted"
    ],
    [
        Status.NonAuthoritativeInfo,
        "Non-Authoritative Information"
    ],
    [
        Status.NoContent,
        "No Content"
    ],
    [
        Status.ResetContent,
        "Reset Content"
    ],
    [
        Status.PartialContent,
        "Partial Content"
    ],
    [
        Status.MultiStatus,
        "Multi-Status"
    ],
    [
        Status.AlreadyReported,
        "Already Reported"
    ],
    [
        Status.IMUsed,
        "IM Used"
    ],
    [
        Status.MultipleChoices,
        "Multiple Choices"
    ],
    [
        Status.MovedPermanently,
        "Moved Permanently"
    ],
    [
        Status.Found,
        "Found"
    ],
    [
        Status.SeeOther,
        "See Other"
    ],
    [
        Status.NotModified,
        "Not Modified"
    ],
    [
        Status.UseProxy,
        "Use Proxy"
    ],
    [
        Status.TemporaryRedirect,
        "Temporary Redirect"
    ],
    [
        Status.PermanentRedirect,
        "Permanent Redirect"
    ],
    [
        Status.BadRequest,
        "Bad Request"
    ],
    [
        Status.Unauthorized,
        "Unauthorized"
    ],
    [
        Status.PaymentRequired,
        "Payment Required"
    ],
    [
        Status.Forbidden,
        "Forbidden"
    ],
    [
        Status.NotFound,
        "Not Found"
    ],
    [
        Status.MethodNotAllowed,
        "Method Not Allowed"
    ],
    [
        Status.NotAcceptable,
        "Not Acceptable"
    ],
    [
        Status.ProxyAuthRequired,
        "Proxy Authentication Required"
    ],
    [
        Status.RequestTimeout,
        "Request Timeout"
    ],
    [
        Status.Conflict,
        "Conflict"
    ],
    [
        Status.Gone,
        "Gone"
    ],
    [
        Status.LengthRequired,
        "Length Required"
    ],
    [
        Status.PreconditionFailed,
        "Precondition Failed"
    ],
    [
        Status.RequestEntityTooLarge,
        "Request Entity Too Large"
    ],
    [
        Status.RequestURITooLong,
        "Request URI Too Long"
    ],
    [
        Status.UnsupportedMediaType,
        "Unsupported Media Type"
    ],
    [
        Status.RequestedRangeNotSatisfiable,
        "Requested Range Not Satisfiable"
    ],
    [
        Status.ExpectationFailed,
        "Expectation Failed"
    ],
    [
        Status.Teapot,
        "I'm a teapot"
    ],
    [
        Status.MisdirectedRequest,
        "Misdirected Request"
    ],
    [
        Status.UnprocessableEntity,
        "Unprocessable Entity"
    ],
    [
        Status.Locked,
        "Locked"
    ],
    [
        Status.FailedDependency,
        "Failed Dependency"
    ],
    [
        Status.TooEarly,
        "Too Early"
    ],
    [
        Status.UpgradeRequired,
        "Upgrade Required"
    ],
    [
        Status.PreconditionRequired,
        "Precondition Required"
    ],
    [
        Status.TooManyRequests,
        "Too Many Requests"
    ],
    [
        Status.RequestHeaderFieldsTooLarge,
        "Request Header Fields Too Large"
    ],
    [
        Status.UnavailableForLegalReasons,
        "Unavailable For Legal Reasons"
    ],
    [
        Status.InternalServerError,
        "Internal Server Error"
    ],
    [
        Status.NotImplemented,
        "Not Implemented"
    ],
    [
        Status.BadGateway,
        "Bad Gateway"
    ],
    [
        Status.ServiceUnavailable,
        "Service Unavailable"
    ],
    [
        Status.GatewayTimeout,
        "Gateway Timeout"
    ],
    [
        Status.HTTPVersionNotSupported,
        "HTTP Version Not Supported"
    ],
    [
        Status.VariantAlsoNegotiates,
        "Variant Also Negotiates"
    ],
    [
        Status.InsufficientStorage,
        "Insufficient Storage"
    ],
    [
        Status.LoopDetected,
        "Loop Detected"
    ],
    [
        Status.NotExtended,
        "Not Extended"
    ],
    [
        Status.NetworkAuthenticationRequired,
        "Network Authentication Required"
    ], 
]);
class LRU {
    #max;
    #cache;
    constructor(max1){
        this.#max = max1;
        this.#cache = new Map();
    }
    [Symbol.iterator]() {
        const iterator = this.#cache[Symbol.iterator]();
        return {
            next: ()=>iterator.next()
        };
    }
    get size() {
        return this.#cache.size;
    }
    get object() {
        return Object.fromEntries(this.#cache);
    }
    get values() {
        return Array.from(this.#cache.values());
    }
    get keys() {
        return Array.from(this.#cache.keys());
    }
    forEach(callbackfn, thisArg) {
        return this.#cache.forEach(callbackfn, thisArg);
    }
    map(callbackfn, thisArg) {
        return Array.from(this.#cache).map(callbackfn, thisArg);
    }
    filter(callbackfn, thisArg) {
        return Array.from(this.#cache).filter(callbackfn, thisArg);
    }
    reduce(callbackfn, initialValue) {
        return Array.from(this.#cache).reduce(callbackfn, initialValue);
    }
    clear() {
        this.#cache.clear();
    }
    has(key) {
        return this.#cache.has(key);
    }
    get(key) {
        const item = this.#cache.get(key);
        if (!item) return undefined;
        this.remove(key);
        this.#cache.set(key, item);
        return item;
    }
    remove(key) {
        this.#cache.delete(key);
    }
    set(key, value) {
        if (this.has(key)) this.remove(key);
        else if (this.size === this.#max) this.remove(this._first());
        this.#cache.set(key, value);
    }
    _first() {
        return this.#cache.keys().next().value;
    }
}
const statusCodeCacheableByDefault = new Set([
    200,
    203,
    204,
    206,
    300,
    301,
    404,
    405,
    410,
    414,
    501
]);
const understoodStatuses = new Set([
    200,
    203,
    204,
    300,
    301,
    302,
    303,
    307,
    308,
    404,
    405,
    410,
    414,
    501
]);
const errorStatusCodes = new Set([
    500,
    502,
    503,
    504
]);
const hopByHopHeaders = {
    date: true,
    connection: true,
    "keep-alive": true,
    "proxy-authenticate": true,
    "proxy-authorization": true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true
};
const excludedFromRevalidationUpdate = {
    "content-length": true,
    "content-encoding": true,
    "transfer-encoding": true,
    "content-range": true
};
function toNumberOrZero(s2) {
    const n2 = parseInt(s2, 10);
    return isFinite(n2) ? n2 : 0;
}
function isErrorResponse(response) {
    if (!response) {
        return true;
    }
    return errorStatusCodes.has(response.status);
}
function parseCacheControl(header) {
    const cc = {};
    if (!header) return cc;
    const parts = header.trim().split(/\s*,\s*/);
    for (const part of parts){
        const [k1, v2] = part.split(/\s*=\s*/, 2);
        cc[k1] = v2 === void 0 ? true : v2.replace(/^"|"$/g, "");
    }
    return cc;
}
function formatCacheControl(cc) {
    let parts = [];
    for(const k2 in cc){
        const v3 = cc[k2];
        parts.push(v3 === true ? k2 : k2 + "=" + v3);
    }
    if (!parts.length) {
        return void 0;
    }
    return parts.join(", ");
}
var httpCacheSemantics = class CachePolicy {
    constructor(req, res, { shared , cacheHeuristic , immutableMinTimeToLive , ignoreCargoCult , _fromObject  } = {}){
        if (_fromObject) {
            this._fromObject(_fromObject);
            return;
        }
        if (!res || !res.headers) {
            throw Error("Response headers missing");
        }
        this._assertRequestHasHeaders(req);
        this._responseTime = this.now();
        this._isShared = shared !== false;
        this._cacheHeuristic = cacheHeuristic !== void 0 ? cacheHeuristic : 0.1;
        this._immutableMinTtl = immutableMinTimeToLive !== void 0 ? immutableMinTimeToLive : 24 * 3600 * 1000;
        this._status = "status" in res ? res.status : 200;
        this._resHeaders = res.headers;
        this._rescc = parseCacheControl(res.headers["cache-control"]);
        this._method = "method" in req ? req.method : "GET";
        this._url = req.url;
        this._host = req.headers.host;
        this._noAuthorization = !req.headers.authorization;
        this._reqHeaders = res.headers.vary ? req.headers : null;
        this._reqcc = parseCacheControl(req.headers["cache-control"]);
        if (ignoreCargoCult && "pre-check" in this._rescc && "post-check" in this._rescc) {
            delete this._rescc["pre-check"];
            delete this._rescc["post-check"];
            delete this._rescc["no-cache"];
            delete this._rescc["no-store"];
            delete this._rescc["must-revalidate"];
            this._resHeaders = Object.assign({}, this._resHeaders, {
                "cache-control": formatCacheControl(this._rescc)
            });
            delete this._resHeaders.expires;
            delete this._resHeaders.pragma;
        }
        if (res.headers["cache-control"] == null && /no-cache/.test(res.headers.pragma)) {
            this._rescc["no-cache"] = true;
        }
    }
    now() {
        return Date.now();
    }
    storable() {
        return !!(!this._reqcc["no-store"] && (this._method === "GET" || this._method === "HEAD" || this._method === "POST" && this._hasExplicitExpiration()) && understoodStatuses.has(this._status) && !this._rescc["no-store"] && (!this._isShared || !this._rescc.private) && (!this._isShared || this._noAuthorization || this._allowsStoringAuthenticated()) && (this._resHeaders.expires || this._rescc["max-age"] || this._isShared && this._rescc["s-maxage"] || this._rescc.public || statusCodeCacheableByDefault.has(this._status)));
    }
    _hasExplicitExpiration() {
        return this._isShared && this._rescc["s-maxage"] || this._rescc["max-age"] || this._resHeaders.expires;
    }
    _assertRequestHasHeaders(req) {
        if (!req || !req.headers) {
            throw Error("Request headers missing");
        }
    }
    satisfiesWithoutRevalidation(req) {
        this._assertRequestHasHeaders(req);
        const requestCC = parseCacheControl(req.headers["cache-control"]);
        if (requestCC["no-cache"] || /no-cache/.test(req.headers.pragma)) {
            return false;
        }
        if (requestCC["max-age"] && this.age() > requestCC["max-age"]) {
            return false;
        }
        if (requestCC["min-fresh"] && this.timeToLive() < 1000 * requestCC["min-fresh"]) {
            return false;
        }
        if (this.stale()) {
            const allowsStale = requestCC["max-stale"] && !this._rescc["must-revalidate"] && (requestCC["max-stale"] === true || requestCC["max-stale"] > this.age() - this.maxAge());
            if (!allowsStale) {
                return false;
            }
        }
        return this._requestMatches(req, false);
    }
    _requestMatches(req, allowHeadMethod) {
        return (!this._url || this._url === req.url) && this._host === req.headers.host && (!req.method || this._method === req.method || allowHeadMethod && req.method === "HEAD") && this._varyMatches(req);
    }
    _allowsStoringAuthenticated() {
        return this._rescc["must-revalidate"] || this._rescc.public || this._rescc["s-maxage"];
    }
    _varyMatches(req) {
        if (!this._resHeaders.vary) {
            return true;
        }
        if (this._resHeaders.vary === "*") {
            return false;
        }
        const fields = this._resHeaders.vary.trim().toLowerCase().split(/\s*,\s*/);
        for (const name of fields){
            if (req.headers[name] !== this._reqHeaders[name]) return false;
        }
        return true;
    }
    _copyWithoutHopByHopHeaders(inHeaders) {
        const headers = {};
        for(const name in inHeaders){
            if (hopByHopHeaders[name]) continue;
            headers[name] = inHeaders[name];
        }
        if (inHeaders.connection) {
            const tokens = inHeaders.connection.trim().split(/\s*,\s*/);
            for (const name of tokens){
                delete headers[name];
            }
        }
        if (headers.warning) {
            const warnings = headers.warning.split(/,/).filter((warning)=>{
                return !/^\s*1[0-9][0-9]/.test(warning);
            });
            if (!warnings.length) {
                delete headers.warning;
            } else {
                headers.warning = warnings.join(",").trim();
            }
        }
        return headers;
    }
    responseHeaders() {
        const headers = this._copyWithoutHopByHopHeaders(this._resHeaders);
        const age = this.age();
        if (age > 3600 * 24 && !this._hasExplicitExpiration() && this.maxAge() > 3600 * 24) {
            headers.warning = (headers.warning ? `${headers.warning}, ` : "") + '113 - "rfc7234 5.5.4"';
        }
        headers.age = `${Math.round(age)}`;
        headers.date = new Date(this.now()).toUTCString();
        return headers;
    }
    date() {
        const serverDate = Date.parse(this._resHeaders.date);
        if (isFinite(serverDate)) {
            return serverDate;
        }
        return this._responseTime;
    }
    age() {
        let age = this._ageValue();
        const residentTime = (this.now() - this._responseTime) / 1000;
        return age + residentTime;
    }
    _ageValue() {
        return toNumberOrZero(this._resHeaders.age);
    }
    maxAge() {
        if (!this.storable() || this._rescc["no-cache"]) {
            return 0;
        }
        if (this._isShared && this._resHeaders["set-cookie"] && !this._rescc.public && !this._rescc.immutable) {
            return 0;
        }
        if (this._resHeaders.vary === "*") {
            return 0;
        }
        if (this._isShared) {
            if (this._rescc["proxy-revalidate"]) {
                return 0;
            }
            if (this._rescc["s-maxage"]) {
                return toNumberOrZero(this._rescc["s-maxage"]);
            }
        }
        if (this._rescc["max-age"]) {
            return toNumberOrZero(this._rescc["max-age"]);
        }
        const defaultMinTtl = this._rescc.immutable ? this._immutableMinTtl : 0;
        const serverDate = this.date();
        if (this._resHeaders.expires) {
            const expires = Date.parse(this._resHeaders.expires);
            if (Number.isNaN(expires) || expires < serverDate) {
                return 0;
            }
            return Math.max(defaultMinTtl, (expires - serverDate) / 1000);
        }
        if (this._resHeaders["last-modified"]) {
            const lastModified = Date.parse(this._resHeaders["last-modified"]);
            if (isFinite(lastModified) && serverDate > lastModified) {
                return Math.max(defaultMinTtl, (serverDate - lastModified) / 1000 * this._cacheHeuristic);
            }
        }
        return defaultMinTtl;
    }
    timeToLive() {
        const age = this.maxAge() - this.age();
        const staleIfErrorAge = age + toNumberOrZero(this._rescc["stale-if-error"]);
        const staleWhileRevalidateAge = age + toNumberOrZero(this._rescc["stale-while-revalidate"]);
        return Math.max(0, age, staleIfErrorAge, staleWhileRevalidateAge) * 1000;
    }
    stale() {
        return this.maxAge() <= this.age();
    }
    _useStaleIfError() {
        return this.maxAge() + toNumberOrZero(this._rescc["stale-if-error"]) > this.age();
    }
    useStaleWhileRevalidate() {
        return this.maxAge() + toNumberOrZero(this._rescc["stale-while-revalidate"]) > this.age();
    }
    static fromObject(obj) {
        return new this(void 0, void 0, {
            _fromObject: obj
        });
    }
    _fromObject(obj) {
        if (this._responseTime) throw Error("Reinitialized");
        if (!obj || obj.v !== 1) throw Error("Invalid serialization");
        this._responseTime = obj.t;
        this._isShared = obj.sh;
        this._cacheHeuristic = obj.ch;
        this._immutableMinTtl = obj.imm !== void 0 ? obj.imm : 24 * 3600 * 1000;
        this._status = obj.st;
        this._resHeaders = obj.resh;
        this._rescc = obj.rescc;
        this._method = obj.m;
        this._url = obj.u;
        this._host = obj.h;
        this._noAuthorization = obj.a;
        this._reqHeaders = obj.reqh;
        this._reqcc = obj.reqcc;
    }
    toObject() {
        return {
            v: 1,
            t: this._responseTime,
            sh: this._isShared,
            ch: this._cacheHeuristic,
            imm: this._immutableMinTtl,
            st: this._status,
            resh: this._resHeaders,
            rescc: this._rescc,
            m: this._method,
            u: this._url,
            h: this._host,
            a: this._noAuthorization,
            reqh: this._reqHeaders,
            reqcc: this._reqcc
        };
    }
    revalidationHeaders(incomingReq) {
        this._assertRequestHasHeaders(incomingReq);
        const headers = this._copyWithoutHopByHopHeaders(incomingReq.headers);
        delete headers["if-range"];
        if (!this._requestMatches(incomingReq, true) || !this.storable()) {
            delete headers["if-none-match"];
            delete headers["if-modified-since"];
            return headers;
        }
        if (this._resHeaders.etag) {
            headers["if-none-match"] = headers["if-none-match"] ? `${headers["if-none-match"]}, ${this._resHeaders.etag}` : this._resHeaders.etag;
        }
        const forbidsWeakValidators = headers["accept-ranges"] || headers["if-match"] || headers["if-unmodified-since"] || this._method && this._method != "GET";
        if (forbidsWeakValidators) {
            delete headers["if-modified-since"];
            if (headers["if-none-match"]) {
                const etags = headers["if-none-match"].split(/,/).filter((etag)=>{
                    return !/^\s*W\//.test(etag);
                });
                if (!etags.length) {
                    delete headers["if-none-match"];
                } else {
                    headers["if-none-match"] = etags.join(",").trim();
                }
            }
        } else if (this._resHeaders["last-modified"] && !headers["if-modified-since"]) {
            headers["if-modified-since"] = this._resHeaders["last-modified"];
        }
        return headers;
    }
    revalidatedPolicy(request, response) {
        this._assertRequestHasHeaders(request);
        if (this._useStaleIfError() && isErrorResponse(response)) {
            return {
                modified: false,
                matches: false,
                policy: this
            };
        }
        if (!response || !response.headers) {
            throw Error("Response headers missing");
        }
        let matches = false;
        if (response.status !== void 0 && response.status != 304) {
            matches = false;
        } else if (response.headers.etag && !/^\s*W\//.test(response.headers.etag)) {
            matches = this._resHeaders.etag && this._resHeaders.etag.replace(/^\s*W\//, "") === response.headers.etag;
        } else if (this._resHeaders.etag && response.headers.etag) {
            matches = this._resHeaders.etag.replace(/^\s*W\//, "") === response.headers.etag.replace(/^\s*W\//, "");
        } else if (this._resHeaders["last-modified"]) {
            matches = this._resHeaders["last-modified"] === response.headers["last-modified"];
        } else {
            if (!this._resHeaders.etag && !this._resHeaders["last-modified"] && !response.headers.etag && !response.headers["last-modified"]) {
                matches = true;
            }
        }
        if (!matches) {
            return {
                policy: new this.constructor(request, response),
                modified: response.status != 304,
                matches: false
            };
        }
        const headers = {};
        for(const k3 in this._resHeaders){
            headers[k3] = k3 in response.headers && !excludedFromRevalidationUpdate[k3] ? response.headers[k3] : this._resHeaders[k3];
        }
        const newResponse = Object.assign({}, response, {
            status: this._status,
            method: this._method,
            headers
        });
        return {
            policy: new this.constructor(request, newResponse, {
                shared: this._isShared,
                cacheHeuristic: this._cacheHeuristic,
                immutableMinTimeToLive: this._immutableMinTtl
            }),
            modified: false,
            matches: true
        };
    }
};
function cacheRequest(req) {
    return {
        url: req.url,
        headers: Object.fromEntries(req.headers.entries()),
        method: req.method
    };
}
class Cache {
    #storage;
    constructor(storage){
        this.#storage = storage;
    }
    close() {
        this.#storage.close();
    }
    async match(request) {
        const req = request instanceof Request ? request : new Request(request);
        const cached = await this.#storage.get(req.url);
        if (cached === undefined) return Promise.resolve(undefined);
        const policy = httpCacheSemantics.fromObject(cached.policy);
        const usable = policy.satisfiesWithoutRevalidation(cacheRequest(req));
        if (!usable) return Promise.resolve(undefined);
        const resp = new Response(cached.body, {
            headers: policy.responseHeaders(),
            status: cached.policy.st
        });
        return Promise.resolve(resp);
    }
    async put(request, response) {
        const req = request instanceof Request ? request : new Request(request);
        response = response.clone();
        const status = response.status;
        const headers = Object.fromEntries(response.headers.entries());
        const policy = new httpCacheSemantics(cacheRequest(req), {
            status,
            headers
        }, {
            shared: true
        });
        if (!policy.storable()) return;
        const body = await response.arrayBuffer();
        await this.#storage.set(req.url, {
            body: new Uint8Array(body),
            policy: policy.toObject()
        });
    }
    async delete(request) {
        const req = request instanceof Request ? request : new Request(request);
        await this.#storage.delete(req.url);
        return Promise.resolve();
    }
}
function inMemoryCache(capacity) {
    const lru = new LRU(capacity);
    return new Cache({
        get (url) {
            return Promise.resolve(lru.get(url));
        },
        set (url, resp) {
            lru.set(url, resp);
            return Promise.resolve();
        },
        delete (url) {
            lru.remove(url);
            return Promise.resolve();
        },
        close () {
            lru.clear();
        }
    });
}
var n, u, i, t, o = {}, f = [], e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function c(n2, l2) {
    for(var u2 in l2)n2[u2] = l2[u2];
    return n2;
}
function s(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function a(n2, l2, u2) {
    var i2, t2, r2, o2 = arguments, f2 = {};
    for(r2 in l2)r2 == "key" ? i2 = l2[r2] : r2 == "ref" ? t2 = l2[r2] : f2[r2] = l2[r2];
    if (arguments.length > 3) for(u2 = [
        u2
    ], r2 = 3; r2 < arguments.length; r2++)u2.push(o2[r2]);
    if (u2 != null && (f2.children = u2), typeof n2 == "function" && n2.defaultProps != null) for(r2 in n2.defaultProps)f2[r2] === void 0 && (f2[r2] = n2.defaultProps[r2]);
    return v(n2, f2, i2, t2, null);
}
function v(l2, u2, i2, t2, r2) {
    var o2 = {
        type: l2,
        props: u2,
        key: i2,
        ref: t2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: r2 == null ? ++n.__v : r2
    };
    return n.vnode != null && n.vnode(o2), o2;
}
function y(n2) {
    return n2.children;
}
function p(n2, l2) {
    this.props = n2, this.context = l2;
}
function d(n2, l2) {
    if (l2 == null) return n2.__ ? d(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for(var u2; l2 < n2.__k.length; l2++)if ((u2 = n2.__k[l2]) != null && u2.__e != null) return u2.__e;
    return typeof n2.type == "function" ? d(n2) : null;
}
function _(n2) {
    var l2, u2;
    if ((n2 = n2.__) != null && n2.__c != null) {
        for(n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
            n2.__e = n2.__c.base = u2.__e;
            break;
        }
        return _(n2);
    }
}
function k(l2) {
    (!l2.__d && (l2.__d = true) && u.push(l2) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
}
function m() {
    for(var n2; m.__r = u.length;)n2 = u.sort(function(n3, l2) {
        return n3.__v.__b - l2.__v.__b;
    }), u = [], n2.some(function(n3) {
        var l2, u2, i2, t2, r2, o2;
        n3.__d && (r2 = (t2 = (l2 = n3).__v).__e, (o2 = l2.__P) && (u2 = [], (i2 = c({}, t2)).__v = t2.__v + 1, T(o2, t2, i2, l2.__n, o2.ownerSVGElement !== void 0, t2.__h != null ? [
            r2
        ] : null, u2, r2 == null ? d(t2) : r2, t2.__h), j(u2, t2), t2.__e != r2 && _(t2)));
    });
}
function b(n2, l2, u2, i2, t2, r2, e2, c2, s2, a2) {
    var h2, p2, _2, k2, m2, b2, w2, A2 = i2 && i2.__k || f, P2 = A2.length;
    for(u2.__k = [], h2 = 0; h2 < l2.length; h2++)if ((k2 = u2.__k[h2] = (k2 = l2[h2]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(y, {
        children: k2
    }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
        if (k2.__ = u2, k2.__b = u2.__b + 1, (_2 = A2[h2]) === null || _2 && k2.key == _2.key && k2.type === _2.type) A2[h2] = void 0;
        else for(p2 = 0; p2 < P2; p2++){
            if ((_2 = A2[p2]) && k2.key == _2.key && k2.type === _2.type) {
                A2[p2] = void 0;
                break;
            }
            _2 = null;
        }
        T(n2, k2, _2 = _2 || o, t2, r2, e2, c2, s2, a2), m2 = k2.__e, (p2 = k2.ref) && _2.ref != p2 && (w2 || (w2 = []), _2.ref && w2.push(_2.ref, null, k2), w2.push(p2, k2.__c || m2, k2)), m2 != null ? (b2 == null && (b2 = m2), typeof k2.type == "function" && k2.__k != null && k2.__k === _2.__k ? k2.__d = s2 = g(k2, s2, n2) : s2 = x(n2, k2, _2, A2, m2, s2), a2 || u2.type !== "option" ? typeof u2.type == "function" && (u2.__d = s2) : n2.value = "") : s2 && _2.__e == s2 && s2.parentNode != n2 && (s2 = d(_2));
    }
    for(u2.__e = b2, h2 = P2; h2--;)A2[h2] != null && (typeof u2.type == "function" && A2[h2].__e != null && A2[h2].__e == u2.__d && (u2.__d = d(i2, h2 + 1)), L(A2[h2], A2[h2]));
    if (w2) for(h2 = 0; h2 < w2.length; h2++)I(w2[h2], w2[++h2], w2[++h2]);
}
function g(n2, l2, u2) {
    var i2, t2;
    for(i2 = 0; i2 < n2.__k.length; i2++)(t2 = n2.__k[i2]) && (t2.__ = n2, l2 = typeof t2.type == "function" ? g(t2, l2, u2) : x(u2, t2, t2, n2.__k, t2.__e, l2));
    return l2;
}
function x(n2, l2, u2, i2, t2, r2) {
    var o2, f2, e2;
    if (l2.__d !== void 0) o2 = l2.__d, l2.__d = void 0;
    else if (u2 == null || t2 != r2 || t2.parentNode == null) n: if (r2 == null || r2.parentNode !== n2) n2.appendChild(t2), o2 = null;
    else {
        for(f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)if (f2 == t2) break n;
        n2.insertBefore(t2, r2), o2 = r2;
    }
    return o2 !== void 0 ? o2 : t2.nextSibling;
}
function A(n2, l2, u2, i2, t2) {
    var r2;
    for(r2 in u2)r2 === "children" || r2 === "key" || r2 in l2 || C(n2, r2, null, u2[r2], i2);
    for(r2 in l2)t2 && typeof l2[r2] != "function" || r2 === "children" || r2 === "key" || r2 === "value" || r2 === "checked" || u2[r2] === l2[r2] || C(n2, r2, l2[r2], u2[r2], i2);
}
function P(n2, l2, u2) {
    l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || e.test(l2) ? u2 : u2 + "px";
}
function C(n2, l2, u2, i2, t2) {
    var r2;
    n: if (l2 === "style") if (typeof u2 == "string") n2.style.cssText = u2;
    else {
        if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2) for(l2 in i2)u2 && l2 in u2 || P(n2.style, l2, "");
        if (u2) for(l2 in u2)i2 && u2[l2] === i2[l2] || P(n2.style, l2, u2[l2]);
    }
    else if (l2[0] === "o" && l2[1] === "n") r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? H : $, r2) : n2.removeEventListener(l2, r2 ? H : $, r2);
    else if (l2 !== "dangerouslySetInnerHTML") {
        if (t2) l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "download" && l2 in n2) try {
            n2[l2] = u2 == null ? "" : u2;
            break n;
        } catch (n3) {}
        typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function $(l2) {
    this.l[l2.type + false](n.event ? n.event(l2) : l2);
}
function H(l2) {
    this.l[l2.type + true](n.event ? n.event(l2) : l2);
}
function T(l2, u2, i2, t2, r2, o2, f2, e2, s2) {
    var a2, v2, h2, d2, _2, k2, m2, g2, w2, x2, A2, P2 = u2.type;
    if (u2.constructor !== void 0) return null;
    i2.__h != null && (s2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [
        e2
    ]), (a2 = n.__b) && a2(u2);
    try {
        n: if (typeof P2 == "function") {
            if (g2 = u2.props, w2 = (a2 = P2.contextType) && t2[a2.__c], x2 = a2 ? w2 ? w2.props.value : a2.__ : t2, i2.__c ? m2 = (v2 = u2.__c = i2.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(g2, x2) : (u2.__c = v2 = new p(g2, x2), v2.constructor = P2, v2.render = M), w2 && w2.sub(v2), v2.props = g2, v2.state || (v2.state = {}), v2.context = x2, v2.__n = t2, h2 = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = c({}, v2.__s)), c(v2.__s, P2.getDerivedStateFromProps(g2, v2.__s))), d2 = v2.props, _2 = v2.state, h2) P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
            else {
                if (P2.getDerivedStateFromProps == null && g2 !== d2 && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(g2, x2), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(g2, v2.__s, x2) === false || u2.__v === i2.__v) {
                    v2.props = g2, v2.state = v2.__s, u2.__v !== i2.__v && (v2.__d = false), v2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, v2.__h.length && f2.push(v2);
                    break n;
                }
                v2.componentWillUpdate != null && v2.componentWillUpdate(g2, v2.__s, x2), v2.componentDidUpdate != null && v2.__h.push(function() {
                    v2.componentDidUpdate(d2, _2, k2);
                });
            }
            v2.context = x2, v2.props = g2, v2.state = v2.__s, (a2 = n.__r) && a2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, a2 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (t2 = c(c({}, t2), v2.getChildContext())), h2 || v2.getSnapshotBeforeUpdate == null || (k2 = v2.getSnapshotBeforeUpdate(d2, _2)), A2 = a2 != null && a2.type === y && a2.key == null ? a2.props.children : a2, b(l2, Array.isArray(A2) ? A2 : [
                A2
            ], u2, i2, t2, r2, o2, f2, e2, s2), v2.base = u2.__e, u2.__h = null, v2.__h.length && f2.push(v2), m2 && (v2.__E = v2.__ = null), v2.__e = false;
        } else o2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = z(i2.__e, u2, i2, t2, r2, o2, f2, s2);
        (a2 = n.diffed) && a2(u2);
    } catch (l3) {
        u2.__v = null, (s2 || o2 != null) && (u2.__e = e2, u2.__h = !!s2, o2[o2.indexOf(e2)] = null), n.__e(l3, u2, i2);
    }
}
function j(l2, u2) {
    n.__c && n.__c(u2, l2), l2.some(function(u3) {
        try {
            l2 = u3.__h, u3.__h = [], l2.some(function(n2) {
                n2.call(u3);
            });
        } catch (l3) {
            n.__e(l3, u3.__v);
        }
    });
}
function z(n2, l2, u2, i2, t2, r2, e2, c2) {
    var a2, v2, h2, y2, p2 = u2.props, d2 = l2.props, _2 = l2.type, k2 = 0;
    if (_2 === "svg" && (t2 = true), r2 != null) {
        for(; k2 < r2.length; k2++)if ((a2 = r2[k2]) && (a2 === n2 || (_2 ? a2.localName == _2 : a2.nodeType == 3))) {
            n2 = a2, r2[k2] = null;
            break;
        }
    }
    if (n2 == null) {
        if (_2 === null) return document.createTextNode(d2);
        n2 = t2 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d2.is && d2), r2 = null, c2 = false;
    }
    if (_2 === null) p2 === d2 || c2 && n2.data === d2 || (n2.data = d2);
    else {
        if (r2 = r2 && f.slice.call(n2.childNodes), v2 = (p2 = u2.props || o).dangerouslySetInnerHTML, h2 = d2.dangerouslySetInnerHTML, !c2) {
            if (r2 != null) for(p2 = {}, y2 = 0; y2 < n2.attributes.length; y2++)p2[n2.attributes[y2].name] = n2.attributes[y2].value;
            (h2 || v2) && (h2 && (v2 && h2.__html == v2.__html || h2.__html === n2.innerHTML) || (n2.innerHTML = h2 && h2.__html || ""));
        }
        if (A(n2, d2, p2, t2, c2), h2) l2.__k = [];
        else if (k2 = l2.props.children, b(n2, Array.isArray(k2) ? k2 : [
            k2
        ], l2, u2, i2, t2 && _2 !== "foreignObject", r2, e2, n2.firstChild, c2), r2 != null) for(k2 = r2.length; k2--;)r2[k2] != null && s(r2[k2]);
        c2 || ("value" in d2 && (k2 = d2.value) !== void 0 && (k2 !== n2.value || _2 === "progress" && !k2) && C(n2, "value", k2, p2.value, false), "checked" in d2 && (k2 = d2.checked) !== void 0 && k2 !== n2.checked && C(n2, "checked", k2, p2.checked, false));
    }
    return n2;
}
function I(l2, u2, i2) {
    try {
        typeof l2 == "function" ? l2(u2) : l2.current = u2;
    } catch (l3) {
        n.__e(l3, i2);
    }
}
function L(l2, u2, i2) {
    var t2, r2, o2;
    if (n.unmount && n.unmount(l2), (t2 = l2.ref) && (t2.current && t2.current !== l2.__e || I(t2, null, u2)), i2 || typeof l2.type == "function" || (i2 = (r2 = l2.__e) != null), l2.__e = l2.__d = void 0, (t2 = l2.__c) != null) {
        if (t2.componentWillUnmount) try {
            t2.componentWillUnmount();
        } catch (l3) {
            n.__e(l3, u2);
        }
        t2.base = t2.__P = null;
    }
    if (t2 = l2.__k) for(o2 = 0; o2 < t2.length; o2++)t2[o2] && L(t2[o2], u2, i2);
    r2 != null && s(r2);
}
function M(n2, l2, u2) {
    return this.constructor(n2, u2);
}
n = {
    __e: function(n2, l2) {
        for(var u2, i2, t2; l2 = l2.__;)if ((u2 = l2.__c) && !u2.__) try {
            if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2) return u2.__E = u2;
        } catch (l3) {
            n2 = l3;
        }
        throw n2;
    },
    __v: 0
}, p.prototype.setState = function(n2, l2) {
    var u2;
    u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), typeof n2 == "function" && (n2 = n2(c({}, u2), this.props)), n2 && c(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), k(this));
}, p.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
}, p.prototype.render = y, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, 0;
var n1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
function a1(e1) {
    typeof e1 != "string" && (e1 = String(e1));
    for(var t1 = "", r = 0; r < e1.length; r++){
        var n2 = e1[r];
        switch(n2){
            case "<":
                t1 += "&lt;";
                break;
            case ">":
                t1 += "&gt;";
                break;
            case '"':
                t1 += "&quot;";
                break;
            case "&":
                t1 += "&amp;";
                break;
            default:
                t1 += n2;
        }
    }
    return t1;
}
var o1 = function(e2, t2) {
    return String(e2).replace(/(\n+)/g, "$1" + (t2 || "	"));
}, i1 = function(e3, t3, r) {
    return String(e3).length > (t3 || 40) || !r && String(e3).indexOf("\n") !== -1 || String(e3).indexOf("<") !== -1;
}, l = {};
function s1(e4) {
    var t4 = "";
    for(var r in e4){
        var a2 = e4[r];
        a2 != null && (t4 && (t4 += " "), t4 += r[0] == "-" ? r : l[r] || (l[r] = r.replace(/([A-Z])/g, "-$1").toLowerCase()), t4 += ": ", t4 += a2, typeof a2 == "number" && n1.test(r) === false && (t4 += "px"), t4 += ";");
    }
    return t4 || void 0;
}
function f1(e5, t5) {
    for(var r in t5)e5[r] = t5[r];
    return e5;
}
function c1(e6, t6) {
    return Array.isArray(t6) ? t6.reduce(c1, e6) : t6 != null && t6 !== false && e6.push(t6), e6;
}
var u1 = {
    shallow: true
}, p1 = [], _1 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, v1 = function() {};
h.render = h;
var d1 = function(e7, t7) {
    return h(e7, t7, u1);
}, g1 = [];
function h(n2, l2, u2) {
    var d2 = function n3(l3, u3, d3, g2, h2, m1) {
        if (l3 == null || typeof l3 == "boolean") return "";
        Array.isArray(l3) && (l3 = a(y, null, l3));
        var x1 = l3.type, y1 = l3.props, b1 = false;
        u3 = u3 || {};
        d3 = d3 || {};
        var S = d3.pretty, k4 = S && typeof S == "string" ? S : "	";
        if (typeof l3 != "object" && !x1) return a1(l3);
        if (typeof x1 == "function") {
            if (b1 = true, !d3.shallow || !g2 && d3.renderRootComponent !== false) {
                if (x1 === y) {
                    var w = "", O = [];
                    c1(O, l3.props.children);
                    for(var C1 = 0; C1 < O.length; C1++)w += (C1 > 0 && S ? "\n" : "") + n3(O[C1], u3, d3, d3.shallowHighOrder !== false, h2, m1);
                    return w;
                }
                var A1, H1 = l3.__c = {
                    __v: l3,
                    context: u3,
                    props: l3.props,
                    setState: v1,
                    forceUpdate: v1,
                    __h: []
                };
                if (n.__b && n.__b(l3), n.__r && n.__r(l3), x1.prototype && typeof x1.prototype.render == "function") {
                    var j1 = x1.contextType, F1 = j1 && u3[j1.__c], M1 = j1 != null ? F1 ? F1.props.value : j1.__ : u3;
                    (H1 = l3.__c = new x1(y1, M1)).__v = l3, H1._dirty = H1.__d = true, H1.props = y1, H1.state == null && (H1.state = {}), H1._nextState == null && H1.__s == null && (H1._nextState = H1.__s = H1.state), H1.context = M1, x1.getDerivedStateFromProps ? H1.state = f1(f1({}, H1.state), x1.getDerivedStateFromProps(H1.props, H1.state)) : H1.componentWillMount && (H1.componentWillMount(), H1.state = H1._nextState !== H1.state ? H1._nextState : H1.__s !== H1.state ? H1.__s : H1.state), A1 = H1.render(H1.props, H1.state, H1.context);
                } else {
                    var T2 = x1.contextType, $1 = T2 && u3[T2.__c], L1 = T2 != null ? $1 ? $1.props.value : T2.__ : u3;
                    A1 = x1.call(l3.__c, y1, L1);
                }
                return H1.getChildContext && (u3 = f1(f1({}, u3), H1.getChildContext())), n.diffed && n.diffed(l3), n3(A1, u3, d3, d3.shallowHighOrder !== false, h2, m1);
            }
            x1 = (E = x1).displayName || E !== Function && E.name || (function(e8) {
                var t8 = (Function.prototype.toString.call(e8).match(/^\s*function\s+([^( ]+)/) || "")[1];
                if (!t8) {
                    for(var r = -1, n4 = p1.length; n4--;)if (p1[n4] === e8) {
                        r = n4;
                        break;
                    }
                    r < 0 && (r = p1.push(e8) - 1), t8 = "UnnamedComponent" + r;
                }
                return t8;
            })(E);
        }
        var E;
        var D, N, P1 = "";
        if (y1) {
            var R = Object.keys(y1);
            d3 && d3.sortAttributes === true && R.sort();
            for(var U = 0; U < R.length; U++){
                var W = R[U], q = y1[W];
                if (W !== "children") {
                    if (!W.match(/[\s\n\\/='"\0<>]/) && (d3 && d3.allAttributes || W !== "key" && W !== "ref" && W !== "__self" && W !== "__source" && W !== "defaultValue")) {
                        if (W === "className") {
                            if (y1.class) continue;
                            W = "class";
                        } else h2 && W.match(/^xlink:?./) && (W = W.toLowerCase().replace(/^xlink:?/, "xlink:"));
                        if (W === "htmlFor") {
                            if (y1.for) continue;
                            W = "for";
                        }
                        W === "style" && q && typeof q == "object" && (q = s1(q)), W[0] === "a" && W[1] === "r" && typeof q == "boolean" && (q = String(q));
                        var z1 = d3.attributeHook && d3.attributeHook(W, q, u3, d3, b1);
                        if (z1 || z1 === "") P1 += z1;
                        else if (W === "dangerouslySetInnerHTML") N = q && q.__html;
                        else if (x1 === "textarea" && W === "value") D = q;
                        else if ((q || q === 0 || q === "") && typeof q != "function") {
                            if (!(q !== true && q !== "" || (q = W, d3 && d3.xml))) {
                                P1 += " " + W;
                                continue;
                            }
                            if (W === "value") {
                                if (x1 === "select") {
                                    m1 = q;
                                    continue;
                                }
                                x1 === "option" && m1 == q && (P1 += " selected");
                            }
                            P1 += " " + W + '="' + a1(q) + '"';
                        }
                    }
                } else D = q;
            }
        }
        if (S) {
            var I1 = P1.replace(/^\n\s*/, " ");
            I1 === P1 || ~I1.indexOf("\n") ? S && ~P1.indexOf("\n") && (P1 += "\n") : P1 = I1;
        }
        P1 = "<" + x1 + P1 + ">";
        if (String(x1).match(/[\s\n\\/='"\0<>]/)) throw new Error(x1 + " is not a valid HTML tag name in " + P1);
        var V = String(x1).match(_1) || d3.voidElements && String(x1).match(d3.voidElements);
        var Z = [];
        var B;
        if (N) S && i1(N) && (N = "\n" + k4 + o1(N, k4)), P1 += N;
        else if (D != null && c1(B = [], D).length) {
            for(var G = S && ~P1.indexOf("\n"), J = false, K2 = 0; K2 < B.length; K2++){
                var Q = B[K2];
                if (Q != null && Q !== false) {
                    var X = x1 === "svg" || x1 !== "foreignObject" && h2, Y = n3(Q, u3, d3, true, X, m1);
                    if (S && !G && i1(Y) && (G = true), Y) if (S) {
                        var ee = Y.length > 0 && Y[0] != "<";
                        J && ee ? Z[Z.length - 1] += Y : Z.push(Y), J = ee;
                    } else Z.push(Y);
                }
            }
            if (S && G) for(var te = Z.length; te--;)Z[te] = "\n" + k4 + o1(Z[te], k4);
        }
        if (Z.length || N) P1 += Z.join("");
        else if (d3 && d3.xml) return P1.substring(0, P1.length - 1) + " />";
        !V || B || N ? (S && ~P1.indexOf("\n") && (P1 += "\n"), P1 += "</" + x1 + ">") : P1 = P1.replace(/>$/, " />");
        return P1;
    }(n2, l2, u2);
    return n.__c && n.__c(n2, g1), d2;
}
h.shallowRender = d1;
const db = JSON.parse(`{
  "application/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "application/3gpdash-qoe-report+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/3gpp-ims+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/3gpphal+json": {
    "source": "iana",
    "compressible": true
  },
  "application/3gpphalforms+json": {
    "source": "iana",
    "compressible": true
  },
  "application/a2l": {
    "source": "iana"
  },
  "application/activemessage": {
    "source": "iana"
  },
  "application/activity+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-costmap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-costmapfilter+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-directory+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointcost+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointcostparams+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointprop+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointpropparams+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-error+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-networkmap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-networkmapfilter+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-updatestreamcontrol+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-updatestreamparams+json": {
    "source": "iana",
    "compressible": true
  },
  "application/aml": {
    "source": "iana"
  },
  "application/andrew-inset": {
    "source": "iana",
    "extensions": ["ez"]
  },
  "application/applefile": {
    "source": "iana"
  },
  "application/applixware": {
    "source": "apache",
    "extensions": ["aw"]
  },
  "application/atf": {
    "source": "iana"
  },
  "application/atfx": {
    "source": "iana"
  },
  "application/atom+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atom"]
  },
  "application/atomcat+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atomcat"]
  },
  "application/atomdeleted+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atomdeleted"]
  },
  "application/atomicmail": {
    "source": "iana"
  },
  "application/atomsvc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atomsvc"]
  },
  "application/atsc-dwd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dwd"]
  },
  "application/atsc-dynamic-event-message": {
    "source": "iana"
  },
  "application/atsc-held+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["held"]
  },
  "application/atsc-rdt+json": {
    "source": "iana",
    "compressible": true
  },
  "application/atsc-rsat+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rsat"]
  },
  "application/atxml": {
    "source": "iana"
  },
  "application/auth-policy+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/bacnet-xdd+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/batch-smtp": {
    "source": "iana"
  },
  "application/bdoc": {
    "compressible": false,
    "extensions": ["bdoc"]
  },
  "application/beep+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/calendar+json": {
    "source": "iana",
    "compressible": true
  },
  "application/calendar+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xcs"]
  },
  "application/call-completion": {
    "source": "iana"
  },
  "application/cals-1840": {
    "source": "iana"
  },
  "application/captive+json": {
    "source": "iana",
    "compressible": true
  },
  "application/cbor": {
    "source": "iana"
  },
  "application/cbor-seq": {
    "source": "iana"
  },
  "application/cccex": {
    "source": "iana"
  },
  "application/ccmp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ccxml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ccxml"]
  },
  "application/cdfx+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["cdfx"]
  },
  "application/cdmi-capability": {
    "source": "iana",
    "extensions": ["cdmia"]
  },
  "application/cdmi-container": {
    "source": "iana",
    "extensions": ["cdmic"]
  },
  "application/cdmi-domain": {
    "source": "iana",
    "extensions": ["cdmid"]
  },
  "application/cdmi-object": {
    "source": "iana",
    "extensions": ["cdmio"]
  },
  "application/cdmi-queue": {
    "source": "iana",
    "extensions": ["cdmiq"]
  },
  "application/cdni": {
    "source": "iana"
  },
  "application/cea": {
    "source": "iana"
  },
  "application/cea-2018+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cellml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cfw": {
    "source": "iana"
  },
  "application/clr": {
    "source": "iana"
  },
  "application/clue+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/clue_info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cms": {
    "source": "iana"
  },
  "application/cnrp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/coap-group+json": {
    "source": "iana",
    "compressible": true
  },
  "application/coap-payload": {
    "source": "iana"
  },
  "application/commonground": {
    "source": "iana"
  },
  "application/conference-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cose": {
    "source": "iana"
  },
  "application/cose-key": {
    "source": "iana"
  },
  "application/cose-key-set": {
    "source": "iana"
  },
  "application/cpl+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/csrattrs": {
    "source": "iana"
  },
  "application/csta+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cstadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/csvm+json": {
    "source": "iana",
    "compressible": true
  },
  "application/cu-seeme": {
    "source": "apache",
    "extensions": ["cu"]
  },
  "application/cwt": {
    "source": "iana"
  },
  "application/cybercash": {
    "source": "iana"
  },
  "application/dart": {
    "compressible": true
  },
  "application/dash+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mpd"]
  },
  "application/dashdelta": {
    "source": "iana"
  },
  "application/davmount+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["davmount"]
  },
  "application/dca-rft": {
    "source": "iana"
  },
  "application/dcd": {
    "source": "iana"
  },
  "application/dec-dx": {
    "source": "iana"
  },
  "application/dialog-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/dicom": {
    "source": "iana"
  },
  "application/dicom+json": {
    "source": "iana",
    "compressible": true
  },
  "application/dicom+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/dii": {
    "source": "iana"
  },
  "application/dit": {
    "source": "iana"
  },
  "application/dns": {
    "source": "iana"
  },
  "application/dns+json": {
    "source": "iana",
    "compressible": true
  },
  "application/dns-message": {
    "source": "iana"
  },
  "application/docbook+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["dbk"]
  },
  "application/dots+cbor": {
    "source": "iana"
  },
  "application/dskpp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/dssc+der": {
    "source": "iana",
    "extensions": ["dssc"]
  },
  "application/dssc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xdssc"]
  },
  "application/dvcs": {
    "source": "iana"
  },
  "application/ecmascript": {
    "source": "iana",
    "compressible": true,
    "extensions": ["es","ecma"]
  },
  "application/edi-consent": {
    "source": "iana"
  },
  "application/edi-x12": {
    "source": "iana",
    "compressible": false
  },
  "application/edifact": {
    "source": "iana",
    "compressible": false
  },
  "application/efi": {
    "source": "iana"
  },
  "application/elm+json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/elm+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.cap+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/emergencycalldata.comment+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.control+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.deviceinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.ecall.msd": {
    "source": "iana"
  },
  "application/emergencycalldata.providerinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.serviceinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.subscriberinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.veds+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emma+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["emma"]
  },
  "application/emotionml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["emotionml"]
  },
  "application/encaprtp": {
    "source": "iana"
  },
  "application/epp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/epub+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["epub"]
  },
  "application/eshop": {
    "source": "iana"
  },
  "application/exi": {
    "source": "iana",
    "extensions": ["exi"]
  },
  "application/expect-ct-report+json": {
    "source": "iana",
    "compressible": true
  },
  "application/fastinfoset": {
    "source": "iana"
  },
  "application/fastsoap": {
    "source": "iana"
  },
  "application/fdt+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["fdt"]
  },
  "application/fhir+json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/fhir+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/fido.trusted-apps+json": {
    "compressible": true
  },
  "application/fits": {
    "source": "iana"
  },
  "application/flexfec": {
    "source": "iana"
  },
  "application/font-sfnt": {
    "source": "iana"
  },
  "application/font-tdpfr": {
    "source": "iana",
    "extensions": ["pfr"]
  },
  "application/font-woff": {
    "source": "iana",
    "compressible": false
  },
  "application/framework-attributes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/geo+json": {
    "source": "iana",
    "compressible": true,
    "extensions": ["geojson"]
  },
  "application/geo+json-seq": {
    "source": "iana"
  },
  "application/geopackage+sqlite3": {
    "source": "iana"
  },
  "application/geoxacml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/gltf-buffer": {
    "source": "iana"
  },
  "application/gml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["gml"]
  },
  "application/gpx+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["gpx"]
  },
  "application/gxf": {
    "source": "apache",
    "extensions": ["gxf"]
  },
  "application/gzip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["gz"]
  },
  "application/h224": {
    "source": "iana"
  },
  "application/held+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/hjson": {
    "extensions": ["hjson"]
  },
  "application/http": {
    "source": "iana"
  },
  "application/hyperstudio": {
    "source": "iana",
    "extensions": ["stk"]
  },
  "application/ibe-key-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ibe-pkg-reply+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ibe-pp-data": {
    "source": "iana"
  },
  "application/iges": {
    "source": "iana"
  },
  "application/im-iscomposing+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/index": {
    "source": "iana"
  },
  "application/index.cmd": {
    "source": "iana"
  },
  "application/index.obj": {
    "source": "iana"
  },
  "application/index.response": {
    "source": "iana"
  },
  "application/index.vnd": {
    "source": "iana"
  },
  "application/inkml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ink","inkml"]
  },
  "application/iotp": {
    "source": "iana"
  },
  "application/ipfix": {
    "source": "iana",
    "extensions": ["ipfix"]
  },
  "application/ipp": {
    "source": "iana"
  },
  "application/isup": {
    "source": "iana"
  },
  "application/its+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["its"]
  },
  "application/java-archive": {
    "source": "apache",
    "compressible": false,
    "extensions": ["jar","war","ear"]
  },
  "application/java-serialized-object": {
    "source": "apache",
    "compressible": false,
    "extensions": ["ser"]
  },
  "application/java-vm": {
    "source": "apache",
    "compressible": false,
    "extensions": ["class"]
  },
  "application/javascript": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["js","mjs"]
  },
  "application/jf2feed+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jose": {
    "source": "iana"
  },
  "application/jose+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jrd+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jscalendar+json": {
    "source": "iana",
    "compressible": true
  },
  "application/json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["json","map"]
  },
  "application/json-patch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/json-seq": {
    "source": "iana"
  },
  "application/json5": {
    "extensions": ["json5"]
  },
  "application/jsonml+json": {
    "source": "apache",
    "compressible": true,
    "extensions": ["jsonml"]
  },
  "application/jwk+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jwk-set+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jwt": {
    "source": "iana"
  },
  "application/kpml-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/kpml-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ld+json": {
    "source": "iana",
    "compressible": true,
    "extensions": ["jsonld"]
  },
  "application/lgr+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lgr"]
  },
  "application/link-format": {
    "source": "iana"
  },
  "application/load-control+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/lost+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lostxml"]
  },
  "application/lostsync+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/lpf+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/lxf": {
    "source": "iana"
  },
  "application/mac-binhex40": {
    "source": "iana",
    "extensions": ["hqx"]
  },
  "application/mac-compactpro": {
    "source": "apache",
    "extensions": ["cpt"]
  },
  "application/macwriteii": {
    "source": "iana"
  },
  "application/mads+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mads"]
  },
  "application/manifest+json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["webmanifest"]
  },
  "application/marc": {
    "source": "iana",
    "extensions": ["mrc"]
  },
  "application/marcxml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mrcx"]
  },
  "application/mathematica": {
    "source": "iana",
    "extensions": ["ma","nb","mb"]
  },
  "application/mathml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mathml"]
  },
  "application/mathml-content+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mathml-presentation+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-associated-procedure-description+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-deregister+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-envelope+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-msk+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-msk-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-protection-description+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-reception-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-register+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-register-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-schedule+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-user-service-description+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbox": {
    "source": "iana",
    "extensions": ["mbox"]
  },
  "application/media-policy-dataset+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/media_control+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mediaservercontrol+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mscml"]
  },
  "application/merge-patch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/metalink+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["metalink"]
  },
  "application/metalink4+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["meta4"]
  },
  "application/mets+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mets"]
  },
  "application/mf4": {
    "source": "iana"
  },
  "application/mikey": {
    "source": "iana"
  },
  "application/mipc": {
    "source": "iana"
  },
  "application/missing-blocks+cbor-seq": {
    "source": "iana"
  },
  "application/mmt-aei+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["maei"]
  },
  "application/mmt-usd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["musd"]
  },
  "application/mods+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mods"]
  },
  "application/moss-keys": {
    "source": "iana"
  },
  "application/moss-signature": {
    "source": "iana"
  },
  "application/mosskey-data": {
    "source": "iana"
  },
  "application/mosskey-request": {
    "source": "iana"
  },
  "application/mp21": {
    "source": "iana",
    "extensions": ["m21","mp21"]
  },
  "application/mp4": {
    "source": "iana",
    "extensions": ["mp4s","m4p"]
  },
  "application/mpeg4-generic": {
    "source": "iana"
  },
  "application/mpeg4-iod": {
    "source": "iana"
  },
  "application/mpeg4-iod-xmt": {
    "source": "iana"
  },
  "application/mrb-consumer+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mrb-publish+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/msc-ivr+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/msc-mixer+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/msword": {
    "source": "iana",
    "compressible": false,
    "extensions": ["doc","dot"]
  },
  "application/mud+json": {
    "source": "iana",
    "compressible": true
  },
  "application/multipart-core": {
    "source": "iana"
  },
  "application/mxf": {
    "source": "iana",
    "extensions": ["mxf"]
  },
  "application/n-quads": {
    "source": "iana",
    "extensions": ["nq"]
  },
  "application/n-triples": {
    "source": "iana",
    "extensions": ["nt"]
  },
  "application/nasdata": {
    "source": "iana"
  },
  "application/news-checkgroups": {
    "source": "iana",
    "charset": "US-ASCII"
  },
  "application/news-groupinfo": {
    "source": "iana",
    "charset": "US-ASCII"
  },
  "application/news-transmission": {
    "source": "iana"
  },
  "application/nlsml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/node": {
    "source": "iana",
    "extensions": ["cjs"]
  },
  "application/nss": {
    "source": "iana"
  },
  "application/oauth-authz-req+jwt": {
    "source": "iana"
  },
  "application/ocsp-request": {
    "source": "iana"
  },
  "application/ocsp-response": {
    "source": "iana"
  },
  "application/octet-stream": {
    "source": "iana",
    "compressible": false,
    "extensions": ["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]
  },
  "application/oda": {
    "source": "iana",
    "extensions": ["oda"]
  },
  "application/odm+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/odx": {
    "source": "iana"
  },
  "application/oebps-package+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["opf"]
  },
  "application/ogg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ogx"]
  },
  "application/omdoc+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["omdoc"]
  },
  "application/onenote": {
    "source": "apache",
    "extensions": ["onetoc","onetoc2","onetmp","onepkg"]
  },
  "application/opc-nodeset+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/oscore": {
    "source": "iana"
  },
  "application/oxps": {
    "source": "iana",
    "extensions": ["oxps"]
  },
  "application/p21+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/p2p-overlay+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["relo"]
  },
  "application/parityfec": {
    "source": "iana"
  },
  "application/passport": {
    "source": "iana"
  },
  "application/patch-ops-error+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xer"]
  },
  "application/pdf": {
    "source": "iana",
    "compressible": false,
    "extensions": ["pdf"]
  },
  "application/pdx": {
    "source": "iana"
  },
  "application/pem-certificate-chain": {
    "source": "iana"
  },
  "application/pgp-encrypted": {
    "source": "iana",
    "compressible": false,
    "extensions": ["pgp"]
  },
  "application/pgp-keys": {
    "source": "iana"
  },
  "application/pgp-signature": {
    "source": "iana",
    "extensions": ["asc","sig"]
  },
  "application/pics-rules": {
    "source": "apache",
    "extensions": ["prf"]
  },
  "application/pidf+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/pidf-diff+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/pkcs10": {
    "source": "iana",
    "extensions": ["p10"]
  },
  "application/pkcs12": {
    "source": "iana"
  },
  "application/pkcs7-mime": {
    "source": "iana",
    "extensions": ["p7m","p7c"]
  },
  "application/pkcs7-signature": {
    "source": "iana",
    "extensions": ["p7s"]
  },
  "application/pkcs8": {
    "source": "iana",
    "extensions": ["p8"]
  },
  "application/pkcs8-encrypted": {
    "source": "iana"
  },
  "application/pkix-attr-cert": {
    "source": "iana",
    "extensions": ["ac"]
  },
  "application/pkix-cert": {
    "source": "iana",
    "extensions": ["cer"]
  },
  "application/pkix-crl": {
    "source": "iana",
    "extensions": ["crl"]
  },
  "application/pkix-pkipath": {
    "source": "iana",
    "extensions": ["pkipath"]
  },
  "application/pkixcmp": {
    "source": "iana",
    "extensions": ["pki"]
  },
  "application/pls+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["pls"]
  },
  "application/poc-settings+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/postscript": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ai","eps","ps"]
  },
  "application/ppsp-tracker+json": {
    "source": "iana",
    "compressible": true
  },
  "application/problem+json": {
    "source": "iana",
    "compressible": true
  },
  "application/problem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/provenance+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["provx"]
  },
  "application/prs.alvestrand.titrax-sheet": {
    "source": "iana"
  },
  "application/prs.cww": {
    "source": "iana",
    "extensions": ["cww"]
  },
  "application/prs.cyn": {
    "source": "iana",
    "charset": "7-BIT"
  },
  "application/prs.hpub+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/prs.nprend": {
    "source": "iana"
  },
  "application/prs.plucker": {
    "source": "iana"
  },
  "application/prs.rdf-xml-crypt": {
    "source": "iana"
  },
  "application/prs.xsf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/pskc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["pskcxml"]
  },
  "application/pvd+json": {
    "source": "iana",
    "compressible": true
  },
  "application/qsig": {
    "source": "iana"
  },
  "application/raml+yaml": {
    "compressible": true,
    "extensions": ["raml"]
  },
  "application/raptorfec": {
    "source": "iana"
  },
  "application/rdap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/rdf+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rdf","owl"]
  },
  "application/reginfo+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rif"]
  },
  "application/relax-ng-compact-syntax": {
    "source": "iana",
    "extensions": ["rnc"]
  },
  "application/remote-printing": {
    "source": "iana"
  },
  "application/reputon+json": {
    "source": "iana",
    "compressible": true
  },
  "application/resource-lists+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rl"]
  },
  "application/resource-lists-diff+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rld"]
  },
  "application/rfc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/riscos": {
    "source": "iana"
  },
  "application/rlmi+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/rls-services+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rs"]
  },
  "application/route-apd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rapd"]
  },
  "application/route-s-tsid+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sls"]
  },
  "application/route-usd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rusd"]
  },
  "application/rpki-ghostbusters": {
    "source": "iana",
    "extensions": ["gbr"]
  },
  "application/rpki-manifest": {
    "source": "iana",
    "extensions": ["mft"]
  },
  "application/rpki-publication": {
    "source": "iana"
  },
  "application/rpki-roa": {
    "source": "iana",
    "extensions": ["roa"]
  },
  "application/rpki-updown": {
    "source": "iana"
  },
  "application/rsd+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["rsd"]
  },
  "application/rss+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["rss"]
  },
  "application/rtf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rtf"]
  },
  "application/rtploopback": {
    "source": "iana"
  },
  "application/rtx": {
    "source": "iana"
  },
  "application/samlassertion+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/samlmetadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sarif+json": {
    "source": "iana",
    "compressible": true
  },
  "application/sarif-external-properties+json": {
    "source": "iana",
    "compressible": true
  },
  "application/sbe": {
    "source": "iana"
  },
  "application/sbml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sbml"]
  },
  "application/scaip+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/scim+json": {
    "source": "iana",
    "compressible": true
  },
  "application/scvp-cv-request": {
    "source": "iana",
    "extensions": ["scq"]
  },
  "application/scvp-cv-response": {
    "source": "iana",
    "extensions": ["scs"]
  },
  "application/scvp-vp-request": {
    "source": "iana",
    "extensions": ["spq"]
  },
  "application/scvp-vp-response": {
    "source": "iana",
    "extensions": ["spp"]
  },
  "application/sdp": {
    "source": "iana",
    "extensions": ["sdp"]
  },
  "application/secevent+jwt": {
    "source": "iana"
  },
  "application/senml+cbor": {
    "source": "iana"
  },
  "application/senml+json": {
    "source": "iana",
    "compressible": true
  },
  "application/senml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["senmlx"]
  },
  "application/senml-etch+cbor": {
    "source": "iana"
  },
  "application/senml-etch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/senml-exi": {
    "source": "iana"
  },
  "application/sensml+cbor": {
    "source": "iana"
  },
  "application/sensml+json": {
    "source": "iana",
    "compressible": true
  },
  "application/sensml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sensmlx"]
  },
  "application/sensml-exi": {
    "source": "iana"
  },
  "application/sep+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sep-exi": {
    "source": "iana"
  },
  "application/session-info": {
    "source": "iana"
  },
  "application/set-payment": {
    "source": "iana"
  },
  "application/set-payment-initiation": {
    "source": "iana",
    "extensions": ["setpay"]
  },
  "application/set-registration": {
    "source": "iana"
  },
  "application/set-registration-initiation": {
    "source": "iana",
    "extensions": ["setreg"]
  },
  "application/sgml": {
    "source": "iana"
  },
  "application/sgml-open-catalog": {
    "source": "iana"
  },
  "application/shf+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["shf"]
  },
  "application/sieve": {
    "source": "iana",
    "extensions": ["siv","sieve"]
  },
  "application/simple-filter+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/simple-message-summary": {
    "source": "iana"
  },
  "application/simplesymbolcontainer": {
    "source": "iana"
  },
  "application/sipc": {
    "source": "iana"
  },
  "application/slate": {
    "source": "iana"
  },
  "application/smil": {
    "source": "iana"
  },
  "application/smil+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["smi","smil"]
  },
  "application/smpte336m": {
    "source": "iana"
  },
  "application/soap+fastinfoset": {
    "source": "iana"
  },
  "application/soap+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sparql-query": {
    "source": "iana",
    "extensions": ["rq"]
  },
  "application/sparql-results+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["srx"]
  },
  "application/spirits-event+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sql": {
    "source": "iana"
  },
  "application/srgs": {
    "source": "iana",
    "extensions": ["gram"]
  },
  "application/srgs+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["grxml"]
  },
  "application/sru+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sru"]
  },
  "application/ssdl+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["ssdl"]
  },
  "application/ssml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ssml"]
  },
  "application/stix+json": {
    "source": "iana",
    "compressible": true
  },
  "application/swid+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["swidtag"]
  },
  "application/tamp-apex-update": {
    "source": "iana"
  },
  "application/tamp-apex-update-confirm": {
    "source": "iana"
  },
  "application/tamp-community-update": {
    "source": "iana"
  },
  "application/tamp-community-update-confirm": {
    "source": "iana"
  },
  "application/tamp-error": {
    "source": "iana"
  },
  "application/tamp-sequence-adjust": {
    "source": "iana"
  },
  "application/tamp-sequence-adjust-confirm": {
    "source": "iana"
  },
  "application/tamp-status-query": {
    "source": "iana"
  },
  "application/tamp-status-response": {
    "source": "iana"
  },
  "application/tamp-update": {
    "source": "iana"
  },
  "application/tamp-update-confirm": {
    "source": "iana"
  },
  "application/tar": {
    "compressible": true
  },
  "application/taxii+json": {
    "source": "iana",
    "compressible": true
  },
  "application/td+json": {
    "source": "iana",
    "compressible": true
  },
  "application/tei+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["tei","teicorpus"]
  },
  "application/tetra_isi": {
    "source": "iana"
  },
  "application/thraud+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["tfi"]
  },
  "application/timestamp-query": {
    "source": "iana"
  },
  "application/timestamp-reply": {
    "source": "iana"
  },
  "application/timestamped-data": {
    "source": "iana",
    "extensions": ["tsd"]
  },
  "application/tlsrpt+gzip": {
    "source": "iana"
  },
  "application/tlsrpt+json": {
    "source": "iana",
    "compressible": true
  },
  "application/tnauthlist": {
    "source": "iana"
  },
  "application/toml": {
    "compressible": true,
    "extensions": ["toml"]
  },
  "application/trickle-ice-sdpfrag": {
    "source": "iana"
  },
  "application/trig": {
    "source": "iana",
    "extensions": ["trig"]
  },
  "application/ttml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ttml"]
  },
  "application/tve-trigger": {
    "source": "iana"
  },
  "application/tzif": {
    "source": "iana"
  },
  "application/tzif-leap": {
    "source": "iana"
  },
  "application/ubjson": {
    "compressible": false,
    "extensions": ["ubj"]
  },
  "application/ulpfec": {
    "source": "iana"
  },
  "application/urc-grpsheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/urc-ressheet+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rsheet"]
  },
  "application/urc-targetdesc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["td"]
  },
  "application/urc-uisocketdesc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vcard+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vcard+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vemmi": {
    "source": "iana"
  },
  "application/vividence.scriptfile": {
    "source": "apache"
  },
  "application/vnd.1000minds.decision-model+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["1km"]
  },
  "application/vnd.3gpp-prose+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp-prose-pc3ch+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp-v2x-local-service-information": {
    "source": "iana"
  },
  "application/vnd.3gpp.5gnas": {
    "source": "iana"
  },
  "application/vnd.3gpp.access-transfer-events+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.bsf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.gmop+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.gtpc": {
    "source": "iana"
  },
  "application/vnd.3gpp.interworking-data": {
    "source": "iana"
  },
  "application/vnd.3gpp.lpp": {
    "source": "iana"
  },
  "application/vnd.3gpp.mc-signalling-ear": {
    "source": "iana"
  },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-payload": {
    "source": "iana"
  },
  "application/vnd.3gpp.mcdata-service-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-signalling": {
    "source": "iana"
  },
  "application/vnd.3gpp.mcdata-ue-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-user-profile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-floor-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-location-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-service-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-signed+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-ue-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-user-profile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-location-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-service-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-ue-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-user-profile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mid-call+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.ngap": {
    "source": "iana"
  },
  "application/vnd.3gpp.pfcp": {
    "source": "iana"
  },
  "application/vnd.3gpp.pic-bw-large": {
    "source": "iana",
    "extensions": ["plb"]
  },
  "application/vnd.3gpp.pic-bw-small": {
    "source": "iana",
    "extensions": ["psb"]
  },
  "application/vnd.3gpp.pic-bw-var": {
    "source": "iana",
    "extensions": ["pvb"]
  },
  "application/vnd.3gpp.s1ap": {
    "source": "iana"
  },
  "application/vnd.3gpp.sms": {
    "source": "iana"
  },
  "application/vnd.3gpp.sms+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.srvcc-ext+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.srvcc-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.state-and-event-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.ussd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp2.bcmcsinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp2.sms": {
    "source": "iana"
  },
  "application/vnd.3gpp2.tcap": {
    "source": "iana",
    "extensions": ["tcap"]
  },
  "application/vnd.3lightssoftware.imagescal": {
    "source": "iana"
  },
  "application/vnd.3m.post-it-notes": {
    "source": "iana",
    "extensions": ["pwn"]
  },
  "application/vnd.accpac.simply.aso": {
    "source": "iana",
    "extensions": ["aso"]
  },
  "application/vnd.accpac.simply.imp": {
    "source": "iana",
    "extensions": ["imp"]
  },
  "application/vnd.acucobol": {
    "source": "iana",
    "extensions": ["acu"]
  },
  "application/vnd.acucorp": {
    "source": "iana",
    "extensions": ["atc","acutc"]
  },
  "application/vnd.adobe.air-application-installer-package+zip": {
    "source": "apache",
    "compressible": false,
    "extensions": ["air"]
  },
  "application/vnd.adobe.flash.movie": {
    "source": "iana"
  },
  "application/vnd.adobe.formscentral.fcdt": {
    "source": "iana",
    "extensions": ["fcdt"]
  },
  "application/vnd.adobe.fxp": {
    "source": "iana",
    "extensions": ["fxp","fxpl"]
  },
  "application/vnd.adobe.partial-upload": {
    "source": "iana"
  },
  "application/vnd.adobe.xdp+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xdp"]
  },
  "application/vnd.adobe.xfdf": {
    "source": "iana",
    "extensions": ["xfdf"]
  },
  "application/vnd.aether.imp": {
    "source": "iana"
  },
  "application/vnd.afpc.afplinedata": {
    "source": "iana"
  },
  "application/vnd.afpc.afplinedata-pagedef": {
    "source": "iana"
  },
  "application/vnd.afpc.cmoca-cmresource": {
    "source": "iana"
  },
  "application/vnd.afpc.foca-charset": {
    "source": "iana"
  },
  "application/vnd.afpc.foca-codedfont": {
    "source": "iana"
  },
  "application/vnd.afpc.foca-codepage": {
    "source": "iana"
  },
  "application/vnd.afpc.modca": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-cmtable": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-formdef": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-mediummap": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-objectcontainer": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-overlay": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-pagesegment": {
    "source": "iana"
  },
  "application/vnd.ah-barcode": {
    "source": "iana"
  },
  "application/vnd.ahead.space": {
    "source": "iana",
    "extensions": ["ahead"]
  },
  "application/vnd.airzip.filesecure.azf": {
    "source": "iana",
    "extensions": ["azf"]
  },
  "application/vnd.airzip.filesecure.azs": {
    "source": "iana",
    "extensions": ["azs"]
  },
  "application/vnd.amadeus+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.amazon.ebook": {
    "source": "apache",
    "extensions": ["azw"]
  },
  "application/vnd.amazon.mobi8-ebook": {
    "source": "iana"
  },
  "application/vnd.americandynamics.acc": {
    "source": "iana",
    "extensions": ["acc"]
  },
  "application/vnd.amiga.ami": {
    "source": "iana",
    "extensions": ["ami"]
  },
  "application/vnd.amundsen.maze+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.android.ota": {
    "source": "iana"
  },
  "application/vnd.android.package-archive": {
    "source": "apache",
    "compressible": false,
    "extensions": ["apk"]
  },
  "application/vnd.anki": {
    "source": "iana"
  },
  "application/vnd.anser-web-certificate-issue-initiation": {
    "source": "iana",
    "extensions": ["cii"]
  },
  "application/vnd.anser-web-funds-transfer-initiation": {
    "source": "apache",
    "extensions": ["fti"]
  },
  "application/vnd.antix.game-component": {
    "source": "iana",
    "extensions": ["atx"]
  },
  "application/vnd.apache.arrow.file": {
    "source": "iana"
  },
  "application/vnd.apache.arrow.stream": {
    "source": "iana"
  },
  "application/vnd.apache.thrift.binary": {
    "source": "iana"
  },
  "application/vnd.apache.thrift.compact": {
    "source": "iana"
  },
  "application/vnd.apache.thrift.json": {
    "source": "iana"
  },
  "application/vnd.api+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.aplextor.warrp+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.apothekende.reservation+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.apple.installer+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mpkg"]
  },
  "application/vnd.apple.keynote": {
    "source": "iana",
    "extensions": ["key"]
  },
  "application/vnd.apple.mpegurl": {
    "source": "iana",
    "extensions": ["m3u8"]
  },
  "application/vnd.apple.numbers": {
    "source": "iana",
    "extensions": ["numbers"]
  },
  "application/vnd.apple.pages": {
    "source": "iana",
    "extensions": ["pages"]
  },
  "application/vnd.apple.pkpass": {
    "compressible": false,
    "extensions": ["pkpass"]
  },
  "application/vnd.arastra.swi": {
    "source": "iana"
  },
  "application/vnd.aristanetworks.swi": {
    "source": "iana",
    "extensions": ["swi"]
  },
  "application/vnd.artisan+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.artsquare": {
    "source": "iana"
  },
  "application/vnd.astraea-software.iota": {
    "source": "iana",
    "extensions": ["iota"]
  },
  "application/vnd.audiograph": {
    "source": "iana",
    "extensions": ["aep"]
  },
  "application/vnd.autopackage": {
    "source": "iana"
  },
  "application/vnd.avalon+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.avistar+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.balsamiq.bmml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["bmml"]
  },
  "application/vnd.balsamiq.bmpr": {
    "source": "iana"
  },
  "application/vnd.banana-accounting": {
    "source": "iana"
  },
  "application/vnd.bbf.usp.error": {
    "source": "iana"
  },
  "application/vnd.bbf.usp.msg": {
    "source": "iana"
  },
  "application/vnd.bbf.usp.msg+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.bekitzur-stech+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.bint.med-content": {
    "source": "iana"
  },
  "application/vnd.biopax.rdf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.blink-idb-value-wrapper": {
    "source": "iana"
  },
  "application/vnd.blueice.multipass": {
    "source": "iana",
    "extensions": ["mpm"]
  },
  "application/vnd.bluetooth.ep.oob": {
    "source": "iana"
  },
  "application/vnd.bluetooth.le.oob": {
    "source": "iana"
  },
  "application/vnd.bmi": {
    "source": "iana",
    "extensions": ["bmi"]
  },
  "application/vnd.bpf": {
    "source": "iana"
  },
  "application/vnd.bpf3": {
    "source": "iana"
  },
  "application/vnd.businessobjects": {
    "source": "iana",
    "extensions": ["rep"]
  },
  "application/vnd.byu.uapi+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cab-jscript": {
    "source": "iana"
  },
  "application/vnd.canon-cpdl": {
    "source": "iana"
  },
  "application/vnd.canon-lips": {
    "source": "iana"
  },
  "application/vnd.capasystems-pg+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cendio.thinlinc.clientconf": {
    "source": "iana"
  },
  "application/vnd.century-systems.tcp_stream": {
    "source": "iana"
  },
  "application/vnd.chemdraw+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["cdxml"]
  },
  "application/vnd.chess-pgn": {
    "source": "iana"
  },
  "application/vnd.chipnuts.karaoke-mmd": {
    "source": "iana",
    "extensions": ["mmd"]
  },
  "application/vnd.ciedi": {
    "source": "iana"
  },
  "application/vnd.cinderella": {
    "source": "iana",
    "extensions": ["cdy"]
  },
  "application/vnd.cirpack.isdn-ext": {
    "source": "iana"
  },
  "application/vnd.citationstyles.style+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["csl"]
  },
  "application/vnd.claymore": {
    "source": "iana",
    "extensions": ["cla"]
  },
  "application/vnd.cloanto.rp9": {
    "source": "iana",
    "extensions": ["rp9"]
  },
  "application/vnd.clonk.c4group": {
    "source": "iana",
    "extensions": ["c4g","c4d","c4f","c4p","c4u"]
  },
  "application/vnd.cluetrust.cartomobile-config": {
    "source": "iana",
    "extensions": ["c11amc"]
  },
  "application/vnd.cluetrust.cartomobile-config-pkg": {
    "source": "iana",
    "extensions": ["c11amz"]
  },
  "application/vnd.coffeescript": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.document": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.document-template": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.presentation": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.presentation-template": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet-template": {
    "source": "iana"
  },
  "application/vnd.collection+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.collection.doc+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.collection.next+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.comicbook+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.comicbook-rar": {
    "source": "iana"
  },
  "application/vnd.commerce-battelle": {
    "source": "iana"
  },
  "application/vnd.commonspace": {
    "source": "iana",
    "extensions": ["csp"]
  },
  "application/vnd.contact.cmsg": {
    "source": "iana",
    "extensions": ["cdbcmsg"]
  },
  "application/vnd.coreos.ignition+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cosmocaller": {
    "source": "iana",
    "extensions": ["cmc"]
  },
  "application/vnd.crick.clicker": {
    "source": "iana",
    "extensions": ["clkx"]
  },
  "application/vnd.crick.clicker.keyboard": {
    "source": "iana",
    "extensions": ["clkk"]
  },
  "application/vnd.crick.clicker.palette": {
    "source": "iana",
    "extensions": ["clkp"]
  },
  "application/vnd.crick.clicker.template": {
    "source": "iana",
    "extensions": ["clkt"]
  },
  "application/vnd.crick.clicker.wordbank": {
    "source": "iana",
    "extensions": ["clkw"]
  },
  "application/vnd.criticaltools.wbs+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wbs"]
  },
  "application/vnd.cryptii.pipe+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.crypto-shade-file": {
    "source": "iana"
  },
  "application/vnd.cryptomator.encrypted": {
    "source": "iana"
  },
  "application/vnd.cryptomator.vault": {
    "source": "iana"
  },
  "application/vnd.ctc-posml": {
    "source": "iana",
    "extensions": ["pml"]
  },
  "application/vnd.ctct.ws+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cups-pdf": {
    "source": "iana"
  },
  "application/vnd.cups-postscript": {
    "source": "iana"
  },
  "application/vnd.cups-ppd": {
    "source": "iana",
    "extensions": ["ppd"]
  },
  "application/vnd.cups-raster": {
    "source": "iana"
  },
  "application/vnd.cups-raw": {
    "source": "iana"
  },
  "application/vnd.curl": {
    "source": "iana"
  },
  "application/vnd.curl.car": {
    "source": "apache",
    "extensions": ["car"]
  },
  "application/vnd.curl.pcurl": {
    "source": "apache",
    "extensions": ["pcurl"]
  },
  "application/vnd.cyan.dean.root+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cybank": {
    "source": "iana"
  },
  "application/vnd.cyclonedx+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cyclonedx+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.d2l.coursepackage1p0+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.d3m-dataset": {
    "source": "iana"
  },
  "application/vnd.d3m-problem": {
    "source": "iana"
  },
  "application/vnd.dart": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dart"]
  },
  "application/vnd.data-vision.rdz": {
    "source": "iana",
    "extensions": ["rdz"]
  },
  "application/vnd.datapackage+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dataresource+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dbf": {
    "source": "iana",
    "extensions": ["dbf"]
  },
  "application/vnd.debian.binary-package": {
    "source": "iana"
  },
  "application/vnd.dece.data": {
    "source": "iana",
    "extensions": ["uvf","uvvf","uvd","uvvd"]
  },
  "application/vnd.dece.ttml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["uvt","uvvt"]
  },
  "application/vnd.dece.unspecified": {
    "source": "iana",
    "extensions": ["uvx","uvvx"]
  },
  "application/vnd.dece.zip": {
    "source": "iana",
    "extensions": ["uvz","uvvz"]
  },
  "application/vnd.denovo.fcselayout-link": {
    "source": "iana",
    "extensions": ["fe_launch"]
  },
  "application/vnd.desmume.movie": {
    "source": "iana"
  },
  "application/vnd.dir-bi.plate-dl-nosuffix": {
    "source": "iana"
  },
  "application/vnd.dm.delegation+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dna": {
    "source": "iana",
    "extensions": ["dna"]
  },
  "application/vnd.document+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dolby.mlp": {
    "source": "apache",
    "extensions": ["mlp"]
  },
  "application/vnd.dolby.mobile.1": {
    "source": "iana"
  },
  "application/vnd.dolby.mobile.2": {
    "source": "iana"
  },
  "application/vnd.doremir.scorecloud-binary-document": {
    "source": "iana"
  },
  "application/vnd.dpgraph": {
    "source": "iana",
    "extensions": ["dpg"]
  },
  "application/vnd.dreamfactory": {
    "source": "iana",
    "extensions": ["dfac"]
  },
  "application/vnd.drive+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ds-keypoint": {
    "source": "apache",
    "extensions": ["kpxx"]
  },
  "application/vnd.dtg.local": {
    "source": "iana"
  },
  "application/vnd.dtg.local.flash": {
    "source": "iana"
  },
  "application/vnd.dtg.local.html": {
    "source": "iana"
  },
  "application/vnd.dvb.ait": {
    "source": "iana",
    "extensions": ["ait"]
  },
  "application/vnd.dvb.dvbisl+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.dvbj": {
    "source": "iana"
  },
  "application/vnd.dvb.esgcontainer": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcdftnotifaccess": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcesgaccess": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcesgaccess2": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcesgpdd": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcroaming": {
    "source": "iana"
  },
  "application/vnd.dvb.iptv.alfec-base": {
    "source": "iana"
  },
  "application/vnd.dvb.iptv.alfec-enhancement": {
    "source": "iana"
  },
  "application/vnd.dvb.notif-aggregate-root+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-container+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-generic+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-ia-msglist+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-ia-registration-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-ia-registration-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-init+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.pfr": {
    "source": "iana"
  },
  "application/vnd.dvb.service": {
    "source": "iana",
    "extensions": ["svc"]
  },
  "application/vnd.dxr": {
    "source": "iana"
  },
  "application/vnd.dynageo": {
    "source": "iana",
    "extensions": ["geo"]
  },
  "application/vnd.dzr": {
    "source": "iana"
  },
  "application/vnd.easykaraoke.cdgdownload": {
    "source": "iana"
  },
  "application/vnd.ecdis-update": {
    "source": "iana"
  },
  "application/vnd.ecip.rlp": {
    "source": "iana"
  },
  "application/vnd.ecowin.chart": {
    "source": "iana",
    "extensions": ["mag"]
  },
  "application/vnd.ecowin.filerequest": {
    "source": "iana"
  },
  "application/vnd.ecowin.fileupdate": {
    "source": "iana"
  },
  "application/vnd.ecowin.series": {
    "source": "iana"
  },
  "application/vnd.ecowin.seriesrequest": {
    "source": "iana"
  },
  "application/vnd.ecowin.seriesupdate": {
    "source": "iana"
  },
  "application/vnd.efi.img": {
    "source": "iana"
  },
  "application/vnd.efi.iso": {
    "source": "iana"
  },
  "application/vnd.emclient.accessrequest+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.enliven": {
    "source": "iana",
    "extensions": ["nml"]
  },
  "application/vnd.enphase.envoy": {
    "source": "iana"
  },
  "application/vnd.eprints.data+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.epson.esf": {
    "source": "iana",
    "extensions": ["esf"]
  },
  "application/vnd.epson.msf": {
    "source": "iana",
    "extensions": ["msf"]
  },
  "application/vnd.epson.quickanime": {
    "source": "iana",
    "extensions": ["qam"]
  },
  "application/vnd.epson.salt": {
    "source": "iana",
    "extensions": ["slt"]
  },
  "application/vnd.epson.ssf": {
    "source": "iana",
    "extensions": ["ssf"]
  },
  "application/vnd.ericsson.quickcall": {
    "source": "iana"
  },
  "application/vnd.espass-espass+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.eszigno3+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["es3","et3"]
  },
  "application/vnd.etsi.aoc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.asic-e+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.etsi.asic-s+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.etsi.cug+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvcommand+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvdiscovery+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsad-bc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsad-cod+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsad-npvr+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvservice+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsync+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvueprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.mcid+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.mheg5": {
    "source": "iana"
  },
  "application/vnd.etsi.overload-control-policy-dataset+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.pstn+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.sci+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.simservs+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.timestamp-token": {
    "source": "iana"
  },
  "application/vnd.etsi.tsl+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.tsl.der": {
    "source": "iana"
  },
  "application/vnd.eudora.data": {
    "source": "iana"
  },
  "application/vnd.evolv.ecig.profile": {
    "source": "iana"
  },
  "application/vnd.evolv.ecig.settings": {
    "source": "iana"
  },
  "application/vnd.evolv.ecig.theme": {
    "source": "iana"
  },
  "application/vnd.exstream-empower+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.exstream-package": {
    "source": "iana"
  },
  "application/vnd.ezpix-album": {
    "source": "iana",
    "extensions": ["ez2"]
  },
  "application/vnd.ezpix-package": {
    "source": "iana",
    "extensions": ["ez3"]
  },
  "application/vnd.f-secure.mobile": {
    "source": "iana"
  },
  "application/vnd.fastcopy-disk-image": {
    "source": "iana"
  },
  "application/vnd.fdf": {
    "source": "iana",
    "extensions": ["fdf"]
  },
  "application/vnd.fdsn.mseed": {
    "source": "iana",
    "extensions": ["mseed"]
  },
  "application/vnd.fdsn.seed": {
    "source": "iana",
    "extensions": ["seed","dataless"]
  },
  "application/vnd.ffsns": {
    "source": "iana"
  },
  "application/vnd.ficlab.flb+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.filmit.zfc": {
    "source": "iana"
  },
  "application/vnd.fints": {
    "source": "iana"
  },
  "application/vnd.firemonkeys.cloudcell": {
    "source": "iana"
  },
  "application/vnd.flographit": {
    "source": "iana",
    "extensions": ["gph"]
  },
  "application/vnd.fluxtime.clip": {
    "source": "iana",
    "extensions": ["ftc"]
  },
  "application/vnd.font-fontforge-sfd": {
    "source": "iana"
  },
  "application/vnd.framemaker": {
    "source": "iana",
    "extensions": ["fm","frame","maker","book"]
  },
  "application/vnd.frogans.fnc": {
    "source": "iana",
    "extensions": ["fnc"]
  },
  "application/vnd.frogans.ltf": {
    "source": "iana",
    "extensions": ["ltf"]
  },
  "application/vnd.fsc.weblaunch": {
    "source": "iana",
    "extensions": ["fsc"]
  },
  "application/vnd.fujifilm.fb.docuworks": {
    "source": "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.binder": {
    "source": "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.container": {
    "source": "iana"
  },
  "application/vnd.fujifilm.fb.jfi+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.fujitsu.oasys": {
    "source": "iana",
    "extensions": ["oas"]
  },
  "application/vnd.fujitsu.oasys2": {
    "source": "iana",
    "extensions": ["oa2"]
  },
  "application/vnd.fujitsu.oasys3": {
    "source": "iana",
    "extensions": ["oa3"]
  },
  "application/vnd.fujitsu.oasysgp": {
    "source": "iana",
    "extensions": ["fg5"]
  },
  "application/vnd.fujitsu.oasysprs": {
    "source": "iana",
    "extensions": ["bh2"]
  },
  "application/vnd.fujixerox.art-ex": {
    "source": "iana"
  },
  "application/vnd.fujixerox.art4": {
    "source": "iana"
  },
  "application/vnd.fujixerox.ddd": {
    "source": "iana",
    "extensions": ["ddd"]
  },
  "application/vnd.fujixerox.docuworks": {
    "source": "iana",
    "extensions": ["xdw"]
  },
  "application/vnd.fujixerox.docuworks.binder": {
    "source": "iana",
    "extensions": ["xbd"]
  },
  "application/vnd.fujixerox.docuworks.container": {
    "source": "iana"
  },
  "application/vnd.fujixerox.hbpl": {
    "source": "iana"
  },
  "application/vnd.fut-misnet": {
    "source": "iana"
  },
  "application/vnd.futoin+cbor": {
    "source": "iana"
  },
  "application/vnd.futoin+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.fuzzysheet": {
    "source": "iana",
    "extensions": ["fzs"]
  },
  "application/vnd.genomatix.tuxedo": {
    "source": "iana",
    "extensions": ["txd"]
  },
  "application/vnd.gentics.grd+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.geo+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.geocube+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.geogebra.file": {
    "source": "iana",
    "extensions": ["ggb"]
  },
  "application/vnd.geogebra.slides": {
    "source": "iana"
  },
  "application/vnd.geogebra.tool": {
    "source": "iana",
    "extensions": ["ggt"]
  },
  "application/vnd.geometry-explorer": {
    "source": "iana",
    "extensions": ["gex","gre"]
  },
  "application/vnd.geonext": {
    "source": "iana",
    "extensions": ["gxt"]
  },
  "application/vnd.geoplan": {
    "source": "iana",
    "extensions": ["g2w"]
  },
  "application/vnd.geospace": {
    "source": "iana",
    "extensions": ["g3w"]
  },
  "application/vnd.gerber": {
    "source": "iana"
  },
  "application/vnd.globalplatform.card-content-mgt": {
    "source": "iana"
  },
  "application/vnd.globalplatform.card-content-mgt-response": {
    "source": "iana"
  },
  "application/vnd.gmx": {
    "source": "iana",
    "extensions": ["gmx"]
  },
  "application/vnd.google-apps.document": {
    "compressible": false,
    "extensions": ["gdoc"]
  },
  "application/vnd.google-apps.presentation": {
    "compressible": false,
    "extensions": ["gslides"]
  },
  "application/vnd.google-apps.spreadsheet": {
    "compressible": false,
    "extensions": ["gsheet"]
  },
  "application/vnd.google-earth.kml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["kml"]
  },
  "application/vnd.google-earth.kmz": {
    "source": "iana",
    "compressible": false,
    "extensions": ["kmz"]
  },
  "application/vnd.gov.sk.e-form+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.gov.sk.e-form+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.gov.sk.xmldatacontainer+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.grafeq": {
    "source": "iana",
    "extensions": ["gqf","gqs"]
  },
  "application/vnd.gridmp": {
    "source": "iana"
  },
  "application/vnd.groove-account": {
    "source": "iana",
    "extensions": ["gac"]
  },
  "application/vnd.groove-help": {
    "source": "iana",
    "extensions": ["ghf"]
  },
  "application/vnd.groove-identity-message": {
    "source": "iana",
    "extensions": ["gim"]
  },
  "application/vnd.groove-injector": {
    "source": "iana",
    "extensions": ["grv"]
  },
  "application/vnd.groove-tool-message": {
    "source": "iana",
    "extensions": ["gtm"]
  },
  "application/vnd.groove-tool-template": {
    "source": "iana",
    "extensions": ["tpl"]
  },
  "application/vnd.groove-vcard": {
    "source": "iana",
    "extensions": ["vcg"]
  },
  "application/vnd.hal+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hal+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["hal"]
  },
  "application/vnd.handheld-entertainment+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["zmm"]
  },
  "application/vnd.hbci": {
    "source": "iana",
    "extensions": ["hbci"]
  },
  "application/vnd.hc+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hcl-bireports": {
    "source": "iana"
  },
  "application/vnd.hdt": {
    "source": "iana"
  },
  "application/vnd.heroku+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hhe.lesson-player": {
    "source": "iana",
    "extensions": ["les"]
  },
  "application/vnd.hp-hpgl": {
    "source": "iana",
    "extensions": ["hpgl"]
  },
  "application/vnd.hp-hpid": {
    "source": "iana",
    "extensions": ["hpid"]
  },
  "application/vnd.hp-hps": {
    "source": "iana",
    "extensions": ["hps"]
  },
  "application/vnd.hp-jlyt": {
    "source": "iana",
    "extensions": ["jlt"]
  },
  "application/vnd.hp-pcl": {
    "source": "iana",
    "extensions": ["pcl"]
  },
  "application/vnd.hp-pclxl": {
    "source": "iana",
    "extensions": ["pclxl"]
  },
  "application/vnd.httphone": {
    "source": "iana"
  },
  "application/vnd.hydrostatix.sof-data": {
    "source": "iana",
    "extensions": ["sfd-hdstx"]
  },
  "application/vnd.hyper+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hyper-item+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hyperdrive+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hzn-3d-crossword": {
    "source": "iana"
  },
  "application/vnd.ibm.afplinedata": {
    "source": "iana"
  },
  "application/vnd.ibm.electronic-media": {
    "source": "iana"
  },
  "application/vnd.ibm.minipay": {
    "source": "iana",
    "extensions": ["mpy"]
  },
  "application/vnd.ibm.modcap": {
    "source": "iana",
    "extensions": ["afp","listafp","list3820"]
  },
  "application/vnd.ibm.rights-management": {
    "source": "iana",
    "extensions": ["irm"]
  },
  "application/vnd.ibm.secure-container": {
    "source": "iana",
    "extensions": ["sc"]
  },
  "application/vnd.iccprofile": {
    "source": "iana",
    "extensions": ["icc","icm"]
  },
  "application/vnd.ieee.1905": {
    "source": "iana"
  },
  "application/vnd.igloader": {
    "source": "iana",
    "extensions": ["igl"]
  },
  "application/vnd.imagemeter.folder+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.imagemeter.image+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.immervision-ivp": {
    "source": "iana",
    "extensions": ["ivp"]
  },
  "application/vnd.immervision-ivu": {
    "source": "iana",
    "extensions": ["ivu"]
  },
  "application/vnd.ims.imsccv1p1": {
    "source": "iana"
  },
  "application/vnd.ims.imsccv1p2": {
    "source": "iana"
  },
  "application/vnd.ims.imsccv1p3": {
    "source": "iana"
  },
  "application/vnd.ims.lis.v2.result+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolproxy+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolproxy.id+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolsettings+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.informedcontrol.rms+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.informix-visionary": {
    "source": "iana"
  },
  "application/vnd.infotech.project": {
    "source": "iana"
  },
  "application/vnd.infotech.project+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.innopath.wamp.notification": {
    "source": "iana"
  },
  "application/vnd.insors.igm": {
    "source": "iana",
    "extensions": ["igm"]
  },
  "application/vnd.intercon.formnet": {
    "source": "iana",
    "extensions": ["xpw","xpx"]
  },
  "application/vnd.intergeo": {
    "source": "iana",
    "extensions": ["i2g"]
  },
  "application/vnd.intertrust.digibox": {
    "source": "iana"
  },
  "application/vnd.intertrust.nncp": {
    "source": "iana"
  },
  "application/vnd.intu.qbo": {
    "source": "iana",
    "extensions": ["qbo"]
  },
  "application/vnd.intu.qfx": {
    "source": "iana",
    "extensions": ["qfx"]
  },
  "application/vnd.iptc.g2.catalogitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.conceptitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.knowledgeitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.newsitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.newsmessage+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.packageitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.planningitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ipunplugged.rcprofile": {
    "source": "iana",
    "extensions": ["rcprofile"]
  },
  "application/vnd.irepository.package+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["irp"]
  },
  "application/vnd.is-xpr": {
    "source": "iana",
    "extensions": ["xpr"]
  },
  "application/vnd.isac.fcs": {
    "source": "iana",
    "extensions": ["fcs"]
  },
  "application/vnd.iso11783-10+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.jam": {
    "source": "iana",
    "extensions": ["jam"]
  },
  "application/vnd.japannet-directory-service": {
    "source": "iana"
  },
  "application/vnd.japannet-jpnstore-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-payment-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-registration": {
    "source": "iana"
  },
  "application/vnd.japannet-registration-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-setstore-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-verification": {
    "source": "iana"
  },
  "application/vnd.japannet-verification-wakeup": {
    "source": "iana"
  },
  "application/vnd.jcp.javame.midlet-rms": {
    "source": "iana",
    "extensions": ["rms"]
  },
  "application/vnd.jisp": {
    "source": "iana",
    "extensions": ["jisp"]
  },
  "application/vnd.joost.joda-archive": {
    "source": "iana",
    "extensions": ["joda"]
  },
  "application/vnd.jsk.isdn-ngn": {
    "source": "iana"
  },
  "application/vnd.kahootz": {
    "source": "iana",
    "extensions": ["ktz","ktr"]
  },
  "application/vnd.kde.karbon": {
    "source": "iana",
    "extensions": ["karbon"]
  },
  "application/vnd.kde.kchart": {
    "source": "iana",
    "extensions": ["chrt"]
  },
  "application/vnd.kde.kformula": {
    "source": "iana",
    "extensions": ["kfo"]
  },
  "application/vnd.kde.kivio": {
    "source": "iana",
    "extensions": ["flw"]
  },
  "application/vnd.kde.kontour": {
    "source": "iana",
    "extensions": ["kon"]
  },
  "application/vnd.kde.kpresenter": {
    "source": "iana",
    "extensions": ["kpr","kpt"]
  },
  "application/vnd.kde.kspread": {
    "source": "iana",
    "extensions": ["ksp"]
  },
  "application/vnd.kde.kword": {
    "source": "iana",
    "extensions": ["kwd","kwt"]
  },
  "application/vnd.kenameaapp": {
    "source": "iana",
    "extensions": ["htke"]
  },
  "application/vnd.kidspiration": {
    "source": "iana",
    "extensions": ["kia"]
  },
  "application/vnd.kinar": {
    "source": "iana",
    "extensions": ["kne","knp"]
  },
  "application/vnd.koan": {
    "source": "iana",
    "extensions": ["skp","skd","skt","skm"]
  },
  "application/vnd.kodak-descriptor": {
    "source": "iana",
    "extensions": ["sse"]
  },
  "application/vnd.las": {
    "source": "iana"
  },
  "application/vnd.las.las+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.las.las+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lasxml"]
  },
  "application/vnd.laszip": {
    "source": "iana"
  },
  "application/vnd.leap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.liberty-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.llamagraphics.life-balance.desktop": {
    "source": "iana",
    "extensions": ["lbd"]
  },
  "application/vnd.llamagraphics.life-balance.exchange+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lbe"]
  },
  "application/vnd.logipipe.circuit+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.loom": {
    "source": "iana"
  },
  "application/vnd.lotus-1-2-3": {
    "source": "iana",
    "extensions": ["123"]
  },
  "application/vnd.lotus-approach": {
    "source": "iana",
    "extensions": ["apr"]
  },
  "application/vnd.lotus-freelance": {
    "source": "iana",
    "extensions": ["pre"]
  },
  "application/vnd.lotus-notes": {
    "source": "iana",
    "extensions": ["nsf"]
  },
  "application/vnd.lotus-organizer": {
    "source": "iana",
    "extensions": ["org"]
  },
  "application/vnd.lotus-screencam": {
    "source": "iana",
    "extensions": ["scm"]
  },
  "application/vnd.lotus-wordpro": {
    "source": "iana",
    "extensions": ["lwp"]
  },
  "application/vnd.macports.portpkg": {
    "source": "iana",
    "extensions": ["portpkg"]
  },
  "application/vnd.mapbox-vector-tile": {
    "source": "iana",
    "extensions": ["mvt"]
  },
  "application/vnd.marlin.drm.actiontoken+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.marlin.drm.conftoken+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.marlin.drm.license+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.marlin.drm.mdcf": {
    "source": "iana"
  },
  "application/vnd.mason+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.maxmind.maxmind-db": {
    "source": "iana"
  },
  "application/vnd.mcd": {
    "source": "iana",
    "extensions": ["mcd"]
  },
  "application/vnd.medcalcdata": {
    "source": "iana",
    "extensions": ["mc1"]
  },
  "application/vnd.mediastation.cdkey": {
    "source": "iana",
    "extensions": ["cdkey"]
  },
  "application/vnd.meridian-slingshot": {
    "source": "iana"
  },
  "application/vnd.mfer": {
    "source": "iana",
    "extensions": ["mwf"]
  },
  "application/vnd.mfmp": {
    "source": "iana",
    "extensions": ["mfm"]
  },
  "application/vnd.micro+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.micrografx.flo": {
    "source": "iana",
    "extensions": ["flo"]
  },
  "application/vnd.micrografx.igx": {
    "source": "iana",
    "extensions": ["igx"]
  },
  "application/vnd.microsoft.portable-executable": {
    "source": "iana"
  },
  "application/vnd.microsoft.windows.thumbnail-cache": {
    "source": "iana"
  },
  "application/vnd.miele+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.mif": {
    "source": "iana",
    "extensions": ["mif"]
  },
  "application/vnd.minisoft-hp3000-save": {
    "source": "iana"
  },
  "application/vnd.mitsubishi.misty-guard.trustweb": {
    "source": "iana"
  },
  "application/vnd.mobius.daf": {
    "source": "iana",
    "extensions": ["daf"]
  },
  "application/vnd.mobius.dis": {
    "source": "iana",
    "extensions": ["dis"]
  },
  "application/vnd.mobius.mbk": {
    "source": "iana",
    "extensions": ["mbk"]
  },
  "application/vnd.mobius.mqy": {
    "source": "iana",
    "extensions": ["mqy"]
  },
  "application/vnd.mobius.msl": {
    "source": "iana",
    "extensions": ["msl"]
  },
  "application/vnd.mobius.plc": {
    "source": "iana",
    "extensions": ["plc"]
  },
  "application/vnd.mobius.txf": {
    "source": "iana",
    "extensions": ["txf"]
  },
  "application/vnd.mophun.application": {
    "source": "iana",
    "extensions": ["mpn"]
  },
  "application/vnd.mophun.certificate": {
    "source": "iana",
    "extensions": ["mpc"]
  },
  "application/vnd.motorola.flexsuite": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.adsi": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.fis": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.gotap": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.kmr": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.ttc": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.wem": {
    "source": "iana"
  },
  "application/vnd.motorola.iprm": {
    "source": "iana"
  },
  "application/vnd.mozilla.xul+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xul"]
  },
  "application/vnd.ms-3mfdocument": {
    "source": "iana"
  },
  "application/vnd.ms-artgalry": {
    "source": "iana",
    "extensions": ["cil"]
  },
  "application/vnd.ms-asf": {
    "source": "iana"
  },
  "application/vnd.ms-cab-compressed": {
    "source": "iana",
    "extensions": ["cab"]
  },
  "application/vnd.ms-color.iccprofile": {
    "source": "apache"
  },
  "application/vnd.ms-excel": {
    "source": "iana",
    "compressible": false,
    "extensions": ["xls","xlm","xla","xlc","xlt","xlw"]
  },
  "application/vnd.ms-excel.addin.macroenabled.12": {
    "source": "iana",
    "extensions": ["xlam"]
  },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    "source": "iana",
    "extensions": ["xlsb"]
  },
  "application/vnd.ms-excel.sheet.macroenabled.12": {
    "source": "iana",
    "extensions": ["xlsm"]
  },
  "application/vnd.ms-excel.template.macroenabled.12": {
    "source": "iana",
    "extensions": ["xltm"]
  },
  "application/vnd.ms-fontobject": {
    "source": "iana",
    "compressible": true,
    "extensions": ["eot"]
  },
  "application/vnd.ms-htmlhelp": {
    "source": "iana",
    "extensions": ["chm"]
  },
  "application/vnd.ms-ims": {
    "source": "iana",
    "extensions": ["ims"]
  },
  "application/vnd.ms-lrm": {
    "source": "iana",
    "extensions": ["lrm"]
  },
  "application/vnd.ms-office.activex+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-officetheme": {
    "source": "iana",
    "extensions": ["thmx"]
  },
  "application/vnd.ms-opentype": {
    "source": "apache",
    "compressible": true
  },
  "application/vnd.ms-outlook": {
    "compressible": false,
    "extensions": ["msg"]
  },
  "application/vnd.ms-package.obfuscated-opentype": {
    "source": "apache"
  },
  "application/vnd.ms-pki.seccat": {
    "source": "apache",
    "extensions": ["cat"]
  },
  "application/vnd.ms-pki.stl": {
    "source": "apache",
    "extensions": ["stl"]
  },
  "application/vnd.ms-playready.initiator+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-powerpoint": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ppt","pps","pot"]
  },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": {
    "source": "iana",
    "extensions": ["ppam"]
  },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    "source": "iana",
    "extensions": ["pptm"]
  },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": {
    "source": "iana",
    "extensions": ["sldm"]
  },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    "source": "iana",
    "extensions": ["ppsm"]
  },
  "application/vnd.ms-powerpoint.template.macroenabled.12": {
    "source": "iana",
    "extensions": ["potm"]
  },
  "application/vnd.ms-printdevicecapabilities+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-printing.printticket+xml": {
    "source": "apache",
    "compressible": true
  },
  "application/vnd.ms-printschematicket+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-project": {
    "source": "iana",
    "extensions": ["mpp","mpt"]
  },
  "application/vnd.ms-tnef": {
    "source": "iana"
  },
  "application/vnd.ms-windows.devicepairing": {
    "source": "iana"
  },
  "application/vnd.ms-windows.nwprinting.oob": {
    "source": "iana"
  },
  "application/vnd.ms-windows.printerpairing": {
    "source": "iana"
  },
  "application/vnd.ms-windows.wsd.oob": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.lic-chlg-req": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.lic-resp": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.meter-chlg-req": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.meter-resp": {
    "source": "iana"
  },
  "application/vnd.ms-word.document.macroenabled.12": {
    "source": "iana",
    "extensions": ["docm"]
  },
  "application/vnd.ms-word.template.macroenabled.12": {
    "source": "iana",
    "extensions": ["dotm"]
  },
  "application/vnd.ms-works": {
    "source": "iana",
    "extensions": ["wps","wks","wcm","wdb"]
  },
  "application/vnd.ms-wpl": {
    "source": "iana",
    "extensions": ["wpl"]
  },
  "application/vnd.ms-xpsdocument": {
    "source": "iana",
    "compressible": false,
    "extensions": ["xps"]
  },
  "application/vnd.msa-disk-image": {
    "source": "iana"
  },
  "application/vnd.mseq": {
    "source": "iana",
    "extensions": ["mseq"]
  },
  "application/vnd.msign": {
    "source": "iana"
  },
  "application/vnd.multiad.creator": {
    "source": "iana"
  },
  "application/vnd.multiad.creator.cif": {
    "source": "iana"
  },
  "application/vnd.music-niff": {
    "source": "iana"
  },
  "application/vnd.musician": {
    "source": "iana",
    "extensions": ["mus"]
  },
  "application/vnd.muvee.style": {
    "source": "iana",
    "extensions": ["msty"]
  },
  "application/vnd.mynfc": {
    "source": "iana",
    "extensions": ["taglet"]
  },
  "application/vnd.ncd.control": {
    "source": "iana"
  },
  "application/vnd.ncd.reference": {
    "source": "iana"
  },
  "application/vnd.nearst.inv+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nebumind.line": {
    "source": "iana"
  },
  "application/vnd.nervana": {
    "source": "iana"
  },
  "application/vnd.netfpx": {
    "source": "iana"
  },
  "application/vnd.neurolanguage.nlu": {
    "source": "iana",
    "extensions": ["nlu"]
  },
  "application/vnd.nimn": {
    "source": "iana"
  },
  "application/vnd.nintendo.nitro.rom": {
    "source": "iana"
  },
  "application/vnd.nintendo.snes.rom": {
    "source": "iana"
  },
  "application/vnd.nitf": {
    "source": "iana",
    "extensions": ["ntf","nitf"]
  },
  "application/vnd.noblenet-directory": {
    "source": "iana",
    "extensions": ["nnd"]
  },
  "application/vnd.noblenet-sealer": {
    "source": "iana",
    "extensions": ["nns"]
  },
  "application/vnd.noblenet-web": {
    "source": "iana",
    "extensions": ["nnw"]
  },
  "application/vnd.nokia.catalogs": {
    "source": "iana"
  },
  "application/vnd.nokia.conml+wbxml": {
    "source": "iana"
  },
  "application/vnd.nokia.conml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.iptv.config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.isds-radio-presets": {
    "source": "iana"
  },
  "application/vnd.nokia.landmark+wbxml": {
    "source": "iana"
  },
  "application/vnd.nokia.landmark+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.landmarkcollection+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.n-gage.ac+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ac"]
  },
  "application/vnd.nokia.n-gage.data": {
    "source": "iana",
    "extensions": ["ngdat"]
  },
  "application/vnd.nokia.n-gage.symbian.install": {
    "source": "iana",
    "extensions": ["n-gage"]
  },
  "application/vnd.nokia.ncd": {
    "source": "iana"
  },
  "application/vnd.nokia.pcd+wbxml": {
    "source": "iana"
  },
  "application/vnd.nokia.pcd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.radio-preset": {
    "source": "iana",
    "extensions": ["rpst"]
  },
  "application/vnd.nokia.radio-presets": {
    "source": "iana",
    "extensions": ["rpss"]
  },
  "application/vnd.novadigm.edm": {
    "source": "iana",
    "extensions": ["edm"]
  },
  "application/vnd.novadigm.edx": {
    "source": "iana",
    "extensions": ["edx"]
  },
  "application/vnd.novadigm.ext": {
    "source": "iana",
    "extensions": ["ext"]
  },
  "application/vnd.ntt-local.content-share": {
    "source": "iana"
  },
  "application/vnd.ntt-local.file-transfer": {
    "source": "iana"
  },
  "application/vnd.ntt-local.ogw_remote-access": {
    "source": "iana"
  },
  "application/vnd.ntt-local.sip-ta_remote": {
    "source": "iana"
  },
  "application/vnd.ntt-local.sip-ta_tcp_stream": {
    "source": "iana"
  },
  "application/vnd.oasis.opendocument.chart": {
    "source": "iana",
    "extensions": ["odc"]
  },
  "application/vnd.oasis.opendocument.chart-template": {
    "source": "iana",
    "extensions": ["otc"]
  },
  "application/vnd.oasis.opendocument.database": {
    "source": "iana",
    "extensions": ["odb"]
  },
  "application/vnd.oasis.opendocument.formula": {
    "source": "iana",
    "extensions": ["odf"]
  },
  "application/vnd.oasis.opendocument.formula-template": {
    "source": "iana",
    "extensions": ["odft"]
  },
  "application/vnd.oasis.opendocument.graphics": {
    "source": "iana",
    "compressible": false,
    "extensions": ["odg"]
  },
  "application/vnd.oasis.opendocument.graphics-template": {
    "source": "iana",
    "extensions": ["otg"]
  },
  "application/vnd.oasis.opendocument.image": {
    "source": "iana",
    "extensions": ["odi"]
  },
  "application/vnd.oasis.opendocument.image-template": {
    "source": "iana",
    "extensions": ["oti"]
  },
  "application/vnd.oasis.opendocument.presentation": {
    "source": "iana",
    "compressible": false,
    "extensions": ["odp"]
  },
  "application/vnd.oasis.opendocument.presentation-template": {
    "source": "iana",
    "extensions": ["otp"]
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ods"]
  },
  "application/vnd.oasis.opendocument.spreadsheet-template": {
    "source": "iana",
    "extensions": ["ots"]
  },
  "application/vnd.oasis.opendocument.text": {
    "source": "iana",
    "compressible": false,
    "extensions": ["odt"]
  },
  "application/vnd.oasis.opendocument.text-master": {
    "source": "iana",
    "extensions": ["odm"]
  },
  "application/vnd.oasis.opendocument.text-template": {
    "source": "iana",
    "extensions": ["ott"]
  },
  "application/vnd.oasis.opendocument.text-web": {
    "source": "iana",
    "extensions": ["oth"]
  },
  "application/vnd.obn": {
    "source": "iana"
  },
  "application/vnd.ocf+cbor": {
    "source": "iana"
  },
  "application/vnd.oci.image.manifest.v1+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oftn.l10n+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.contentaccessdownload+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.contentaccessstreaming+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.cspg-hexbinary": {
    "source": "iana"
  },
  "application/vnd.oipf.dae.svg+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.dae.xhtml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.mippvcontrolmessage+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.pae.gem": {
    "source": "iana"
  },
  "application/vnd.oipf.spdiscovery+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.spdlist+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.ueprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.userprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.olpc-sugar": {
    "source": "iana",
    "extensions": ["xo"]
  },
  "application/vnd.oma-scws-config": {
    "source": "iana"
  },
  "application/vnd.oma-scws-http-request": {
    "source": "iana"
  },
  "application/vnd.oma-scws-http-response": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.drm-trigger+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.imd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.ltkm": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.notification+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.provisioningtrigger": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.sgboot": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.sgdd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.sgdu": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.simple-symbol-container": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.smartcard-trigger+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.sprov+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.stkm": {
    "source": "iana"
  },
  "application/vnd.oma.cab-address-book+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-feature-handler+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-pcc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-subs-invite+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-user-prefs+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.dcd": {
    "source": "iana"
  },
  "application/vnd.oma.dcdc": {
    "source": "iana"
  },
  "application/vnd.oma.dd2+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dd2"]
  },
  "application/vnd.oma.drm.risd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.group-usage-list+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.lwm2m+cbor": {
    "source": "iana"
  },
  "application/vnd.oma.lwm2m+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.lwm2m+tlv": {
    "source": "iana"
  },
  "application/vnd.oma.pal+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.detailed-progress-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.final-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.groups+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.invocation-descriptor+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.optimized-progress-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.push": {
    "source": "iana"
  },
  "application/vnd.oma.scidm.messages+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.xcap-directory+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.omads-email+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.omads-file+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.omads-folder+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.omaloc-supl-init": {
    "source": "iana"
  },
  "application/vnd.onepager": {
    "source": "iana"
  },
  "application/vnd.onepagertamp": {
    "source": "iana"
  },
  "application/vnd.onepagertamx": {
    "source": "iana"
  },
  "application/vnd.onepagertat": {
    "source": "iana"
  },
  "application/vnd.onepagertatp": {
    "source": "iana"
  },
  "application/vnd.onepagertatx": {
    "source": "iana"
  },
  "application/vnd.openblox.game+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["obgx"]
  },
  "application/vnd.openblox.game-binary": {
    "source": "iana"
  },
  "application/vnd.openeye.oeb": {
    "source": "iana"
  },
  "application/vnd.openofficeorg.extension": {
    "source": "apache",
    "extensions": ["oxt"]
  },
  "application/vnd.openstreetmap.data+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["osm"]
  },
  "application/vnd.opentimestamps.ots": {
    "source": "iana"
  },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawing+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    "source": "iana",
    "compressible": false,
    "extensions": ["pptx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": {
    "source": "iana",
    "extensions": ["sldx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    "source": "iana",
    "extensions": ["ppsx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template": {
    "source": "iana",
    "extensions": ["potx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    "source": "iana",
    "compressible": false,
    "extensions": ["xlsx"]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    "source": "iana",
    "extensions": ["xltx"]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.theme+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.vmldrawing": {
    "source": "iana"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    "source": "iana",
    "compressible": false,
    "extensions": ["docx"]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    "source": "iana",
    "extensions": ["dotx"]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-package.core-properties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-package.relationships+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oracle.resource+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.orange.indata": {
    "source": "iana"
  },
  "application/vnd.osa.netdeploy": {
    "source": "iana"
  },
  "application/vnd.osgeo.mapguide.package": {
    "source": "iana",
    "extensions": ["mgp"]
  },
  "application/vnd.osgi.bundle": {
    "source": "iana"
  },
  "application/vnd.osgi.dp": {
    "source": "iana",
    "extensions": ["dp"]
  },
  "application/vnd.osgi.subsystem": {
    "source": "iana",
    "extensions": ["esa"]
  },
  "application/vnd.otps.ct-kip+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oxli.countgraph": {
    "source": "iana"
  },
  "application/vnd.pagerduty+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.palm": {
    "source": "iana",
    "extensions": ["pdb","pqa","oprc"]
  },
  "application/vnd.panoply": {
    "source": "iana"
  },
  "application/vnd.paos.xml": {
    "source": "iana"
  },
  "application/vnd.patentdive": {
    "source": "iana"
  },
  "application/vnd.patientecommsdoc": {
    "source": "iana"
  },
  "application/vnd.pawaafile": {
    "source": "iana",
    "extensions": ["paw"]
  },
  "application/vnd.pcos": {
    "source": "iana"
  },
  "application/vnd.pg.format": {
    "source": "iana",
    "extensions": ["str"]
  },
  "application/vnd.pg.osasli": {
    "source": "iana",
    "extensions": ["ei6"]
  },
  "application/vnd.piaccess.application-licence": {
    "source": "iana"
  },
  "application/vnd.picsel": {
    "source": "iana",
    "extensions": ["efif"]
  },
  "application/vnd.pmi.widget": {
    "source": "iana",
    "extensions": ["wg"]
  },
  "application/vnd.poc.group-advertisement+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.pocketlearn": {
    "source": "iana",
    "extensions": ["plf"]
  },
  "application/vnd.powerbuilder6": {
    "source": "iana",
    "extensions": ["pbd"]
  },
  "application/vnd.powerbuilder6-s": {
    "source": "iana"
  },
  "application/vnd.powerbuilder7": {
    "source": "iana"
  },
  "application/vnd.powerbuilder7-s": {
    "source": "iana"
  },
  "application/vnd.powerbuilder75": {
    "source": "iana"
  },
  "application/vnd.powerbuilder75-s": {
    "source": "iana"
  },
  "application/vnd.preminet": {
    "source": "iana"
  },
  "application/vnd.previewsystems.box": {
    "source": "iana",
    "extensions": ["box"]
  },
  "application/vnd.proteus.magazine": {
    "source": "iana",
    "extensions": ["mgz"]
  },
  "application/vnd.psfs": {
    "source": "iana"
  },
  "application/vnd.publishare-delta-tree": {
    "source": "iana",
    "extensions": ["qps"]
  },
  "application/vnd.pvi.ptid1": {
    "source": "iana",
    "extensions": ["ptid"]
  },
  "application/vnd.pwg-multiplexed": {
    "source": "iana"
  },
  "application/vnd.pwg-xhtml-print+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.qualcomm.brew-app-res": {
    "source": "iana"
  },
  "application/vnd.quarantainenet": {
    "source": "iana"
  },
  "application/vnd.quark.quarkxpress": {
    "source": "iana",
    "extensions": ["qxd","qxt","qwd","qwt","qxl","qxb"]
  },
  "application/vnd.quobject-quoxdocument": {
    "source": "iana"
  },
  "application/vnd.radisys.moml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-conf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-conn+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-dialog+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-stream+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-conf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-base+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-group+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-speech+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-transform+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.rainstor.data": {
    "source": "iana"
  },
  "application/vnd.rapid": {
    "source": "iana"
  },
  "application/vnd.rar": {
    "source": "iana",
    "extensions": ["rar"]
  },
  "application/vnd.realvnc.bed": {
    "source": "iana",
    "extensions": ["bed"]
  },
  "application/vnd.recordare.musicxml": {
    "source": "iana",
    "extensions": ["mxl"]
  },
  "application/vnd.recordare.musicxml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["musicxml"]
  },
  "application/vnd.renlearn.rlprint": {
    "source": "iana"
  },
  "application/vnd.resilient.logic": {
    "source": "iana"
  },
  "application/vnd.restful+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.rig.cryptonote": {
    "source": "iana",
    "extensions": ["cryptonote"]
  },
  "application/vnd.rim.cod": {
    "source": "apache",
    "extensions": ["cod"]
  },
  "application/vnd.rn-realmedia": {
    "source": "apache",
    "extensions": ["rm"]
  },
  "application/vnd.rn-realmedia-vbr": {
    "source": "apache",
    "extensions": ["rmvb"]
  },
  "application/vnd.route66.link66+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["link66"]
  },
  "application/vnd.rs-274x": {
    "source": "iana"
  },
  "application/vnd.ruckus.download": {
    "source": "iana"
  },
  "application/vnd.s3sms": {
    "source": "iana"
  },
  "application/vnd.sailingtracker.track": {
    "source": "iana",
    "extensions": ["st"]
  },
  "application/vnd.sar": {
    "source": "iana"
  },
  "application/vnd.sbm.cid": {
    "source": "iana"
  },
  "application/vnd.sbm.mid2": {
    "source": "iana"
  },
  "application/vnd.scribus": {
    "source": "iana"
  },
  "application/vnd.sealed.3df": {
    "source": "iana"
  },
  "application/vnd.sealed.csf": {
    "source": "iana"
  },
  "application/vnd.sealed.doc": {
    "source": "iana"
  },
  "application/vnd.sealed.eml": {
    "source": "iana"
  },
  "application/vnd.sealed.mht": {
    "source": "iana"
  },
  "application/vnd.sealed.net": {
    "source": "iana"
  },
  "application/vnd.sealed.ppt": {
    "source": "iana"
  },
  "application/vnd.sealed.tiff": {
    "source": "iana"
  },
  "application/vnd.sealed.xls": {
    "source": "iana"
  },
  "application/vnd.sealedmedia.softseal.html": {
    "source": "iana"
  },
  "application/vnd.sealedmedia.softseal.pdf": {
    "source": "iana"
  },
  "application/vnd.seemail": {
    "source": "iana",
    "extensions": ["see"]
  },
  "application/vnd.seis+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.sema": {
    "source": "iana",
    "extensions": ["sema"]
  },
  "application/vnd.semd": {
    "source": "iana",
    "extensions": ["semd"]
  },
  "application/vnd.semf": {
    "source": "iana",
    "extensions": ["semf"]
  },
  "application/vnd.shade-save-file": {
    "source": "iana"
  },
  "application/vnd.shana.informed.formdata": {
    "source": "iana",
    "extensions": ["ifm"]
  },
  "application/vnd.shana.informed.formtemplate": {
    "source": "iana",
    "extensions": ["itp"]
  },
  "application/vnd.shana.informed.interchange": {
    "source": "iana",
    "extensions": ["iif"]
  },
  "application/vnd.shana.informed.package": {
    "source": "iana",
    "extensions": ["ipk"]
  },
  "application/vnd.shootproof+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.shopkick+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.shp": {
    "source": "iana"
  },
  "application/vnd.shx": {
    "source": "iana"
  },
  "application/vnd.sigrok.session": {
    "source": "iana"
  },
  "application/vnd.simtech-mindmapper": {
    "source": "iana",
    "extensions": ["twd","twds"]
  },
  "application/vnd.siren+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.smaf": {
    "source": "iana",
    "extensions": ["mmf"]
  },
  "application/vnd.smart.notebook": {
    "source": "iana"
  },
  "application/vnd.smart.teacher": {
    "source": "iana",
    "extensions": ["teacher"]
  },
  "application/vnd.snesdev-page-table": {
    "source": "iana"
  },
  "application/vnd.software602.filler.form+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["fo"]
  },
  "application/vnd.software602.filler.form-xml-zip": {
    "source": "iana"
  },
  "application/vnd.solent.sdkm+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sdkm","sdkd"]
  },
  "application/vnd.spotfire.dxp": {
    "source": "iana",
    "extensions": ["dxp"]
  },
  "application/vnd.spotfire.sfs": {
    "source": "iana",
    "extensions": ["sfs"]
  },
  "application/vnd.sqlite3": {
    "source": "iana"
  },
  "application/vnd.sss-cod": {
    "source": "iana"
  },
  "application/vnd.sss-dtf": {
    "source": "iana"
  },
  "application/vnd.sss-ntf": {
    "source": "iana"
  },
  "application/vnd.stardivision.calc": {
    "source": "apache",
    "extensions": ["sdc"]
  },
  "application/vnd.stardivision.draw": {
    "source": "apache",
    "extensions": ["sda"]
  },
  "application/vnd.stardivision.impress": {
    "source": "apache",
    "extensions": ["sdd"]
  },
  "application/vnd.stardivision.math": {
    "source": "apache",
    "extensions": ["smf"]
  },
  "application/vnd.stardivision.writer": {
    "source": "apache",
    "extensions": ["sdw","vor"]
  },
  "application/vnd.stardivision.writer-global": {
    "source": "apache",
    "extensions": ["sgl"]
  },
  "application/vnd.stepmania.package": {
    "source": "iana",
    "extensions": ["smzip"]
  },
  "application/vnd.stepmania.stepchart": {
    "source": "iana",
    "extensions": ["sm"]
  },
  "application/vnd.street-stream": {
    "source": "iana"
  },
  "application/vnd.sun.wadl+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wadl"]
  },
  "application/vnd.sun.xml.calc": {
    "source": "apache",
    "extensions": ["sxc"]
  },
  "application/vnd.sun.xml.calc.template": {
    "source": "apache",
    "extensions": ["stc"]
  },
  "application/vnd.sun.xml.draw": {
    "source": "apache",
    "extensions": ["sxd"]
  },
  "application/vnd.sun.xml.draw.template": {
    "source": "apache",
    "extensions": ["std"]
  },
  "application/vnd.sun.xml.impress": {
    "source": "apache",
    "extensions": ["sxi"]
  },
  "application/vnd.sun.xml.impress.template": {
    "source": "apache",
    "extensions": ["sti"]
  },
  "application/vnd.sun.xml.math": {
    "source": "apache",
    "extensions": ["sxm"]
  },
  "application/vnd.sun.xml.writer": {
    "source": "apache",
    "extensions": ["sxw"]
  },
  "application/vnd.sun.xml.writer.global": {
    "source": "apache",
    "extensions": ["sxg"]
  },
  "application/vnd.sun.xml.writer.template": {
    "source": "apache",
    "extensions": ["stw"]
  },
  "application/vnd.sus-calendar": {
    "source": "iana",
    "extensions": ["sus","susp"]
  },
  "application/vnd.svd": {
    "source": "iana",
    "extensions": ["svd"]
  },
  "application/vnd.swiftview-ics": {
    "source": "iana"
  },
  "application/vnd.sycle+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.symbian.install": {
    "source": "apache",
    "extensions": ["sis","sisx"]
  },
  "application/vnd.syncml+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["xsm"]
  },
  "application/vnd.syncml.dm+wbxml": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["bdm"]
  },
  "application/vnd.syncml.dm+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["xdm"]
  },
  "application/vnd.syncml.dm.notification": {
    "source": "iana"
  },
  "application/vnd.syncml.dmddf+wbxml": {
    "source": "iana"
  },
  "application/vnd.syncml.dmddf+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["ddf"]
  },
  "application/vnd.syncml.dmtnds+wbxml": {
    "source": "iana"
  },
  "application/vnd.syncml.dmtnds+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.syncml.ds.notification": {
    "source": "iana"
  },
  "application/vnd.tableschema+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.tao.intent-module-archive": {
    "source": "iana",
    "extensions": ["tao"]
  },
  "application/vnd.tcpdump.pcap": {
    "source": "iana",
    "extensions": ["pcap","cap","dmp"]
  },
  "application/vnd.think-cell.ppttc+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.tmd.mediaflex.api+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.tml": {
    "source": "iana"
  },
  "application/vnd.tmobile-livetv": {
    "source": "iana",
    "extensions": ["tmo"]
  },
  "application/vnd.tri.onesource": {
    "source": "iana"
  },
  "application/vnd.trid.tpt": {
    "source": "iana",
    "extensions": ["tpt"]
  },
  "application/vnd.triscape.mxs": {
    "source": "iana",
    "extensions": ["mxs"]
  },
  "application/vnd.trueapp": {
    "source": "iana",
    "extensions": ["tra"]
  },
  "application/vnd.truedoc": {
    "source": "iana"
  },
  "application/vnd.ubisoft.webplayer": {
    "source": "iana"
  },
  "application/vnd.ufdl": {
    "source": "iana",
    "extensions": ["ufd","ufdl"]
  },
  "application/vnd.uiq.theme": {
    "source": "iana",
    "extensions": ["utz"]
  },
  "application/vnd.umajin": {
    "source": "iana",
    "extensions": ["umj"]
  },
  "application/vnd.unity": {
    "source": "iana",
    "extensions": ["unityweb"]
  },
  "application/vnd.uoml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["uoml"]
  },
  "application/vnd.uplanet.alert": {
    "source": "iana"
  },
  "application/vnd.uplanet.alert-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.bearer-choice": {
    "source": "iana"
  },
  "application/vnd.uplanet.bearer-choice-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.cacheop": {
    "source": "iana"
  },
  "application/vnd.uplanet.cacheop-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.channel": {
    "source": "iana"
  },
  "application/vnd.uplanet.channel-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.list": {
    "source": "iana"
  },
  "application/vnd.uplanet.list-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.listcmd": {
    "source": "iana"
  },
  "application/vnd.uplanet.listcmd-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.signal": {
    "source": "iana"
  },
  "application/vnd.uri-map": {
    "source": "iana"
  },
  "application/vnd.valve.source.material": {
    "source": "iana"
  },
  "application/vnd.vcx": {
    "source": "iana",
    "extensions": ["vcx"]
  },
  "application/vnd.vd-study": {
    "source": "iana"
  },
  "application/vnd.vectorworks": {
    "source": "iana"
  },
  "application/vnd.vel+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.verimatrix.vcas": {
    "source": "iana"
  },
  "application/vnd.veritone.aion+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.veryant.thin": {
    "source": "iana"
  },
  "application/vnd.ves.encrypted": {
    "source": "iana"
  },
  "application/vnd.vidsoft.vidconference": {
    "source": "iana"
  },
  "application/vnd.visio": {
    "source": "iana",
    "extensions": ["vsd","vst","vss","vsw"]
  },
  "application/vnd.visionary": {
    "source": "iana",
    "extensions": ["vis"]
  },
  "application/vnd.vividence.scriptfile": {
    "source": "iana"
  },
  "application/vnd.vsf": {
    "source": "iana",
    "extensions": ["vsf"]
  },
  "application/vnd.wap.sic": {
    "source": "iana"
  },
  "application/vnd.wap.slc": {
    "source": "iana"
  },
  "application/vnd.wap.wbxml": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["wbxml"]
  },
  "application/vnd.wap.wmlc": {
    "source": "iana",
    "extensions": ["wmlc"]
  },
  "application/vnd.wap.wmlscriptc": {
    "source": "iana",
    "extensions": ["wmlsc"]
  },
  "application/vnd.webturbo": {
    "source": "iana",
    "extensions": ["wtb"]
  },
  "application/vnd.wfa.dpp": {
    "source": "iana"
  },
  "application/vnd.wfa.p2p": {
    "source": "iana"
  },
  "application/vnd.wfa.wsc": {
    "source": "iana"
  },
  "application/vnd.windows.devicepairing": {
    "source": "iana"
  },
  "application/vnd.wmc": {
    "source": "iana"
  },
  "application/vnd.wmf.bootstrap": {
    "source": "iana"
  },
  "application/vnd.wolfram.mathematica": {
    "source": "iana"
  },
  "application/vnd.wolfram.mathematica.package": {
    "source": "iana"
  },
  "application/vnd.wolfram.player": {
    "source": "iana",
    "extensions": ["nbp"]
  },
  "application/vnd.wordperfect": {
    "source": "iana",
    "extensions": ["wpd"]
  },
  "application/vnd.wqd": {
    "source": "iana",
    "extensions": ["wqd"]
  },
  "application/vnd.wrq-hp3000-labelled": {
    "source": "iana"
  },
  "application/vnd.wt.stf": {
    "source": "iana",
    "extensions": ["stf"]
  },
  "application/vnd.wv.csp+wbxml": {
    "source": "iana"
  },
  "application/vnd.wv.csp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.wv.ssp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.xacml+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.xara": {
    "source": "iana",
    "extensions": ["xar"]
  },
  "application/vnd.xfdl": {
    "source": "iana",
    "extensions": ["xfdl"]
  },
  "application/vnd.xfdl.webform": {
    "source": "iana"
  },
  "application/vnd.xmi+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.xmpie.cpkg": {
    "source": "iana"
  },
  "application/vnd.xmpie.dpkg": {
    "source": "iana"
  },
  "application/vnd.xmpie.plan": {
    "source": "iana"
  },
  "application/vnd.xmpie.ppkg": {
    "source": "iana"
  },
  "application/vnd.xmpie.xlim": {
    "source": "iana"
  },
  "application/vnd.yamaha.hv-dic": {
    "source": "iana",
    "extensions": ["hvd"]
  },
  "application/vnd.yamaha.hv-script": {
    "source": "iana",
    "extensions": ["hvs"]
  },
  "application/vnd.yamaha.hv-voice": {
    "source": "iana",
    "extensions": ["hvp"]
  },
  "application/vnd.yamaha.openscoreformat": {
    "source": "iana",
    "extensions": ["osf"]
  },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["osfpvg"]
  },
  "application/vnd.yamaha.remote-setup": {
    "source": "iana"
  },
  "application/vnd.yamaha.smaf-audio": {
    "source": "iana",
    "extensions": ["saf"]
  },
  "application/vnd.yamaha.smaf-phrase": {
    "source": "iana",
    "extensions": ["spf"]
  },
  "application/vnd.yamaha.through-ngn": {
    "source": "iana"
  },
  "application/vnd.yamaha.tunnel-udpencap": {
    "source": "iana"
  },
  "application/vnd.yaoweme": {
    "source": "iana"
  },
  "application/vnd.yellowriver-custom-menu": {
    "source": "iana",
    "extensions": ["cmp"]
  },
  "application/vnd.youtube.yt": {
    "source": "iana"
  },
  "application/vnd.zul": {
    "source": "iana",
    "extensions": ["zir","zirz"]
  },
  "application/vnd.zzazz.deck+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["zaz"]
  },
  "application/voicexml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["vxml"]
  },
  "application/voucher-cms+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vq-rtcpxr": {
    "source": "iana"
  },
  "application/wasm": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wasm"]
  },
  "application/watcherinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/webpush-options+json": {
    "source": "iana",
    "compressible": true
  },
  "application/whoispp-query": {
    "source": "iana"
  },
  "application/whoispp-response": {
    "source": "iana"
  },
  "application/widget": {
    "source": "iana",
    "extensions": ["wgt"]
  },
  "application/winhlp": {
    "source": "apache",
    "extensions": ["hlp"]
  },
  "application/wita": {
    "source": "iana"
  },
  "application/wordperfect5.1": {
    "source": "iana"
  },
  "application/wsdl+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wsdl"]
  },
  "application/wspolicy+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wspolicy"]
  },
  "application/x-7z-compressed": {
    "source": "apache",
    "compressible": false,
    "extensions": ["7z"]
  },
  "application/x-abiword": {
    "source": "apache",
    "extensions": ["abw"]
  },
  "application/x-ace-compressed": {
    "source": "apache",
    "extensions": ["ace"]
  },
  "application/x-amf": {
    "source": "apache"
  },
  "application/x-apple-diskimage": {
    "source": "apache",
    "extensions": ["dmg"]
  },
  "application/x-arj": {
    "compressible": false,
    "extensions": ["arj"]
  },
  "application/x-authorware-bin": {
    "source": "apache",
    "extensions": ["aab","x32","u32","vox"]
  },
  "application/x-authorware-map": {
    "source": "apache",
    "extensions": ["aam"]
  },
  "application/x-authorware-seg": {
    "source": "apache",
    "extensions": ["aas"]
  },
  "application/x-bcpio": {
    "source": "apache",
    "extensions": ["bcpio"]
  },
  "application/x-bdoc": {
    "compressible": false,
    "extensions": ["bdoc"]
  },
  "application/x-bittorrent": {
    "source": "apache",
    "extensions": ["torrent"]
  },
  "application/x-blorb": {
    "source": "apache",
    "extensions": ["blb","blorb"]
  },
  "application/x-bzip": {
    "source": "apache",
    "compressible": false,
    "extensions": ["bz"]
  },
  "application/x-bzip2": {
    "source": "apache",
    "compressible": false,
    "extensions": ["bz2","boz"]
  },
  "application/x-cbr": {
    "source": "apache",
    "extensions": ["cbr","cba","cbt","cbz","cb7"]
  },
  "application/x-cdlink": {
    "source": "apache",
    "extensions": ["vcd"]
  },
  "application/x-cfs-compressed": {
    "source": "apache",
    "extensions": ["cfs"]
  },
  "application/x-chat": {
    "source": "apache",
    "extensions": ["chat"]
  },
  "application/x-chess-pgn": {
    "source": "apache",
    "extensions": ["pgn"]
  },
  "application/x-chrome-extension": {
    "extensions": ["crx"]
  },
  "application/x-cocoa": {
    "source": "nginx",
    "extensions": ["cco"]
  },
  "application/x-compress": {
    "source": "apache"
  },
  "application/x-conference": {
    "source": "apache",
    "extensions": ["nsc"]
  },
  "application/x-cpio": {
    "source": "apache",
    "extensions": ["cpio"]
  },
  "application/x-csh": {
    "source": "apache",
    "extensions": ["csh"]
  },
  "application/x-deb": {
    "compressible": false
  },
  "application/x-debian-package": {
    "source": "apache",
    "extensions": ["deb","udeb"]
  },
  "application/x-dgc-compressed": {
    "source": "apache",
    "extensions": ["dgc"]
  },
  "application/x-director": {
    "source": "apache",
    "extensions": ["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]
  },
  "application/x-doom": {
    "source": "apache",
    "extensions": ["wad"]
  },
  "application/x-dtbncx+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["ncx"]
  },
  "application/x-dtbook+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["dtb"]
  },
  "application/x-dtbresource+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["res"]
  },
  "application/x-dvi": {
    "source": "apache",
    "compressible": false,
    "extensions": ["dvi"]
  },
  "application/x-envoy": {
    "source": "apache",
    "extensions": ["evy"]
  },
  "application/x-eva": {
    "source": "apache",
    "extensions": ["eva"]
  },
  "application/x-font-bdf": {
    "source": "apache",
    "extensions": ["bdf"]
  },
  "application/x-font-dos": {
    "source": "apache"
  },
  "application/x-font-framemaker": {
    "source": "apache"
  },
  "application/x-font-ghostscript": {
    "source": "apache",
    "extensions": ["gsf"]
  },
  "application/x-font-libgrx": {
    "source": "apache"
  },
  "application/x-font-linux-psf": {
    "source": "apache",
    "extensions": ["psf"]
  },
  "application/x-font-pcf": {
    "source": "apache",
    "extensions": ["pcf"]
  },
  "application/x-font-snf": {
    "source": "apache",
    "extensions": ["snf"]
  },
  "application/x-font-speedo": {
    "source": "apache"
  },
  "application/x-font-sunos-news": {
    "source": "apache"
  },
  "application/x-font-type1": {
    "source": "apache",
    "extensions": ["pfa","pfb","pfm","afm"]
  },
  "application/x-font-vfont": {
    "source": "apache"
  },
  "application/x-freearc": {
    "source": "apache",
    "extensions": ["arc"]
  },
  "application/x-futuresplash": {
    "source": "apache",
    "extensions": ["spl"]
  },
  "application/x-gca-compressed": {
    "source": "apache",
    "extensions": ["gca"]
  },
  "application/x-glulx": {
    "source": "apache",
    "extensions": ["ulx"]
  },
  "application/x-gnumeric": {
    "source": "apache",
    "extensions": ["gnumeric"]
  },
  "application/x-gramps-xml": {
    "source": "apache",
    "extensions": ["gramps"]
  },
  "application/x-gtar": {
    "source": "apache",
    "extensions": ["gtar"]
  },
  "application/x-gzip": {
    "source": "apache"
  },
  "application/x-hdf": {
    "source": "apache",
    "extensions": ["hdf"]
  },
  "application/x-httpd-php": {
    "compressible": true,
    "extensions": ["php"]
  },
  "application/x-install-instructions": {
    "source": "apache",
    "extensions": ["install"]
  },
  "application/x-iso9660-image": {
    "source": "apache",
    "extensions": ["iso"]
  },
  "application/x-java-archive-diff": {
    "source": "nginx",
    "extensions": ["jardiff"]
  },
  "application/x-java-jnlp-file": {
    "source": "apache",
    "compressible": false,
    "extensions": ["jnlp"]
  },
  "application/x-javascript": {
    "compressible": true
  },
  "application/x-keepass2": {
    "extensions": ["kdbx"]
  },
  "application/x-latex": {
    "source": "apache",
    "compressible": false,
    "extensions": ["latex"]
  },
  "application/x-lua-bytecode": {
    "extensions": ["luac"]
  },
  "application/x-lzh-compressed": {
    "source": "apache",
    "extensions": ["lzh","lha"]
  },
  "application/x-makeself": {
    "source": "nginx",
    "extensions": ["run"]
  },
  "application/x-mie": {
    "source": "apache",
    "extensions": ["mie"]
  },
  "application/x-mobipocket-ebook": {
    "source": "apache",
    "extensions": ["prc","mobi"]
  },
  "application/x-mpegurl": {
    "compressible": false
  },
  "application/x-ms-application": {
    "source": "apache",
    "extensions": ["application"]
  },
  "application/x-ms-shortcut": {
    "source": "apache",
    "extensions": ["lnk"]
  },
  "application/x-ms-wmd": {
    "source": "apache",
    "extensions": ["wmd"]
  },
  "application/x-ms-wmz": {
    "source": "apache",
    "extensions": ["wmz"]
  },
  "application/x-ms-xbap": {
    "source": "apache",
    "extensions": ["xbap"]
  },
  "application/x-msaccess": {
    "source": "apache",
    "extensions": ["mdb"]
  },
  "application/x-msbinder": {
    "source": "apache",
    "extensions": ["obd"]
  },
  "application/x-mscardfile": {
    "source": "apache",
    "extensions": ["crd"]
  },
  "application/x-msclip": {
    "source": "apache",
    "extensions": ["clp"]
  },
  "application/x-msdos-program": {
    "extensions": ["exe"]
  },
  "application/x-msdownload": {
    "source": "apache",
    "extensions": ["exe","dll","com","bat","msi"]
  },
  "application/x-msmediaview": {
    "source": "apache",
    "extensions": ["mvb","m13","m14"]
  },
  "application/x-msmetafile": {
    "source": "apache",
    "extensions": ["wmf","wmz","emf","emz"]
  },
  "application/x-msmoney": {
    "source": "apache",
    "extensions": ["mny"]
  },
  "application/x-mspublisher": {
    "source": "apache",
    "extensions": ["pub"]
  },
  "application/x-msschedule": {
    "source": "apache",
    "extensions": ["scd"]
  },
  "application/x-msterminal": {
    "source": "apache",
    "extensions": ["trm"]
  },
  "application/x-mswrite": {
    "source": "apache",
    "extensions": ["wri"]
  },
  "application/x-netcdf": {
    "source": "apache",
    "extensions": ["nc","cdf"]
  },
  "application/x-ns-proxy-autoconfig": {
    "compressible": true,
    "extensions": ["pac"]
  },
  "application/x-nzb": {
    "source": "apache",
    "extensions": ["nzb"]
  },
  "application/x-perl": {
    "source": "nginx",
    "extensions": ["pl","pm"]
  },
  "application/x-pilot": {
    "source": "nginx",
    "extensions": ["prc","pdb"]
  },
  "application/x-pkcs12": {
    "source": "apache",
    "compressible": false,
    "extensions": ["p12","pfx"]
  },
  "application/x-pkcs7-certificates": {
    "source": "apache",
    "extensions": ["p7b","spc"]
  },
  "application/x-pkcs7-certreqresp": {
    "source": "apache",
    "extensions": ["p7r"]
  },
  "application/x-pki-message": {
    "source": "iana"
  },
  "application/x-rar-compressed": {
    "source": "apache",
    "compressible": false,
    "extensions": ["rar"]
  },
  "application/x-redhat-package-manager": {
    "source": "nginx",
    "extensions": ["rpm"]
  },
  "application/x-research-info-systems": {
    "source": "apache",
    "extensions": ["ris"]
  },
  "application/x-sea": {
    "source": "nginx",
    "extensions": ["sea"]
  },
  "application/x-sh": {
    "source": "apache",
    "compressible": true,
    "extensions": ["sh"]
  },
  "application/x-shar": {
    "source": "apache",
    "extensions": ["shar"]
  },
  "application/x-shockwave-flash": {
    "source": "apache",
    "compressible": false,
    "extensions": ["swf"]
  },
  "application/x-silverlight-app": {
    "source": "apache",
    "extensions": ["xap"]
  },
  "application/x-sql": {
    "source": "apache",
    "extensions": ["sql"]
  },
  "application/x-stuffit": {
    "source": "apache",
    "compressible": false,
    "extensions": ["sit"]
  },
  "application/x-stuffitx": {
    "source": "apache",
    "extensions": ["sitx"]
  },
  "application/x-subrip": {
    "source": "apache",
    "extensions": ["srt"]
  },
  "application/x-sv4cpio": {
    "source": "apache",
    "extensions": ["sv4cpio"]
  },
  "application/x-sv4crc": {
    "source": "apache",
    "extensions": ["sv4crc"]
  },
  "application/x-t3vm-image": {
    "source": "apache",
    "extensions": ["t3"]
  },
  "application/x-tads": {
    "source": "apache",
    "extensions": ["gam"]
  },
  "application/x-tar": {
    "source": "apache",
    "compressible": true,
    "extensions": ["tar"]
  },
  "application/x-tcl": {
    "source": "apache",
    "extensions": ["tcl","tk"]
  },
  "application/x-tex": {
    "source": "apache",
    "extensions": ["tex"]
  },
  "application/x-tex-tfm": {
    "source": "apache",
    "extensions": ["tfm"]
  },
  "application/x-texinfo": {
    "source": "apache",
    "extensions": ["texinfo","texi"]
  },
  "application/x-tgif": {
    "source": "apache",
    "extensions": ["obj"]
  },
  "application/x-ustar": {
    "source": "apache",
    "extensions": ["ustar"]
  },
  "application/x-virtualbox-hdd": {
    "compressible": true,
    "extensions": ["hdd"]
  },
  "application/x-virtualbox-ova": {
    "compressible": true,
    "extensions": ["ova"]
  },
  "application/x-virtualbox-ovf": {
    "compressible": true,
    "extensions": ["ovf"]
  },
  "application/x-virtualbox-vbox": {
    "compressible": true,
    "extensions": ["vbox"]
  },
  "application/x-virtualbox-vbox-extpack": {
    "compressible": false,
    "extensions": ["vbox-extpack"]
  },
  "application/x-virtualbox-vdi": {
    "compressible": true,
    "extensions": ["vdi"]
  },
  "application/x-virtualbox-vhd": {
    "compressible": true,
    "extensions": ["vhd"]
  },
  "application/x-virtualbox-vmdk": {
    "compressible": true,
    "extensions": ["vmdk"]
  },
  "application/x-wais-source": {
    "source": "apache",
    "extensions": ["src"]
  },
  "application/x-web-app-manifest+json": {
    "compressible": true,
    "extensions": ["webapp"]
  },
  "application/x-www-form-urlencoded": {
    "source": "iana",
    "compressible": true
  },
  "application/x-x509-ca-cert": {
    "source": "iana",
    "extensions": ["der","crt","pem"]
  },
  "application/x-x509-ca-ra-cert": {
    "source": "iana"
  },
  "application/x-x509-next-ca-cert": {
    "source": "iana"
  },
  "application/x-xfig": {
    "source": "apache",
    "extensions": ["fig"]
  },
  "application/x-xliff+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xlf"]
  },
  "application/x-xpinstall": {
    "source": "apache",
    "compressible": false,
    "extensions": ["xpi"]
  },
  "application/x-xz": {
    "source": "apache",
    "extensions": ["xz"]
  },
  "application/x-zmachine": {
    "source": "apache",
    "extensions": ["z1","z2","z3","z4","z5","z6","z7","z8"]
  },
  "application/x400-bp": {
    "source": "iana"
  },
  "application/xacml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xaml+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xaml"]
  },
  "application/xcap-att+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xav"]
  },
  "application/xcap-caps+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xca"]
  },
  "application/xcap-diff+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xdf"]
  },
  "application/xcap-el+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xel"]
  },
  "application/xcap-error+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xcap-ns+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xns"]
  },
  "application/xcon-conference-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xcon-conference-info-diff+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xenc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xenc"]
  },
  "application/xhtml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xhtml","xht"]
  },
  "application/xhtml-voice+xml": {
    "source": "apache",
    "compressible": true
  },
  "application/xliff+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xlf"]
  },
  "application/xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xml","xsl","xsd","rng"]
  },
  "application/xml-dtd": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dtd"]
  },
  "application/xml-external-parsed-entity": {
    "source": "iana"
  },
  "application/xml-patch+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xmpp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xop+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xop"]
  },
  "application/xproc+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xpl"]
  },
  "application/xslt+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xsl","xslt"]
  },
  "application/xspf+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xspf"]
  },
  "application/xv+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mxml","xhvml","xvml","xvm"]
  },
  "application/yang": {
    "source": "iana",
    "extensions": ["yang"]
  },
  "application/yang-data+json": {
    "source": "iana",
    "compressible": true
  },
  "application/yang-data+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/yang-patch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/yang-patch+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/yin+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["yin"]
  },
  "application/zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["zip"]
  },
  "application/zlib": {
    "source": "iana"
  },
  "application/zstd": {
    "source": "iana"
  },
  "audio/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "audio/32kadpcm": {
    "source": "iana"
  },
  "audio/3gpp": {
    "source": "iana",
    "compressible": false,
    "extensions": ["3gpp"]
  },
  "audio/3gpp2": {
    "source": "iana"
  },
  "audio/aac": {
    "source": "iana"
  },
  "audio/ac3": {
    "source": "iana"
  },
  "audio/adpcm": {
    "source": "apache",
    "extensions": ["adp"]
  },
  "audio/amr": {
    "source": "iana",
    "extensions": ["amr"]
  },
  "audio/amr-wb": {
    "source": "iana"
  },
  "audio/amr-wb+": {
    "source": "iana"
  },
  "audio/aptx": {
    "source": "iana"
  },
  "audio/asc": {
    "source": "iana"
  },
  "audio/atrac-advanced-lossless": {
    "source": "iana"
  },
  "audio/atrac-x": {
    "source": "iana"
  },
  "audio/atrac3": {
    "source": "iana"
  },
  "audio/basic": {
    "source": "iana",
    "compressible": false,
    "extensions": ["au","snd"]
  },
  "audio/bv16": {
    "source": "iana"
  },
  "audio/bv32": {
    "source": "iana"
  },
  "audio/clearmode": {
    "source": "iana"
  },
  "audio/cn": {
    "source": "iana"
  },
  "audio/dat12": {
    "source": "iana"
  },
  "audio/dls": {
    "source": "iana"
  },
  "audio/dsr-es201108": {
    "source": "iana"
  },
  "audio/dsr-es202050": {
    "source": "iana"
  },
  "audio/dsr-es202211": {
    "source": "iana"
  },
  "audio/dsr-es202212": {
    "source": "iana"
  },
  "audio/dv": {
    "source": "iana"
  },
  "audio/dvi4": {
    "source": "iana"
  },
  "audio/eac3": {
    "source": "iana"
  },
  "audio/encaprtp": {
    "source": "iana"
  },
  "audio/evrc": {
    "source": "iana"
  },
  "audio/evrc-qcp": {
    "source": "iana"
  },
  "audio/evrc0": {
    "source": "iana"
  },
  "audio/evrc1": {
    "source": "iana"
  },
  "audio/evrcb": {
    "source": "iana"
  },
  "audio/evrcb0": {
    "source": "iana"
  },
  "audio/evrcb1": {
    "source": "iana"
  },
  "audio/evrcnw": {
    "source": "iana"
  },
  "audio/evrcnw0": {
    "source": "iana"
  },
  "audio/evrcnw1": {
    "source": "iana"
  },
  "audio/evrcwb": {
    "source": "iana"
  },
  "audio/evrcwb0": {
    "source": "iana"
  },
  "audio/evrcwb1": {
    "source": "iana"
  },
  "audio/evs": {
    "source": "iana"
  },
  "audio/flexfec": {
    "source": "iana"
  },
  "audio/fwdred": {
    "source": "iana"
  },
  "audio/g711-0": {
    "source": "iana"
  },
  "audio/g719": {
    "source": "iana"
  },
  "audio/g722": {
    "source": "iana"
  },
  "audio/g7221": {
    "source": "iana"
  },
  "audio/g723": {
    "source": "iana"
  },
  "audio/g726-16": {
    "source": "iana"
  },
  "audio/g726-24": {
    "source": "iana"
  },
  "audio/g726-32": {
    "source": "iana"
  },
  "audio/g726-40": {
    "source": "iana"
  },
  "audio/g728": {
    "source": "iana"
  },
  "audio/g729": {
    "source": "iana"
  },
  "audio/g7291": {
    "source": "iana"
  },
  "audio/g729d": {
    "source": "iana"
  },
  "audio/g729e": {
    "source": "iana"
  },
  "audio/gsm": {
    "source": "iana"
  },
  "audio/gsm-efr": {
    "source": "iana"
  },
  "audio/gsm-hr-08": {
    "source": "iana"
  },
  "audio/ilbc": {
    "source": "iana"
  },
  "audio/ip-mr_v2.5": {
    "source": "iana"
  },
  "audio/isac": {
    "source": "apache"
  },
  "audio/l16": {
    "source": "iana"
  },
  "audio/l20": {
    "source": "iana"
  },
  "audio/l24": {
    "source": "iana",
    "compressible": false
  },
  "audio/l8": {
    "source": "iana"
  },
  "audio/lpc": {
    "source": "iana"
  },
  "audio/melp": {
    "source": "iana"
  },
  "audio/melp1200": {
    "source": "iana"
  },
  "audio/melp2400": {
    "source": "iana"
  },
  "audio/melp600": {
    "source": "iana"
  },
  "audio/mhas": {
    "source": "iana"
  },
  "audio/midi": {
    "source": "apache",
    "extensions": ["mid","midi","kar","rmi"]
  },
  "audio/mobile-xmf": {
    "source": "iana",
    "extensions": ["mxmf"]
  },
  "audio/mp3": {
    "compressible": false,
    "extensions": ["mp3"]
  },
  "audio/mp4": {
    "source": "iana",
    "compressible": false,
    "extensions": ["m4a","mp4a"]
  },
  "audio/mp4a-latm": {
    "source": "iana"
  },
  "audio/mpa": {
    "source": "iana"
  },
  "audio/mpa-robust": {
    "source": "iana"
  },
  "audio/mpeg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["mpga","mp2","mp2a","mp3","m2a","m3a"]
  },
  "audio/mpeg4-generic": {
    "source": "iana"
  },
  "audio/musepack": {
    "source": "apache"
  },
  "audio/ogg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["oga","ogg","spx","opus"]
  },
  "audio/opus": {
    "source": "iana"
  },
  "audio/parityfec": {
    "source": "iana"
  },
  "audio/pcma": {
    "source": "iana"
  },
  "audio/pcma-wb": {
    "source": "iana"
  },
  "audio/pcmu": {
    "source": "iana"
  },
  "audio/pcmu-wb": {
    "source": "iana"
  },
  "audio/prs.sid": {
    "source": "iana"
  },
  "audio/qcelp": {
    "source": "iana"
  },
  "audio/raptorfec": {
    "source": "iana"
  },
  "audio/red": {
    "source": "iana"
  },
  "audio/rtp-enc-aescm128": {
    "source": "iana"
  },
  "audio/rtp-midi": {
    "source": "iana"
  },
  "audio/rtploopback": {
    "source": "iana"
  },
  "audio/rtx": {
    "source": "iana"
  },
  "audio/s3m": {
    "source": "apache",
    "extensions": ["s3m"]
  },
  "audio/scip": {
    "source": "iana"
  },
  "audio/silk": {
    "source": "apache",
    "extensions": ["sil"]
  },
  "audio/smv": {
    "source": "iana"
  },
  "audio/smv-qcp": {
    "source": "iana"
  },
  "audio/smv0": {
    "source": "iana"
  },
  "audio/sofa": {
    "source": "iana"
  },
  "audio/sp-midi": {
    "source": "iana"
  },
  "audio/speex": {
    "source": "iana"
  },
  "audio/t140c": {
    "source": "iana"
  },
  "audio/t38": {
    "source": "iana"
  },
  "audio/telephone-event": {
    "source": "iana"
  },
  "audio/tetra_acelp": {
    "source": "iana"
  },
  "audio/tetra_acelp_bb": {
    "source": "iana"
  },
  "audio/tone": {
    "source": "iana"
  },
  "audio/tsvcis": {
    "source": "iana"
  },
  "audio/uemclip": {
    "source": "iana"
  },
  "audio/ulpfec": {
    "source": "iana"
  },
  "audio/usac": {
    "source": "iana"
  },
  "audio/vdvi": {
    "source": "iana"
  },
  "audio/vmr-wb": {
    "source": "iana"
  },
  "audio/vnd.3gpp.iufp": {
    "source": "iana"
  },
  "audio/vnd.4sb": {
    "source": "iana"
  },
  "audio/vnd.audiokoz": {
    "source": "iana"
  },
  "audio/vnd.celp": {
    "source": "iana"
  },
  "audio/vnd.cisco.nse": {
    "source": "iana"
  },
  "audio/vnd.cmles.radio-events": {
    "source": "iana"
  },
  "audio/vnd.cns.anp1": {
    "source": "iana"
  },
  "audio/vnd.cns.inf1": {
    "source": "iana"
  },
  "audio/vnd.dece.audio": {
    "source": "iana",
    "extensions": ["uva","uvva"]
  },
  "audio/vnd.digital-winds": {
    "source": "iana",
    "extensions": ["eol"]
  },
  "audio/vnd.dlna.adts": {
    "source": "iana"
  },
  "audio/vnd.dolby.heaac.1": {
    "source": "iana"
  },
  "audio/vnd.dolby.heaac.2": {
    "source": "iana"
  },
  "audio/vnd.dolby.mlp": {
    "source": "iana"
  },
  "audio/vnd.dolby.mps": {
    "source": "iana"
  },
  "audio/vnd.dolby.pl2": {
    "source": "iana"
  },
  "audio/vnd.dolby.pl2x": {
    "source": "iana"
  },
  "audio/vnd.dolby.pl2z": {
    "source": "iana"
  },
  "audio/vnd.dolby.pulse.1": {
    "source": "iana"
  },
  "audio/vnd.dra": {
    "source": "iana",
    "extensions": ["dra"]
  },
  "audio/vnd.dts": {
    "source": "iana",
    "extensions": ["dts"]
  },
  "audio/vnd.dts.hd": {
    "source": "iana",
    "extensions": ["dtshd"]
  },
  "audio/vnd.dts.uhd": {
    "source": "iana"
  },
  "audio/vnd.dvb.file": {
    "source": "iana"
  },
  "audio/vnd.everad.plj": {
    "source": "iana"
  },
  "audio/vnd.hns.audio": {
    "source": "iana"
  },
  "audio/vnd.lucent.voice": {
    "source": "iana",
    "extensions": ["lvp"]
  },
  "audio/vnd.ms-playready.media.pya": {
    "source": "iana",
    "extensions": ["pya"]
  },
  "audio/vnd.nokia.mobile-xmf": {
    "source": "iana"
  },
  "audio/vnd.nortel.vbk": {
    "source": "iana"
  },
  "audio/vnd.nuera.ecelp4800": {
    "source": "iana",
    "extensions": ["ecelp4800"]
  },
  "audio/vnd.nuera.ecelp7470": {
    "source": "iana",
    "extensions": ["ecelp7470"]
  },
  "audio/vnd.nuera.ecelp9600": {
    "source": "iana",
    "extensions": ["ecelp9600"]
  },
  "audio/vnd.octel.sbc": {
    "source": "iana"
  },
  "audio/vnd.presonus.multitrack": {
    "source": "iana"
  },
  "audio/vnd.qcelp": {
    "source": "iana"
  },
  "audio/vnd.rhetorex.32kadpcm": {
    "source": "iana"
  },
  "audio/vnd.rip": {
    "source": "iana",
    "extensions": ["rip"]
  },
  "audio/vnd.rn-realaudio": {
    "compressible": false
  },
  "audio/vnd.sealedmedia.softseal.mpeg": {
    "source": "iana"
  },
  "audio/vnd.vmx.cvsd": {
    "source": "iana"
  },
  "audio/vnd.wave": {
    "compressible": false
  },
  "audio/vorbis": {
    "source": "iana",
    "compressible": false
  },
  "audio/vorbis-config": {
    "source": "iana"
  },
  "audio/wav": {
    "compressible": false,
    "extensions": ["wav"]
  },
  "audio/wave": {
    "compressible": false,
    "extensions": ["wav"]
  },
  "audio/webm": {
    "source": "apache",
    "compressible": false,
    "extensions": ["weba"]
  },
  "audio/x-aac": {
    "source": "apache",
    "compressible": false,
    "extensions": ["aac"]
  },
  "audio/x-aiff": {
    "source": "apache",
    "extensions": ["aif","aiff","aifc"]
  },
  "audio/x-caf": {
    "source": "apache",
    "compressible": false,
    "extensions": ["caf"]
  },
  "audio/x-flac": {
    "source": "apache",
    "extensions": ["flac"]
  },
  "audio/x-m4a": {
    "source": "nginx",
    "extensions": ["m4a"]
  },
  "audio/x-matroska": {
    "source": "apache",
    "extensions": ["mka"]
  },
  "audio/x-mpegurl": {
    "source": "apache",
    "extensions": ["m3u"]
  },
  "audio/x-ms-wax": {
    "source": "apache",
    "extensions": ["wax"]
  },
  "audio/x-ms-wma": {
    "source": "apache",
    "extensions": ["wma"]
  },
  "audio/x-pn-realaudio": {
    "source": "apache",
    "extensions": ["ram","ra"]
  },
  "audio/x-pn-realaudio-plugin": {
    "source": "apache",
    "extensions": ["rmp"]
  },
  "audio/x-realaudio": {
    "source": "nginx",
    "extensions": ["ra"]
  },
  "audio/x-tta": {
    "source": "apache"
  },
  "audio/x-wav": {
    "source": "apache",
    "extensions": ["wav"]
  },
  "audio/xm": {
    "source": "apache",
    "extensions": ["xm"]
  },
  "chemical/x-cdx": {
    "source": "apache",
    "extensions": ["cdx"]
  },
  "chemical/x-cif": {
    "source": "apache",
    "extensions": ["cif"]
  },
  "chemical/x-cmdf": {
    "source": "apache",
    "extensions": ["cmdf"]
  },
  "chemical/x-cml": {
    "source": "apache",
    "extensions": ["cml"]
  },
  "chemical/x-csml": {
    "source": "apache",
    "extensions": ["csml"]
  },
  "chemical/x-pdb": {
    "source": "apache"
  },
  "chemical/x-xyz": {
    "source": "apache",
    "extensions": ["xyz"]
  },
  "font/collection": {
    "source": "iana",
    "extensions": ["ttc"]
  },
  "font/otf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["otf"]
  },
  "font/sfnt": {
    "source": "iana"
  },
  "font/ttf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ttf"]
  },
  "font/woff": {
    "source": "iana",
    "extensions": ["woff"]
  },
  "font/woff2": {
    "source": "iana",
    "extensions": ["woff2"]
  },
  "image/aces": {
    "source": "iana",
    "extensions": ["exr"]
  },
  "image/apng": {
    "compressible": false,
    "extensions": ["apng"]
  },
  "image/avci": {
    "source": "iana"
  },
  "image/avcs": {
    "source": "iana"
  },
  "image/avif": {
    "source": "iana",
    "compressible": false,
    "extensions": ["avif"]
  },
  "image/bmp": {
    "source": "iana",
    "compressible": true,
    "extensions": ["bmp"]
  },
  "image/cgm": {
    "source": "iana",
    "extensions": ["cgm"]
  },
  "image/dicom-rle": {
    "source": "iana",
    "extensions": ["drle"]
  },
  "image/emf": {
    "source": "iana",
    "extensions": ["emf"]
  },
  "image/fits": {
    "source": "iana",
    "extensions": ["fits"]
  },
  "image/g3fax": {
    "source": "iana",
    "extensions": ["g3"]
  },
  "image/gif": {
    "source": "iana",
    "compressible": false,
    "extensions": ["gif"]
  },
  "image/heic": {
    "source": "iana",
    "extensions": ["heic"]
  },
  "image/heic-sequence": {
    "source": "iana",
    "extensions": ["heics"]
  },
  "image/heif": {
    "source": "iana",
    "extensions": ["heif"]
  },
  "image/heif-sequence": {
    "source": "iana",
    "extensions": ["heifs"]
  },
  "image/hej2k": {
    "source": "iana",
    "extensions": ["hej2"]
  },
  "image/hsj2": {
    "source": "iana",
    "extensions": ["hsj2"]
  },
  "image/ief": {
    "source": "iana",
    "extensions": ["ief"]
  },
  "image/jls": {
    "source": "iana",
    "extensions": ["jls"]
  },
  "image/jp2": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jp2","jpg2"]
  },
  "image/jpeg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jpeg","jpg","jpe"]
  },
  "image/jph": {
    "source": "iana",
    "extensions": ["jph"]
  },
  "image/jphc": {
    "source": "iana",
    "extensions": ["jhc"]
  },
  "image/jpm": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jpm"]
  },
  "image/jpx": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jpx","jpf"]
  },
  "image/jxr": {
    "source": "iana",
    "extensions": ["jxr"]
  },
  "image/jxra": {
    "source": "iana",
    "extensions": ["jxra"]
  },
  "image/jxrs": {
    "source": "iana",
    "extensions": ["jxrs"]
  },
  "image/jxs": {
    "source": "iana",
    "extensions": ["jxs"]
  },
  "image/jxsc": {
    "source": "iana",
    "extensions": ["jxsc"]
  },
  "image/jxsi": {
    "source": "iana",
    "extensions": ["jxsi"]
  },
  "image/jxss": {
    "source": "iana",
    "extensions": ["jxss"]
  },
  "image/ktx": {
    "source": "iana",
    "extensions": ["ktx"]
  },
  "image/ktx2": {
    "source": "iana",
    "extensions": ["ktx2"]
  },
  "image/naplps": {
    "source": "iana"
  },
  "image/pjpeg": {
    "compressible": false
  },
  "image/png": {
    "source": "iana",
    "compressible": false,
    "extensions": ["png"]
  },
  "image/prs.btif": {
    "source": "iana",
    "extensions": ["btif"]
  },
  "image/prs.pti": {
    "source": "iana",
    "extensions": ["pti"]
  },
  "image/pwg-raster": {
    "source": "iana"
  },
  "image/sgi": {
    "source": "apache",
    "extensions": ["sgi"]
  },
  "image/svg+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["svg","svgz"]
  },
  "image/t38": {
    "source": "iana",
    "extensions": ["t38"]
  },
  "image/tiff": {
    "source": "iana",
    "compressible": false,
    "extensions": ["tif","tiff"]
  },
  "image/tiff-fx": {
    "source": "iana",
    "extensions": ["tfx"]
  },
  "image/vnd.adobe.photoshop": {
    "source": "iana",
    "compressible": true,
    "extensions": ["psd"]
  },
  "image/vnd.airzip.accelerator.azv": {
    "source": "iana",
    "extensions": ["azv"]
  },
  "image/vnd.cns.inf2": {
    "source": "iana"
  },
  "image/vnd.dece.graphic": {
    "source": "iana",
    "extensions": ["uvi","uvvi","uvg","uvvg"]
  },
  "image/vnd.djvu": {
    "source": "iana",
    "extensions": ["djvu","djv"]
  },
  "image/vnd.dvb.subtitle": {
    "source": "iana",
    "extensions": ["sub"]
  },
  "image/vnd.dwg": {
    "source": "iana",
    "extensions": ["dwg"]
  },
  "image/vnd.dxf": {
    "source": "iana",
    "extensions": ["dxf"]
  },
  "image/vnd.fastbidsheet": {
    "source": "iana",
    "extensions": ["fbs"]
  },
  "image/vnd.fpx": {
    "source": "iana",
    "extensions": ["fpx"]
  },
  "image/vnd.fst": {
    "source": "iana",
    "extensions": ["fst"]
  },
  "image/vnd.fujixerox.edmics-mmr": {
    "source": "iana",
    "extensions": ["mmr"]
  },
  "image/vnd.fujixerox.edmics-rlc": {
    "source": "iana",
    "extensions": ["rlc"]
  },
  "image/vnd.globalgraphics.pgb": {
    "source": "iana"
  },
  "image/vnd.microsoft.icon": {
    "source": "iana",
    "extensions": ["ico"]
  },
  "image/vnd.mix": {
    "source": "iana"
  },
  "image/vnd.mozilla.apng": {
    "source": "iana"
  },
  "image/vnd.ms-dds": {
    "extensions": ["dds"]
  },
  "image/vnd.ms-modi": {
    "source": "iana",
    "extensions": ["mdi"]
  },
  "image/vnd.ms-photo": {
    "source": "apache",
    "extensions": ["wdp"]
  },
  "image/vnd.net-fpx": {
    "source": "iana",
    "extensions": ["npx"]
  },
  "image/vnd.pco.b16": {
    "source": "iana",
    "extensions": ["b16"]
  },
  "image/vnd.radiance": {
    "source": "iana"
  },
  "image/vnd.sealed.png": {
    "source": "iana"
  },
  "image/vnd.sealedmedia.softseal.gif": {
    "source": "iana"
  },
  "image/vnd.sealedmedia.softseal.jpg": {
    "source": "iana"
  },
  "image/vnd.svf": {
    "source": "iana"
  },
  "image/vnd.tencent.tap": {
    "source": "iana",
    "extensions": ["tap"]
  },
  "image/vnd.valve.source.texture": {
    "source": "iana",
    "extensions": ["vtf"]
  },
  "image/vnd.wap.wbmp": {
    "source": "iana",
    "extensions": ["wbmp"]
  },
  "image/vnd.xiff": {
    "source": "iana",
    "extensions": ["xif"]
  },
  "image/vnd.zbrush.pcx": {
    "source": "iana",
    "extensions": ["pcx"]
  },
  "image/webp": {
    "source": "apache",
    "extensions": ["webp"]
  },
  "image/wmf": {
    "source": "iana",
    "extensions": ["wmf"]
  },
  "image/x-3ds": {
    "source": "apache",
    "extensions": ["3ds"]
  },
  "image/x-cmu-raster": {
    "source": "apache",
    "extensions": ["ras"]
  },
  "image/x-cmx": {
    "source": "apache",
    "extensions": ["cmx"]
  },
  "image/x-freehand": {
    "source": "apache",
    "extensions": ["fh","fhc","fh4","fh5","fh7"]
  },
  "image/x-icon": {
    "source": "apache",
    "compressible": true,
    "extensions": ["ico"]
  },
  "image/x-jng": {
    "source": "nginx",
    "extensions": ["jng"]
  },
  "image/x-mrsid-image": {
    "source": "apache",
    "extensions": ["sid"]
  },
  "image/x-ms-bmp": {
    "source": "nginx",
    "compressible": true,
    "extensions": ["bmp"]
  },
  "image/x-pcx": {
    "source": "apache",
    "extensions": ["pcx"]
  },
  "image/x-pict": {
    "source": "apache",
    "extensions": ["pic","pct"]
  },
  "image/x-portable-anymap": {
    "source": "apache",
    "extensions": ["pnm"]
  },
  "image/x-portable-bitmap": {
    "source": "apache",
    "extensions": ["pbm"]
  },
  "image/x-portable-graymap": {
    "source": "apache",
    "extensions": ["pgm"]
  },
  "image/x-portable-pixmap": {
    "source": "apache",
    "extensions": ["ppm"]
  },
  "image/x-rgb": {
    "source": "apache",
    "extensions": ["rgb"]
  },
  "image/x-tga": {
    "source": "apache",
    "extensions": ["tga"]
  },
  "image/x-xbitmap": {
    "source": "apache",
    "extensions": ["xbm"]
  },
  "image/x-xcf": {
    "compressible": false
  },
  "image/x-xpixmap": {
    "source": "apache",
    "extensions": ["xpm"]
  },
  "image/x-xwindowdump": {
    "source": "apache",
    "extensions": ["xwd"]
  },
  "message/cpim": {
    "source": "iana"
  },
  "message/delivery-status": {
    "source": "iana"
  },
  "message/disposition-notification": {
    "source": "iana",
    "extensions": [
      "disposition-notification"
    ]
  },
  "message/external-body": {
    "source": "iana"
  },
  "message/feedback-report": {
    "source": "iana"
  },
  "message/global": {
    "source": "iana",
    "extensions": ["u8msg"]
  },
  "message/global-delivery-status": {
    "source": "iana",
    "extensions": ["u8dsn"]
  },
  "message/global-disposition-notification": {
    "source": "iana",
    "extensions": ["u8mdn"]
  },
  "message/global-headers": {
    "source": "iana",
    "extensions": ["u8hdr"]
  },
  "message/http": {
    "source": "iana",
    "compressible": false
  },
  "message/imdn+xml": {
    "source": "iana",
    "compressible": true
  },
  "message/news": {
    "source": "iana"
  },
  "message/partial": {
    "source": "iana",
    "compressible": false
  },
  "message/rfc822": {
    "source": "iana",
    "compressible": true,
    "extensions": ["eml","mime"]
  },
  "message/s-http": {
    "source": "iana"
  },
  "message/sip": {
    "source": "iana"
  },
  "message/sipfrag": {
    "source": "iana"
  },
  "message/tracking-status": {
    "source": "iana"
  },
  "message/vnd.si.simp": {
    "source": "iana"
  },
  "message/vnd.wfa.wsc": {
    "source": "iana",
    "extensions": ["wsc"]
  },
  "model/3mf": {
    "source": "iana",
    "extensions": ["3mf"]
  },
  "model/e57": {
    "source": "iana"
  },
  "model/gltf+json": {
    "source": "iana",
    "compressible": true,
    "extensions": ["gltf"]
  },
  "model/gltf-binary": {
    "source": "iana",
    "compressible": true,
    "extensions": ["glb"]
  },
  "model/iges": {
    "source": "iana",
    "compressible": false,
    "extensions": ["igs","iges"]
  },
  "model/mesh": {
    "source": "iana",
    "compressible": false,
    "extensions": ["msh","mesh","silo"]
  },
  "model/mtl": {
    "source": "iana",
    "extensions": ["mtl"]
  },
  "model/obj": {
    "source": "iana",
    "extensions": ["obj"]
  },
  "model/step+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["stpz"]
  },
  "model/step-xml+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["stpxz"]
  },
  "model/stl": {
    "source": "iana",
    "extensions": ["stl"]
  },
  "model/vnd.collada+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dae"]
  },
  "model/vnd.dwf": {
    "source": "iana",
    "extensions": ["dwf"]
  },
  "model/vnd.flatland.3dml": {
    "source": "iana"
  },
  "model/vnd.gdl": {
    "source": "iana",
    "extensions": ["gdl"]
  },
  "model/vnd.gs-gdl": {
    "source": "apache"
  },
  "model/vnd.gs.gdl": {
    "source": "iana"
  },
  "model/vnd.gtw": {
    "source": "iana",
    "extensions": ["gtw"]
  },
  "model/vnd.moml+xml": {
    "source": "iana",
    "compressible": true
  },
  "model/vnd.mts": {
    "source": "iana",
    "extensions": ["mts"]
  },
  "model/vnd.opengex": {
    "source": "iana",
    "extensions": ["ogex"]
  },
  "model/vnd.parasolid.transmit.binary": {
    "source": "iana",
    "extensions": ["x_b"]
  },
  "model/vnd.parasolid.transmit.text": {
    "source": "iana",
    "extensions": ["x_t"]
  },
  "model/vnd.pytha.pyox": {
    "source": "iana"
  },
  "model/vnd.rosette.annotated-data-model": {
    "source": "iana"
  },
  "model/vnd.sap.vds": {
    "source": "iana",
    "extensions": ["vds"]
  },
  "model/vnd.usdz+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["usdz"]
  },
  "model/vnd.valve.source.compiled-map": {
    "source": "iana",
    "extensions": ["bsp"]
  },
  "model/vnd.vtu": {
    "source": "iana",
    "extensions": ["vtu"]
  },
  "model/vrml": {
    "source": "iana",
    "compressible": false,
    "extensions": ["wrl","vrml"]
  },
  "model/x3d+binary": {
    "source": "apache",
    "compressible": false,
    "extensions": ["x3db","x3dbz"]
  },
  "model/x3d+fastinfoset": {
    "source": "iana",
    "extensions": ["x3db"]
  },
  "model/x3d+vrml": {
    "source": "apache",
    "compressible": false,
    "extensions": ["x3dv","x3dvz"]
  },
  "model/x3d+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["x3d","x3dz"]
  },
  "model/x3d-vrml": {
    "source": "iana",
    "extensions": ["x3dv"]
  },
  "multipart/alternative": {
    "source": "iana",
    "compressible": false
  },
  "multipart/appledouble": {
    "source": "iana"
  },
  "multipart/byteranges": {
    "source": "iana"
  },
  "multipart/digest": {
    "source": "iana"
  },
  "multipart/encrypted": {
    "source": "iana",
    "compressible": false
  },
  "multipart/form-data": {
    "source": "iana",
    "compressible": false
  },
  "multipart/header-set": {
    "source": "iana"
  },
  "multipart/mixed": {
    "source": "iana"
  },
  "multipart/multilingual": {
    "source": "iana"
  },
  "multipart/parallel": {
    "source": "iana"
  },
  "multipart/related": {
    "source": "iana",
    "compressible": false
  },
  "multipart/report": {
    "source": "iana"
  },
  "multipart/signed": {
    "source": "iana",
    "compressible": false
  },
  "multipart/vnd.bint.med-plus": {
    "source": "iana"
  },
  "multipart/voice-message": {
    "source": "iana"
  },
  "multipart/x-mixed-replace": {
    "source": "iana"
  },
  "text/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "text/cache-manifest": {
    "source": "iana",
    "compressible": true,
    "extensions": ["appcache","manifest"]
  },
  "text/calendar": {
    "source": "iana",
    "extensions": ["ics","ifb"]
  },
  "text/calender": {
    "compressible": true
  },
  "text/cmd": {
    "compressible": true
  },
  "text/coffeescript": {
    "extensions": ["coffee","litcoffee"]
  },
  "text/cql": {
    "source": "iana"
  },
  "text/cql-expression": {
    "source": "iana"
  },
  "text/cql-identifier": {
    "source": "iana"
  },
  "text/css": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["css"]
  },
  "text/csv": {
    "source": "iana",
    "compressible": true,
    "extensions": ["csv"]
  },
  "text/csv-schema": {
    "source": "iana"
  },
  "text/directory": {
    "source": "iana"
  },
  "text/dns": {
    "source": "iana"
  },
  "text/ecmascript": {
    "source": "iana"
  },
  "text/encaprtp": {
    "source": "iana"
  },
  "text/enriched": {
    "source": "iana"
  },
  "text/fhirpath": {
    "source": "iana"
  },
  "text/flexfec": {
    "source": "iana"
  },
  "text/fwdred": {
    "source": "iana"
  },
  "text/gff3": {
    "source": "iana"
  },
  "text/grammar-ref-list": {
    "source": "iana"
  },
  "text/html": {
    "source": "iana",
    "compressible": true,
    "extensions": ["html","htm","shtml"]
  },
  "text/jade": {
    "extensions": ["jade"]
  },
  "text/javascript": {
    "source": "iana",
    "compressible": true
  },
  "text/jcr-cnd": {
    "source": "iana"
  },
  "text/jsx": {
    "compressible": true,
    "extensions": ["jsx"]
  },
  "text/less": {
    "compressible": true,
    "extensions": ["less"]
  },
  "text/markdown": {
    "source": "iana",
    "compressible": true,
    "extensions": ["markdown","md"]
  },
  "text/mathml": {
    "source": "nginx",
    "extensions": ["mml"]
  },
  "text/mdx": {
    "compressible": true,
    "extensions": ["mdx"]
  },
  "text/mizar": {
    "source": "iana"
  },
  "text/n3": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["n3"]
  },
  "text/parameters": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/parityfec": {
    "source": "iana"
  },
  "text/plain": {
    "source": "iana",
    "compressible": true,
    "extensions": ["txt","text","conf","def","list","log","in","ini"]
  },
  "text/provenance-notation": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/prs.fallenstein.rst": {
    "source": "iana"
  },
  "text/prs.lines.tag": {
    "source": "iana",
    "extensions": ["dsc"]
  },
  "text/prs.prop.logic": {
    "source": "iana"
  },
  "text/raptorfec": {
    "source": "iana"
  },
  "text/red": {
    "source": "iana"
  },
  "text/rfc822-headers": {
    "source": "iana"
  },
  "text/richtext": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rtx"]
  },
  "text/rtf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rtf"]
  },
  "text/rtp-enc-aescm128": {
    "source": "iana"
  },
  "text/rtploopback": {
    "source": "iana"
  },
  "text/rtx": {
    "source": "iana"
  },
  "text/sgml": {
    "source": "iana",
    "extensions": ["sgml","sgm"]
  },
  "text/shaclc": {
    "source": "iana"
  },
  "text/shex": {
    "source": "iana",
    "extensions": ["shex"]
  },
  "text/slim": {
    "extensions": ["slim","slm"]
  },
  "text/spdx": {
    "source": "iana",
    "extensions": ["spdx"]
  },
  "text/strings": {
    "source": "iana"
  },
  "text/stylus": {
    "extensions": ["stylus","styl"]
  },
  "text/t140": {
    "source": "iana"
  },
  "text/tab-separated-values": {
    "source": "iana",
    "compressible": true,
    "extensions": ["tsv"]
  },
  "text/troff": {
    "source": "iana",
    "extensions": ["t","tr","roff","man","me","ms"]
  },
  "text/turtle": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["ttl"]
  },
  "text/ulpfec": {
    "source": "iana"
  },
  "text/uri-list": {
    "source": "iana",
    "compressible": true,
    "extensions": ["uri","uris","urls"]
  },
  "text/vcard": {
    "source": "iana",
    "compressible": true,
    "extensions": ["vcard"]
  },
  "text/vnd.a": {
    "source": "iana"
  },
  "text/vnd.abc": {
    "source": "iana"
  },
  "text/vnd.ascii-art": {
    "source": "iana"
  },
  "text/vnd.curl": {
    "source": "iana",
    "extensions": ["curl"]
  },
  "text/vnd.curl.dcurl": {
    "source": "apache",
    "extensions": ["dcurl"]
  },
  "text/vnd.curl.mcurl": {
    "source": "apache",
    "extensions": ["mcurl"]
  },
  "text/vnd.curl.scurl": {
    "source": "apache",
    "extensions": ["scurl"]
  },
  "text/vnd.debian.copyright": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/vnd.dmclientscript": {
    "source": "iana"
  },
  "text/vnd.dvb.subtitle": {
    "source": "iana",
    "extensions": ["sub"]
  },
  "text/vnd.esmertec.theme-descriptor": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/vnd.ficlab.flt": {
    "source": "iana"
  },
  "text/vnd.fly": {
    "source": "iana",
    "extensions": ["fly"]
  },
  "text/vnd.fmi.flexstor": {
    "source": "iana",
    "extensions": ["flx"]
  },
  "text/vnd.gml": {
    "source": "iana"
  },
  "text/vnd.graphviz": {
    "source": "iana",
    "extensions": ["gv"]
  },
  "text/vnd.hans": {
    "source": "iana"
  },
  "text/vnd.hgl": {
    "source": "iana"
  },
  "text/vnd.in3d.3dml": {
    "source": "iana",
    "extensions": ["3dml"]
  },
  "text/vnd.in3d.spot": {
    "source": "iana",
    "extensions": ["spot"]
  },
  "text/vnd.iptc.newsml": {
    "source": "iana"
  },
  "text/vnd.iptc.nitf": {
    "source": "iana"
  },
  "text/vnd.latex-z": {
    "source": "iana"
  },
  "text/vnd.motorola.reflex": {
    "source": "iana"
  },
  "text/vnd.ms-mediapackage": {
    "source": "iana"
  },
  "text/vnd.net2phone.commcenter.command": {
    "source": "iana"
  },
  "text/vnd.radisys.msml-basic-layout": {
    "source": "iana"
  },
  "text/vnd.senx.warpscript": {
    "source": "iana"
  },
  "text/vnd.si.uricatalogue": {
    "source": "iana"
  },
  "text/vnd.sosi": {
    "source": "iana"
  },
  "text/vnd.sun.j2me.app-descriptor": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["jad"]
  },
  "text/vnd.trolltech.linguist": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/vnd.wap.si": {
    "source": "iana"
  },
  "text/vnd.wap.sl": {
    "source": "iana"
  },
  "text/vnd.wap.wml": {
    "source": "iana",
    "extensions": ["wml"]
  },
  "text/vnd.wap.wmlscript": {
    "source": "iana",
    "extensions": ["wmls"]
  },
  "text/vtt": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["vtt"]
  },
  "text/x-asm": {
    "source": "apache",
    "extensions": ["s","asm"]
  },
  "text/x-c": {
    "source": "apache",
    "extensions": ["c","cc","cxx","cpp","h","hh","dic"]
  },
  "text/x-component": {
    "source": "nginx",
    "extensions": ["htc"]
  },
  "text/x-fortran": {
    "source": "apache",
    "extensions": ["f","for","f77","f90"]
  },
  "text/x-gwt-rpc": {
    "compressible": true
  },
  "text/x-handlebars-template": {
    "extensions": ["hbs"]
  },
  "text/x-java-source": {
    "source": "apache",
    "extensions": ["java"]
  },
  "text/x-jquery-tmpl": {
    "compressible": true
  },
  "text/x-lua": {
    "extensions": ["lua"]
  },
  "text/x-markdown": {
    "compressible": true,
    "extensions": ["mkd"]
  },
  "text/x-nfo": {
    "source": "apache",
    "extensions": ["nfo"]
  },
  "text/x-opml": {
    "source": "apache",
    "extensions": ["opml"]
  },
  "text/x-org": {
    "compressible": true,
    "extensions": ["org"]
  },
  "text/x-pascal": {
    "source": "apache",
    "extensions": ["p","pas"]
  },
  "text/x-processing": {
    "compressible": true,
    "extensions": ["pde"]
  },
  "text/x-sass": {
    "extensions": ["sass"]
  },
  "text/x-scss": {
    "extensions": ["scss"]
  },
  "text/x-setext": {
    "source": "apache",
    "extensions": ["etx"]
  },
  "text/x-sfv": {
    "source": "apache",
    "extensions": ["sfv"]
  },
  "text/x-suse-ymp": {
    "compressible": true,
    "extensions": ["ymp"]
  },
  "text/x-uuencode": {
    "source": "apache",
    "extensions": ["uu"]
  },
  "text/x-vcalendar": {
    "source": "apache",
    "extensions": ["vcs"]
  },
  "text/x-vcard": {
    "source": "apache",
    "extensions": ["vcf"]
  },
  "text/xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xml"]
  },
  "text/xml-external-parsed-entity": {
    "source": "iana"
  },
  "text/yaml": {
    "compressible": true,
    "extensions": ["yaml","yml"]
  },
  "video/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "video/3gpp": {
    "source": "iana",
    "extensions": ["3gp","3gpp"]
  },
  "video/3gpp-tt": {
    "source": "iana"
  },
  "video/3gpp2": {
    "source": "iana",
    "extensions": ["3g2"]
  },
  "video/av1": {
    "source": "iana"
  },
  "video/bmpeg": {
    "source": "iana"
  },
  "video/bt656": {
    "source": "iana"
  },
  "video/celb": {
    "source": "iana"
  },
  "video/dv": {
    "source": "iana"
  },
  "video/encaprtp": {
    "source": "iana"
  },
  "video/ffv1": {
    "source": "iana"
  },
  "video/flexfec": {
    "source": "iana"
  },
  "video/h261": {
    "source": "iana",
    "extensions": ["h261"]
  },
  "video/h263": {
    "source": "iana",
    "extensions": ["h263"]
  },
  "video/h263-1998": {
    "source": "iana"
  },
  "video/h263-2000": {
    "source": "iana"
  },
  "video/h264": {
    "source": "iana",
    "extensions": ["h264"]
  },
  "video/h264-rcdo": {
    "source": "iana"
  },
  "video/h264-svc": {
    "source": "iana"
  },
  "video/h265": {
    "source": "iana"
  },
  "video/iso.segment": {
    "source": "iana",
    "extensions": ["m4s"]
  },
  "video/jpeg": {
    "source": "iana",
    "extensions": ["jpgv"]
  },
  "video/jpeg2000": {
    "source": "iana"
  },
  "video/jpm": {
    "source": "apache",
    "extensions": ["jpm","jpgm"]
  },
  "video/mj2": {
    "source": "iana",
    "extensions": ["mj2","mjp2"]
  },
  "video/mp1s": {
    "source": "iana"
  },
  "video/mp2p": {
    "source": "iana"
  },
  "video/mp2t": {
    "source": "iana",
    "extensions": ["ts"]
  },
  "video/mp4": {
    "source": "iana",
    "compressible": false,
    "extensions": ["mp4","mp4v","mpg4"]
  },
  "video/mp4v-es": {
    "source": "iana"
  },
  "video/mpeg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["mpeg","mpg","mpe","m1v","m2v"]
  },
  "video/mpeg4-generic": {
    "source": "iana"
  },
  "video/mpv": {
    "source": "iana"
  },
  "video/nv": {
    "source": "iana"
  },
  "video/ogg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ogv"]
  },
  "video/parityfec": {
    "source": "iana"
  },
  "video/pointer": {
    "source": "iana"
  },
  "video/quicktime": {
    "source": "iana",
    "compressible": false,
    "extensions": ["qt","mov"]
  },
  "video/raptorfec": {
    "source": "iana"
  },
  "video/raw": {
    "source": "iana"
  },
  "video/rtp-enc-aescm128": {
    "source": "iana"
  },
  "video/rtploopback": {
    "source": "iana"
  },
  "video/rtx": {
    "source": "iana"
  },
  "video/scip": {
    "source": "iana"
  },
  "video/smpte291": {
    "source": "iana"
  },
  "video/smpte292m": {
    "source": "iana"
  },
  "video/ulpfec": {
    "source": "iana"
  },
  "video/vc1": {
    "source": "iana"
  },
  "video/vc2": {
    "source": "iana"
  },
  "video/vnd.cctv": {
    "source": "iana"
  },
  "video/vnd.dece.hd": {
    "source": "iana",
    "extensions": ["uvh","uvvh"]
  },
  "video/vnd.dece.mobile": {
    "source": "iana",
    "extensions": ["uvm","uvvm"]
  },
  "video/vnd.dece.mp4": {
    "source": "iana"
  },
  "video/vnd.dece.pd": {
    "source": "iana",
    "extensions": ["uvp","uvvp"]
  },
  "video/vnd.dece.sd": {
    "source": "iana",
    "extensions": ["uvs","uvvs"]
  },
  "video/vnd.dece.video": {
    "source": "iana",
    "extensions": ["uvv","uvvv"]
  },
  "video/vnd.directv.mpeg": {
    "source": "iana"
  },
  "video/vnd.directv.mpeg-tts": {
    "source": "iana"
  },
  "video/vnd.dlna.mpeg-tts": {
    "source": "iana"
  },
  "video/vnd.dvb.file": {
    "source": "iana",
    "extensions": ["dvb"]
  },
  "video/vnd.fvt": {
    "source": "iana",
    "extensions": ["fvt"]
  },
  "video/vnd.hns.video": {
    "source": "iana"
  },
  "video/vnd.iptvforum.1dparityfec-1010": {
    "source": "iana"
  },
  "video/vnd.iptvforum.1dparityfec-2005": {
    "source": "iana"
  },
  "video/vnd.iptvforum.2dparityfec-1010": {
    "source": "iana"
  },
  "video/vnd.iptvforum.2dparityfec-2005": {
    "source": "iana"
  },
  "video/vnd.iptvforum.ttsavc": {
    "source": "iana"
  },
  "video/vnd.iptvforum.ttsmpeg2": {
    "source": "iana"
  },
  "video/vnd.motorola.video": {
    "source": "iana"
  },
  "video/vnd.motorola.videop": {
    "source": "iana"
  },
  "video/vnd.mpegurl": {
    "source": "iana",
    "extensions": ["mxu","m4u"]
  },
  "video/vnd.ms-playready.media.pyv": {
    "source": "iana",
    "extensions": ["pyv"]
  },
  "video/vnd.nokia.interleaved-multimedia": {
    "source": "iana"
  },
  "video/vnd.nokia.mp4vr": {
    "source": "iana"
  },
  "video/vnd.nokia.videovoip": {
    "source": "iana"
  },
  "video/vnd.objectvideo": {
    "source": "iana"
  },
  "video/vnd.radgamettools.bink": {
    "source": "iana"
  },
  "video/vnd.radgamettools.smacker": {
    "source": "iana"
  },
  "video/vnd.sealed.mpeg1": {
    "source": "iana"
  },
  "video/vnd.sealed.mpeg4": {
    "source": "iana"
  },
  "video/vnd.sealed.swf": {
    "source": "iana"
  },
  "video/vnd.sealedmedia.softseal.mov": {
    "source": "iana"
  },
  "video/vnd.uvvu.mp4": {
    "source": "iana",
    "extensions": ["uvu","uvvu"]
  },
  "video/vnd.vivo": {
    "source": "iana",
    "extensions": ["viv"]
  },
  "video/vnd.youtube.yt": {
    "source": "iana"
  },
  "video/vp8": {
    "source": "iana"
  },
  "video/vp9": {
    "source": "iana"
  },
  "video/webm": {
    "source": "apache",
    "compressible": false,
    "extensions": ["webm"]
  },
  "video/x-f4v": {
    "source": "apache",
    "extensions": ["f4v"]
  },
  "video/x-fli": {
    "source": "apache",
    "extensions": ["fli"]
  },
  "video/x-flv": {
    "source": "apache",
    "compressible": false,
    "extensions": ["flv"]
  },
  "video/x-m4v": {
    "source": "apache",
    "extensions": ["m4v"]
  },
  "video/x-matroska": {
    "source": "apache",
    "compressible": false,
    "extensions": ["mkv","mk3d","mks"]
  },
  "video/x-mng": {
    "source": "apache",
    "extensions": ["mng"]
  },
  "video/x-ms-asf": {
    "source": "apache",
    "extensions": ["asf","asx"]
  },
  "video/x-ms-vob": {
    "source": "apache",
    "extensions": ["vob"]
  },
  "video/x-ms-wm": {
    "source": "apache",
    "extensions": ["wm"]
  },
  "video/x-ms-wmv": {
    "source": "apache",
    "compressible": false,
    "extensions": ["wmv"]
  },
  "video/x-ms-wmx": {
    "source": "apache",
    "extensions": ["wmx"]
  },
  "video/x-ms-wvx": {
    "source": "apache",
    "extensions": ["wvx"]
  },
  "video/x-msvideo": {
    "source": "apache",
    "extensions": ["avi"]
  },
  "video/x-sgi-movie": {
    "source": "apache",
    "extensions": ["movie"]
  },
  "video/x-smv": {
    "source": "apache",
    "extensions": ["smv"]
  },
  "x-conference/x-cooltalk": {
    "source": "apache",
    "extensions": ["ice"]
  },
  "x-shader/x-fragment": {
    "compressible": true
  },
  "x-shader/x-vertex": {
    "compressible": true
  }
}`);
const osType = (()=>{
    const { Deno  } = globalThis;
    if (typeof Deno?.build?.os === "string") {
        return Deno.build.os;
    }
    const { navigator  } = globalThis;
    if (navigator?.appVersion?.includes?.("Win") ?? false) {
        return "windows";
    }
    return "linux";
})();
const isWindows = osType === "windows";
const CHAR_FORWARD_SLASH = 47;
function assertPath(path3) {
    if (typeof path3 !== "string") {
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(path3)}`);
    }
}
function isPosixPathSeparator(code2) {
    return code2 === 47;
}
function isPathSeparator(code3) {
    return isPosixPathSeparator(code3) || code3 === 92;
}
function isWindowsDeviceRoot(code4) {
    return code4 >= 97 && code4 <= 122 || code4 >= 65 && code4 <= 90;
}
function normalizeString(path4, allowAboveRoot, separator, isPathSeparator1) {
    let res = "";
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let code5;
    for(let i4 = 0, len = path4.length; i4 <= len; ++i4){
        if (i4 < len) code5 = path4.charCodeAt(i4);
        else if (isPathSeparator1(code5)) break;
        else code5 = CHAR_FORWARD_SLASH;
        if (isPathSeparator1(code5)) {
            if (lastSlash === i4 - 1 || dots === 1) {} else if (lastSlash !== i4 - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                    if (res.length > 2) {
                        const lastSlashIndex = res.lastIndexOf(separator);
                        if (lastSlashIndex === -1) {
                            res = "";
                            lastSegmentLength = 0;
                        } else {
                            res = res.slice(0, lastSlashIndex);
                            lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
                        }
                        lastSlash = i4;
                        dots = 0;
                        continue;
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i4;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += `${separator}..`;
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += separator + path4.slice(lastSlash + 1, i4);
                else res = path4.slice(lastSlash + 1, i4);
                lastSegmentLength = i4 - lastSlash - 1;
            }
            lastSlash = i4;
            dots = 0;
        } else if (code5 === 46 && dots !== -1) {
            ++dots;
        } else {
            dots = -1;
        }
    }
    return res;
}
function _format(sep3, pathObject) {
    const dir = pathObject.dir || pathObject.root;
    const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep3 + base;
}
const WHITESPACE_ENCODINGS = {
    "\u0009": "%09",
    "\u000A": "%0A",
    "\u000B": "%0B",
    "\u000C": "%0C",
    "\u000D": "%0D",
    "\u0020": "%20"
};
function encodeWhitespace(string) {
    return string.replaceAll(/[\s]/g, (c2)=>{
        return WHITESPACE_ENCODINGS[c2] ?? c2;
    });
}
class DenoStdInternalError extends Error {
    constructor(message){
        super(message);
        this.name = "DenoStdInternalError";
    }
}
function assert(expr, msg = "") {
    if (!expr) {
        throw new DenoStdInternalError(msg);
    }
}
const sep = "\\";
const delimiter = ";";
function resolve(...pathSegments) {
    let resolvedDevice = "";
    let resolvedTail = "";
    let resolvedAbsolute = false;
    for(let i5 = pathSegments.length - 1; i5 >= -1; i5--){
        let path5;
        const { Deno  } = globalThis;
        if (i5 >= 0) {
            path5 = pathSegments[i5];
        } else if (!resolvedDevice) {
            if (typeof Deno?.cwd !== "function") {
                throw new TypeError("Resolved a drive-letter-less path without a CWD.");
            }
            path5 = Deno.cwd();
        } else {
            if (typeof Deno?.env?.get !== "function" || typeof Deno?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path5 = Deno.env.get(`=${resolvedDevice}`) || Deno.cwd();
            if (path5 === undefined || path5.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
                path5 = `${resolvedDevice}\\`;
            }
        }
        assertPath(path5);
        const len = path5.length;
        if (len === 0) continue;
        let rootEnd = 0;
        let device = "";
        let isAbsolute1 = false;
        const code6 = path5.charCodeAt(0);
        if (len > 1) {
            if (isPathSeparator(code6)) {
                isAbsolute1 = true;
                if (isPathSeparator(path5.charCodeAt(1))) {
                    let j2 = 2;
                    let last1 = j2;
                    for(; j2 < len; ++j2){
                        if (isPathSeparator(path5.charCodeAt(j2))) break;
                    }
                    if (j2 < len && j2 !== last1) {
                        const firstPart = path5.slice(last1, j2);
                        last1 = j2;
                        for(; j2 < len; ++j2){
                            if (!isPathSeparator(path5.charCodeAt(j2))) break;
                        }
                        if (j2 < len && j2 !== last1) {
                            last1 = j2;
                            for(; j2 < len; ++j2){
                                if (isPathSeparator(path5.charCodeAt(j2))) break;
                            }
                            if (j2 === len) {
                                device = `\\\\${firstPart}\\${path5.slice(last1)}`;
                                rootEnd = j2;
                            } else if (j2 !== last1) {
                                device = `\\\\${firstPart}\\${path5.slice(last1, j2)}`;
                                rootEnd = j2;
                            }
                        }
                    }
                } else {
                    rootEnd = 1;
                }
            } else if (isWindowsDeviceRoot(code6)) {
                if (path5.charCodeAt(1) === 58) {
                    device = path5.slice(0, 2);
                    rootEnd = 2;
                    if (len > 2) {
                        if (isPathSeparator(path5.charCodeAt(2))) {
                            isAbsolute1 = true;
                            rootEnd = 3;
                        }
                    }
                }
            }
        } else if (isPathSeparator(code6)) {
            rootEnd = 1;
            isAbsolute1 = true;
        }
        if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
            continue;
        }
        if (resolvedDevice.length === 0 && device.length > 0) {
            resolvedDevice = device;
        }
        if (!resolvedAbsolute) {
            resolvedTail = `${path5.slice(rootEnd)}\\${resolvedTail}`;
            resolvedAbsolute = isAbsolute1;
        }
        if (resolvedAbsolute && resolvedDevice.length > 0) break;
    }
    resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
    return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function normalize(path6) {
    assertPath(path6);
    const len = path6.length;
    if (len === 0) return ".";
    let rootEnd = 0;
    let device;
    let isAbsolute2 = false;
    const code7 = path6.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator(code7)) {
            isAbsolute2 = true;
            if (isPathSeparator(path6.charCodeAt(1))) {
                let j3 = 2;
                let last2 = j3;
                for(; j3 < len; ++j3){
                    if (isPathSeparator(path6.charCodeAt(j3))) break;
                }
                if (j3 < len && j3 !== last2) {
                    const firstPart = path6.slice(last2, j3);
                    last2 = j3;
                    for(; j3 < len; ++j3){
                        if (!isPathSeparator(path6.charCodeAt(j3))) break;
                    }
                    if (j3 < len && j3 !== last2) {
                        last2 = j3;
                        for(; j3 < len; ++j3){
                            if (isPathSeparator(path6.charCodeAt(j3))) break;
                        }
                        if (j3 === len) {
                            return `\\\\${firstPart}\\${path6.slice(last2)}\\`;
                        } else if (j3 !== last2) {
                            device = `\\\\${firstPart}\\${path6.slice(last2, j3)}`;
                            rootEnd = j3;
                        }
                    }
                }
            } else {
                rootEnd = 1;
            }
        } else if (isWindowsDeviceRoot(code7)) {
            if (path6.charCodeAt(1) === 58) {
                device = path6.slice(0, 2);
                rootEnd = 2;
                if (len > 2) {
                    if (isPathSeparator(path6.charCodeAt(2))) {
                        isAbsolute2 = true;
                        rootEnd = 3;
                    }
                }
            }
        }
    } else if (isPathSeparator(code7)) {
        return "\\";
    }
    let tail1;
    if (rootEnd < len) {
        tail1 = normalizeString(path6.slice(rootEnd), !isAbsolute2, "\\", isPathSeparator);
    } else {
        tail1 = "";
    }
    if (tail1.length === 0 && !isAbsolute2) tail1 = ".";
    if (tail1.length > 0 && isPathSeparator(path6.charCodeAt(len - 1))) {
        tail1 += "\\";
    }
    if (device === undefined) {
        if (isAbsolute2) {
            if (tail1.length > 0) return `\\${tail1}`;
            else return "\\";
        } else if (tail1.length > 0) {
            return tail1;
        } else {
            return "";
        }
    } else if (isAbsolute2) {
        if (tail1.length > 0) return `${device}\\${tail1}`;
        else return `${device}\\`;
    } else if (tail1.length > 0) {
        return device + tail1;
    } else {
        return device;
    }
}
function isAbsolute(path7) {
    assertPath(path7);
    const len = path7.length;
    if (len === 0) return false;
    const code8 = path7.charCodeAt(0);
    if (isPathSeparator(code8)) {
        return true;
    } else if (isWindowsDeviceRoot(code8)) {
        if (len > 2 && path7.charCodeAt(1) === 58) {
            if (isPathSeparator(path7.charCodeAt(2))) return true;
        }
    }
    return false;
}
function join(...paths1) {
    const pathsCount = paths1.length;
    if (pathsCount === 0) return ".";
    let joined;
    let firstPart = null;
    for(let i6 = 0; i6 < pathsCount; ++i6){
        const path8 = paths1[i6];
        assertPath(path8);
        if (path8.length > 0) {
            if (joined === undefined) joined = firstPart = path8;
            else joined += `\\${path8}`;
        }
    }
    if (joined === undefined) return ".";
    let needsReplace = true;
    let slashCount = 0;
    assert(firstPart != null);
    if (isPathSeparator(firstPart.charCodeAt(0))) {
        ++slashCount;
        const firstLen = firstPart.length;
        if (firstLen > 1) {
            if (isPathSeparator(firstPart.charCodeAt(1))) {
                ++slashCount;
                if (firstLen > 2) {
                    if (isPathSeparator(firstPart.charCodeAt(2))) ++slashCount;
                    else {
                        needsReplace = false;
                    }
                }
            }
        }
    }
    if (needsReplace) {
        for(; slashCount < joined.length; ++slashCount){
            if (!isPathSeparator(joined.charCodeAt(slashCount))) break;
        }
        if (slashCount >= 2) joined = `\\${joined.slice(slashCount)}`;
    }
    return normalize(joined);
}
function relative(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to) return "";
    const fromOrig = resolve(from);
    const toOrig = resolve(to);
    if (fromOrig === toOrig) return "";
    from = fromOrig.toLowerCase();
    to = toOrig.toLowerCase();
    if (from === to) return "";
    let fromStart = 0;
    let fromEnd = from.length;
    for(; fromStart < fromEnd; ++fromStart){
        if (from.charCodeAt(fromStart) !== 92) break;
    }
    for(; fromEnd - 1 > fromStart; --fromEnd){
        if (from.charCodeAt(fromEnd - 1) !== 92) break;
    }
    const fromLen = fromEnd - fromStart;
    let toStart = 0;
    let toEnd = to.length;
    for(; toStart < toEnd; ++toStart){
        if (to.charCodeAt(toStart) !== 92) break;
    }
    for(; toEnd - 1 > toStart; --toEnd){
        if (to.charCodeAt(toEnd - 1) !== 92) break;
    }
    const toLen = toEnd - toStart;
    const length1 = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i7 = 0;
    for(; i7 <= length1; ++i7){
        if (i7 === length1) {
            if (toLen > length1) {
                if (to.charCodeAt(toStart + i7) === 92) {
                    return toOrig.slice(toStart + i7 + 1);
                } else if (i7 === 2) {
                    return toOrig.slice(toStart + i7);
                }
            }
            if (fromLen > length1) {
                if (from.charCodeAt(fromStart + i7) === 92) {
                    lastCommonSep = i7;
                } else if (i7 === 2) {
                    lastCommonSep = 3;
                }
            }
            break;
        }
        const fromCode = from.charCodeAt(fromStart + i7);
        const toCode = to.charCodeAt(toStart + i7);
        if (fromCode !== toCode) break;
        else if (fromCode === 92) lastCommonSep = i7;
    }
    if (i7 !== length1 && lastCommonSep === -1) {
        return toOrig;
    }
    let out = "";
    if (lastCommonSep === -1) lastCommonSep = 0;
    for(i7 = fromStart + lastCommonSep + 1; i7 <= fromEnd; ++i7){
        if (i7 === fromEnd || from.charCodeAt(i7) === 92) {
            if (out.length === 0) out += "..";
            else out += "\\..";
        }
    }
    if (out.length > 0) {
        return out + toOrig.slice(toStart + lastCommonSep, toEnd);
    } else {
        toStart += lastCommonSep;
        if (toOrig.charCodeAt(toStart) === 92) ++toStart;
        return toOrig.slice(toStart, toEnd);
    }
}
function toNamespacedPath(path9) {
    if (typeof path9 !== "string") return path9;
    if (path9.length === 0) return "";
    const resolvedPath = resolve(path9);
    if (resolvedPath.length >= 3) {
        if (resolvedPath.charCodeAt(0) === 92) {
            if (resolvedPath.charCodeAt(1) === 92) {
                const code9 = resolvedPath.charCodeAt(2);
                if (code9 !== 63 && code9 !== 46) {
                    return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
                }
            }
        } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
            if (resolvedPath.charCodeAt(1) === 58 && resolvedPath.charCodeAt(2) === 92) {
                return `\\\\?\\${resolvedPath}`;
            }
        }
    }
    return path9;
}
function dirname(path10) {
    assertPath(path10);
    const len = path10.length;
    if (len === 0) return ".";
    let rootEnd = -1;
    let end = -1;
    let matchedSlash = true;
    let offset = 0;
    const code10 = path10.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator(code10)) {
            rootEnd = offset = 1;
            if (isPathSeparator(path10.charCodeAt(1))) {
                let j4 = 2;
                let last3 = j4;
                for(; j4 < len; ++j4){
                    if (isPathSeparator(path10.charCodeAt(j4))) break;
                }
                if (j4 < len && j4 !== last3) {
                    last3 = j4;
                    for(; j4 < len; ++j4){
                        if (!isPathSeparator(path10.charCodeAt(j4))) break;
                    }
                    if (j4 < len && j4 !== last3) {
                        last3 = j4;
                        for(; j4 < len; ++j4){
                            if (isPathSeparator(path10.charCodeAt(j4))) break;
                        }
                        if (j4 === len) {
                            return path10;
                        }
                        if (j4 !== last3) {
                            rootEnd = offset = j4 + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code10)) {
            if (path10.charCodeAt(1) === 58) {
                rootEnd = offset = 2;
                if (len > 2) {
                    if (isPathSeparator(path10.charCodeAt(2))) rootEnd = offset = 3;
                }
            }
        }
    } else if (isPathSeparator(code10)) {
        return path10;
    }
    for(let i8 = len - 1; i8 >= offset; --i8){
        if (isPathSeparator(path10.charCodeAt(i8))) {
            if (!matchedSlash) {
                end = i8;
                break;
            }
        } else {
            matchedSlash = false;
        }
    }
    if (end === -1) {
        if (rootEnd === -1) return ".";
        else end = rootEnd;
    }
    return path10.slice(0, end);
}
function basename(path11, ext = "") {
    if (ext !== undefined && typeof ext !== "string") {
        throw new TypeError('"ext" argument must be a string');
    }
    assertPath(path11);
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i9;
    if (path11.length >= 2) {
        const drive = path11.charCodeAt(0);
        if (isWindowsDeviceRoot(drive)) {
            if (path11.charCodeAt(1) === 58) start = 2;
        }
    }
    if (ext !== undefined && ext.length > 0 && ext.length <= path11.length) {
        if (ext.length === path11.length && ext === path11) return "";
        let extIdx = ext.length - 1;
        let firstNonSlashEnd = -1;
        for(i9 = path11.length - 1; i9 >= start; --i9){
            const code11 = path11.charCodeAt(i9);
            if (isPathSeparator(code11)) {
                if (!matchedSlash) {
                    start = i9 + 1;
                    break;
                }
            } else {
                if (firstNonSlashEnd === -1) {
                    matchedSlash = false;
                    firstNonSlashEnd = i9 + 1;
                }
                if (extIdx >= 0) {
                    if (code11 === ext.charCodeAt(extIdx)) {
                        if (--extIdx === -1) {
                            end = i9;
                        }
                    } else {
                        extIdx = -1;
                        end = firstNonSlashEnd;
                    }
                }
            }
        }
        if (start === end) end = firstNonSlashEnd;
        else if (end === -1) end = path11.length;
        return path11.slice(start, end);
    } else {
        for(i9 = path11.length - 1; i9 >= start; --i9){
            if (isPathSeparator(path11.charCodeAt(i9))) {
                if (!matchedSlash) {
                    start = i9 + 1;
                    break;
                }
            } else if (end === -1) {
                matchedSlash = false;
                end = i9 + 1;
            }
        }
        if (end === -1) return "";
        return path11.slice(start, end);
    }
}
function extname(path12) {
    assertPath(path12);
    let start = 0;
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    if (path12.length >= 2 && path12.charCodeAt(1) === 58 && isWindowsDeviceRoot(path12.charCodeAt(0))) {
        start = startPart = 2;
    }
    for(let i10 = path12.length - 1; i10 >= start; --i10){
        const code12 = path12.charCodeAt(i10);
        if (isPathSeparator(code12)) {
            if (!matchedSlash) {
                startPart = i10 + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i10 + 1;
        }
        if (code12 === 46) {
            if (startDot === -1) startDot = i10;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
    }
    return path12.slice(startDot, end);
}
function format(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`);
    }
    return _format("\\", pathObject);
}
function parse(path13) {
    assertPath(path13);
    const ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    const len = path13.length;
    if (len === 0) return ret;
    let rootEnd = 0;
    let code13 = path13.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator(code13)) {
            rootEnd = 1;
            if (isPathSeparator(path13.charCodeAt(1))) {
                let j5 = 2;
                let last4 = j5;
                for(; j5 < len; ++j5){
                    if (isPathSeparator(path13.charCodeAt(j5))) break;
                }
                if (j5 < len && j5 !== last4) {
                    last4 = j5;
                    for(; j5 < len; ++j5){
                        if (!isPathSeparator(path13.charCodeAt(j5))) break;
                    }
                    if (j5 < len && j5 !== last4) {
                        last4 = j5;
                        for(; j5 < len; ++j5){
                            if (isPathSeparator(path13.charCodeAt(j5))) break;
                        }
                        if (j5 === len) {
                            rootEnd = j5;
                        } else if (j5 !== last4) {
                            rootEnd = j5 + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code13)) {
            if (path13.charCodeAt(1) === 58) {
                rootEnd = 2;
                if (len > 2) {
                    if (isPathSeparator(path13.charCodeAt(2))) {
                        if (len === 3) {
                            ret.root = ret.dir = path13;
                            return ret;
                        }
                        rootEnd = 3;
                    }
                } else {
                    ret.root = ret.dir = path13;
                    return ret;
                }
            }
        }
    } else if (isPathSeparator(code13)) {
        ret.root = ret.dir = path13;
        return ret;
    }
    if (rootEnd > 0) ret.root = path13.slice(0, rootEnd);
    let startDot = -1;
    let startPart = rootEnd;
    let end = -1;
    let matchedSlash = true;
    let i11 = path13.length - 1;
    let preDotState = 0;
    for(; i11 >= rootEnd; --i11){
        code13 = path13.charCodeAt(i11);
        if (isPathSeparator(code13)) {
            if (!matchedSlash) {
                startPart = i11 + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i11 + 1;
        }
        if (code13 === 46) {
            if (startDot === -1) startDot = i11;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
            ret.base = ret.name = path13.slice(startPart, end);
        }
    } else {
        ret.name = path13.slice(startPart, startDot);
        ret.base = path13.slice(startPart, end);
        ret.ext = path13.slice(startDot, end);
    }
    if (startPart > 0 && startPart !== rootEnd) {
        ret.dir = path13.slice(0, startPart - 1);
    } else ret.dir = ret.root;
    return ret;
}
function fromFileUrl(url) {
    url = url instanceof URL ? url : new URL(url);
    if (url.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    let path14 = decodeURIComponent(url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
    if (url.hostname != "") {
        path14 = `\\\\${url.hostname}${path14}`;
    }
    return path14;
}
function toFileUrl(path15) {
    if (!isAbsolute(path15)) {
        throw new TypeError("Must be an absolute path.");
    }
    const [, hostname, pathname] = path15.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/);
    const url = new URL("file:///");
    url.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"));
    if (hostname != null && hostname != "localhost") {
        url.hostname = hostname;
        if (!url.hostname) {
            throw new TypeError("Invalid hostname.");
        }
    }
    return url;
}
const mod = {
    sep: sep,
    delimiter: delimiter,
    resolve: resolve,
    normalize: normalize,
    isAbsolute: isAbsolute,
    join: join,
    relative: relative,
    toNamespacedPath: toNamespacedPath,
    dirname: dirname,
    basename: basename,
    extname: extname,
    format: format,
    parse: parse,
    fromFileUrl: fromFileUrl,
    toFileUrl: toFileUrl
};
const sep1 = "/";
const delimiter1 = ":";
function resolve1(...pathSegments) {
    let resolvedPath = "";
    let resolvedAbsolute = false;
    for(let i12 = pathSegments.length - 1; i12 >= -1 && !resolvedAbsolute; i12--){
        let path16;
        if (i12 >= 0) path16 = pathSegments[i12];
        else {
            const { Deno  } = globalThis;
            if (typeof Deno?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path16 = Deno.cwd();
        }
        assertPath(path16);
        if (path16.length === 0) {
            continue;
        }
        resolvedPath = `${path16}/${resolvedPath}`;
        resolvedAbsolute = path16.charCodeAt(0) === CHAR_FORWARD_SLASH;
    }
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
    if (resolvedAbsolute) {
        if (resolvedPath.length > 0) return `/${resolvedPath}`;
        else return "/";
    } else if (resolvedPath.length > 0) return resolvedPath;
    else return ".";
}
function normalize1(path17) {
    assertPath(path17);
    if (path17.length === 0) return ".";
    const isAbsolute1 = path17.charCodeAt(0) === 47;
    const trailingSeparator = path17.charCodeAt(path17.length - 1) === 47;
    path17 = normalizeString(path17, !isAbsolute1, "/", isPosixPathSeparator);
    if (path17.length === 0 && !isAbsolute1) path17 = ".";
    if (path17.length > 0 && trailingSeparator) path17 += "/";
    if (isAbsolute1) return `/${path17}`;
    return path17;
}
function isAbsolute1(path18) {
    assertPath(path18);
    return path18.length > 0 && path18.charCodeAt(0) === 47;
}
function join1(...paths2) {
    if (paths2.length === 0) return ".";
    let joined;
    for(let i13 = 0, len = paths2.length; i13 < len; ++i13){
        const path19 = paths2[i13];
        assertPath(path19);
        if (path19.length > 0) {
            if (!joined) joined = path19;
            else joined += `/${path19}`;
        }
    }
    if (!joined) return ".";
    return normalize1(joined);
}
function relative1(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to) return "";
    from = resolve1(from);
    to = resolve1(to);
    if (from === to) return "";
    let fromStart = 1;
    const fromEnd = from.length;
    for(; fromStart < fromEnd; ++fromStart){
        if (from.charCodeAt(fromStart) !== 47) break;
    }
    const fromLen = fromEnd - fromStart;
    let toStart = 1;
    const toEnd = to.length;
    for(; toStart < toEnd; ++toStart){
        if (to.charCodeAt(toStart) !== 47) break;
    }
    const toLen = toEnd - toStart;
    const length2 = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i14 = 0;
    for(; i14 <= length2; ++i14){
        if (i14 === length2) {
            if (toLen > length2) {
                if (to.charCodeAt(toStart + i14) === 47) {
                    return to.slice(toStart + i14 + 1);
                } else if (i14 === 0) {
                    return to.slice(toStart + i14);
                }
            } else if (fromLen > length2) {
                if (from.charCodeAt(fromStart + i14) === 47) {
                    lastCommonSep = i14;
                } else if (i14 === 0) {
                    lastCommonSep = 0;
                }
            }
            break;
        }
        const fromCode = from.charCodeAt(fromStart + i14);
        const toCode = to.charCodeAt(toStart + i14);
        if (fromCode !== toCode) break;
        else if (fromCode === 47) lastCommonSep = i14;
    }
    let out = "";
    for(i14 = fromStart + lastCommonSep + 1; i14 <= fromEnd; ++i14){
        if (i14 === fromEnd || from.charCodeAt(i14) === 47) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
    }
    if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
    else {
        toStart += lastCommonSep;
        if (to.charCodeAt(toStart) === 47) ++toStart;
        return to.slice(toStart);
    }
}
function toNamespacedPath1(path20) {
    return path20;
}
function dirname1(path21) {
    assertPath(path21);
    if (path21.length === 0) return ".";
    const hasRoot = path21.charCodeAt(0) === 47;
    let end = -1;
    let matchedSlash = true;
    for(let i15 = path21.length - 1; i15 >= 1; --i15){
        if (path21.charCodeAt(i15) === 47) {
            if (!matchedSlash) {
                end = i15;
                break;
            }
        } else {
            matchedSlash = false;
        }
    }
    if (end === -1) return hasRoot ? "/" : ".";
    if (hasRoot && end === 1) return "//";
    return path21.slice(0, end);
}
function basename1(path22, ext = "") {
    if (ext !== undefined && typeof ext !== "string") {
        throw new TypeError('"ext" argument must be a string');
    }
    assertPath(path22);
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i16;
    if (ext !== undefined && ext.length > 0 && ext.length <= path22.length) {
        if (ext.length === path22.length && ext === path22) return "";
        let extIdx = ext.length - 1;
        let firstNonSlashEnd = -1;
        for(i16 = path22.length - 1; i16 >= 0; --i16){
            const code14 = path22.charCodeAt(i16);
            if (code14 === 47) {
                if (!matchedSlash) {
                    start = i16 + 1;
                    break;
                }
            } else {
                if (firstNonSlashEnd === -1) {
                    matchedSlash = false;
                    firstNonSlashEnd = i16 + 1;
                }
                if (extIdx >= 0) {
                    if (code14 === ext.charCodeAt(extIdx)) {
                        if (--extIdx === -1) {
                            end = i16;
                        }
                    } else {
                        extIdx = -1;
                        end = firstNonSlashEnd;
                    }
                }
            }
        }
        if (start === end) end = firstNonSlashEnd;
        else if (end === -1) end = path22.length;
        return path22.slice(start, end);
    } else {
        for(i16 = path22.length - 1; i16 >= 0; --i16){
            if (path22.charCodeAt(i16) === 47) {
                if (!matchedSlash) {
                    start = i16 + 1;
                    break;
                }
            } else if (end === -1) {
                matchedSlash = false;
                end = i16 + 1;
            }
        }
        if (end === -1) return "";
        return path22.slice(start, end);
    }
}
function extname1(path23) {
    assertPath(path23);
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    for(let i17 = path23.length - 1; i17 >= 0; --i17){
        const code15 = path23.charCodeAt(i17);
        if (code15 === 47) {
            if (!matchedSlash) {
                startPart = i17 + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i17 + 1;
        }
        if (code15 === 46) {
            if (startDot === -1) startDot = i17;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
    }
    return path23.slice(startDot, end);
}
function format1(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`);
    }
    return _format("/", pathObject);
}
function parse1(path24) {
    assertPath(path24);
    const ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    if (path24.length === 0) return ret;
    const isAbsolute2 = path24.charCodeAt(0) === 47;
    let start;
    if (isAbsolute2) {
        ret.root = "/";
        start = 1;
    } else {
        start = 0;
    }
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let i18 = path24.length - 1;
    let preDotState = 0;
    for(; i18 >= start; --i18){
        const code16 = path24.charCodeAt(i18);
        if (code16 === 47) {
            if (!matchedSlash) {
                startPart = i18 + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i18 + 1;
        }
        if (code16 === 46) {
            if (startDot === -1) startDot = i18;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
            if (startPart === 0 && isAbsolute2) {
                ret.base = ret.name = path24.slice(1, end);
            } else {
                ret.base = ret.name = path24.slice(startPart, end);
            }
        }
    } else {
        if (startPart === 0 && isAbsolute2) {
            ret.name = path24.slice(1, startDot);
            ret.base = path24.slice(1, end);
        } else {
            ret.name = path24.slice(startPart, startDot);
            ret.base = path24.slice(startPart, end);
        }
        ret.ext = path24.slice(startDot, end);
    }
    if (startPart > 0) ret.dir = path24.slice(0, startPart - 1);
    else if (isAbsolute2) ret.dir = "/";
    return ret;
}
function fromFileUrl1(url) {
    url = url instanceof URL ? url : new URL(url);
    if (url.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    return decodeURIComponent(url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function toFileUrl1(path25) {
    if (!isAbsolute1(path25)) {
        throw new TypeError("Must be an absolute path.");
    }
    const url = new URL("file:///");
    url.pathname = encodeWhitespace(path25.replace(/%/g, "%25").replace(/\\/g, "%5C"));
    return url;
}
const mod1 = {
    sep: sep1,
    delimiter: delimiter1,
    resolve: resolve1,
    normalize: normalize1,
    isAbsolute: isAbsolute1,
    join: join1,
    relative: relative1,
    toNamespacedPath: toNamespacedPath1,
    dirname: dirname1,
    basename: basename1,
    extname: extname1,
    format: format1,
    parse: parse1,
    fromFileUrl: fromFileUrl1,
    toFileUrl: toFileUrl1
};
const path = isWindows ? mod : mod1;
const { join: join2 , normalize: normalize2  } = path;
const path1 = isWindows ? mod : mod1;
const { basename: basename2 , delimiter: delimiter2 , dirname: dirname2 , extname: extname2 , format: format2 , fromFileUrl: fromFileUrl2 , isAbsolute: isAbsolute2 , join: join3 , normalize: normalize3 , parse: parse2 , relative: relative2 , resolve: resolve2 , sep: sep2 , toFileUrl: toFileUrl2 , toNamespacedPath: toNamespacedPath2 ,  } = path1;
const extensions = new Map();
const types = new Map();
function populateMaps(extensions1, types1) {
    const preference = [
        "nginx",
        "apache",
        undefined,
        "iana"
    ];
    for (const type1 of Object.keys(db)){
        const mime = db[type1];
        const exts = mime.extensions;
        if (!exts || !exts.length) {
            continue;
        }
        extensions1.set(type1, exts);
        for (const ext of exts){
            const current = types1.get(ext);
            if (current) {
                const from = preference.indexOf(db[current].source);
                const to = preference.indexOf(mime.source);
                if (current !== "application/octet-stream" && (from > to || from === to && current.substr(0, 12) === "application/")) {
                    continue;
                }
            }
            types1.set(ext, type1);
        }
    }
}
populateMaps(extensions, types);
function delay(ms, options = {}) {
    const { signal  } = options;
    if (signal?.aborted) {
        return Promise.reject(new DOMException("Delay was aborted.", "AbortError"));
    }
    return new Promise((resolve3, reject1)=>{
        const abort = ()=>{
            clearTimeout(i19);
            reject1(new DOMException("Delay was aborted.", "AbortError"));
        };
        const done = ()=>{
            signal?.removeEventListener("abort", abort);
            resolve3();
        };
        const i19 = setTimeout(done, ms);
        signal?.addEventListener("abort", abort, {
            once: true
        });
    });
}
const ERROR_SERVER_CLOSED = "Server closed";
const ERROR_ADDRESS_INVALID = "Invalid address";
const INITIAL_ACCEPT_BACKOFF_DELAY = 5;
const MAX_ACCEPT_BACKOFF_DELAY = 1000;
function _parseAddrFromStr(addr, defaultPort = 80) {
    const host = addr.startsWith(":") ? `0.0.0.0${addr}` : addr;
    let url;
    try {
        url = new URL(`http://${host}`);
    } catch  {
        throw new TypeError(ERROR_ADDRESS_INVALID);
    }
    if (url.username || url.password || url.pathname != "/" || url.search || url.hash) {
        throw new TypeError(ERROR_ADDRESS_INVALID);
    }
    return {
        hostname: url.hostname,
        port: url.port === "" ? defaultPort : Number(url.port)
    };
}
class Server {
    #addr;
    #handler;
    #closed = false;
    #listeners = new Set();
    #httpConnections = new Set();
    constructor(serverInit){
        this.#addr = serverInit.addr;
        this.#handler = serverInit.handler;
    }
    async serve(listener) {
        if (this.#closed) {
            throw new Deno.errors.Http(ERROR_SERVER_CLOSED);
        }
        this.#trackListener(listener);
        try {
            return await this.#accept(listener);
        } finally{
            this.#untrackListener(listener);
            try {
                listener.close();
            } catch  {}
        }
    }
    async listenAndServe() {
        if (this.#closed) {
            throw new Deno.errors.Http(ERROR_SERVER_CLOSED);
        }
        const addr = this.#addr ?? `:${80}`;
        const listenOptions = _parseAddrFromStr(addr, 80);
        const listener = Deno.listen({
            ...listenOptions,
            transport: "tcp"
        });
        return await this.serve(listener);
    }
    async listenAndServeTls(certFile, keyFile) {
        if (this.#closed) {
            throw new Deno.errors.Http(ERROR_SERVER_CLOSED);
        }
        const addr = this.#addr ?? `:${443}`;
        const listenOptions = _parseAddrFromStr(addr, 443);
        const listener = Deno.listenTls({
            ...listenOptions,
            certFile,
            keyFile,
            transport: "tcp"
        });
        return await this.serve(listener);
    }
    close() {
        if (this.#closed) {
            throw new Deno.errors.Http(ERROR_SERVER_CLOSED);
        }
        this.#closed = true;
        for (const listener of this.#listeners){
            try {
                listener.close();
            } catch  {}
        }
        this.#listeners.clear();
        for (const httpConn of this.#httpConnections){
            this.#closeHttpConn(httpConn);
        }
        this.#httpConnections.clear();
    }
    get closed() {
        return this.#closed;
    }
    get addrs() {
        return Array.from(this.#listeners).map((listener)=>listener.addr
        );
    }
    async #respond(requestEvent, httpCon, connInfo) {
        try {
            const response = await this.#handler(requestEvent.request, connInfo);
            await requestEvent.respondWith(response);
        } catch  {
            return this.#closeHttpConn(httpCon);
        }
    }
    async #serveHttp(httpConn, connInfo1) {
        while(!this.#closed){
            let requestEvent;
            try {
                requestEvent = await httpConn.nextRequest();
            } catch  {
                break;
            }
            if (requestEvent === null) {
                break;
            }
            this.#respond(requestEvent, httpConn, connInfo1);
        }
        this.#closeHttpConn(httpConn);
    }
    async #accept(listener) {
        let acceptBackoffDelay;
        while(!this.#closed){
            let conn;
            try {
                conn = await listener.accept();
            } catch (error) {
                if (error instanceof Deno.errors.BadResource || error instanceof Deno.errors.InvalidData || error instanceof Deno.errors.UnexpectedEof || error instanceof Deno.errors.ConnectionReset || error instanceof Deno.errors.NotConnected) {
                    if (!acceptBackoffDelay) {
                        acceptBackoffDelay = INITIAL_ACCEPT_BACKOFF_DELAY;
                    } else {
                        acceptBackoffDelay *= 2;
                    }
                    if (acceptBackoffDelay >= 1000) {
                        acceptBackoffDelay = MAX_ACCEPT_BACKOFF_DELAY;
                    }
                    await delay(acceptBackoffDelay);
                    continue;
                }
                throw error;
            }
            acceptBackoffDelay = undefined;
            let httpConn;
            try {
                httpConn = Deno.serveHttp(conn);
            } catch  {
                continue;
            }
            this.#trackHttpConnection(httpConn);
            const connInfo = {
                localAddr: conn.localAddr,
                remoteAddr: conn.remoteAddr
            };
            this.#serveHttp(httpConn, connInfo);
        }
    }
     #closeHttpConn(httpConn1) {
        this.#untrackHttpConnection(httpConn1);
        try {
            httpConn1.close();
        } catch  {}
    }
     #trackListener(listener1) {
        this.#listeners.add(listener1);
    }
     #untrackListener(listener2) {
        this.#listeners.delete(listener2);
    }
     #trackHttpConnection(httpConn2) {
        this.#httpConnections.add(httpConn2);
    }
     #untrackHttpConnection(httpConn3) {
        this.#httpConnections.delete(httpConn3);
    }
}
async function listenAndServe(addr, handler, options) {
    const server = new Server({
        addr,
        handler
    });
    if (options?.signal) {
        options.signal.onabort = ()=>server.close()
        ;
    }
    return await server.listenAndServe();
}
const globalCache = inMemoryCache(20);
let routes = {
    404: defaultNotFoundPage
};
function serve(userRoutes) {
    routes = {
        ...routes,
        ...userRoutes
    };
    listenAndServe(":8000", (req)=>{
        return handleRequest(req, routes);
    });
    const isDeploy = Deno.env.get("DENO_REGION");
    if (!isDeploy) {
        console.log("Listening at http://localhost:8000/");
    }
}
async function handleRequest(request, routes1) {
    const { search , pathname  } = new URL(request.url);
    try {
        const startTime = Date.now();
        let response = await globalCache.match(request);
        if (typeof response === "undefined") {
            for (const route of Object.keys(routes1)){
                const pattern = new URLPattern({
                    pathname: route
                });
                if (pattern.test({
                    pathname
                })) {
                    const params = pattern.exec({
                        pathname
                    })?.pathname.groups;
                    try {
                        response = await routes1[route](request, params);
                    } catch (error) {
                        console.error("Error serving request:", error);
                        response = json({
                            error: error.message
                        }, {
                            status: 500
                        });
                    }
                    if (!(response instanceof Response)) {
                        response = jsx(response);
                    }
                    break;
                }
            }
        } else {
            response.headers.set("x-function-cache-hit", "true");
        }
        if (response === undefined) {
            response = await routes1["404"](request, {});
        }
        console.log(`${request.method} ${pathname + search} ${response.headers.has("x-function-cache-hit") ? String.fromCodePoint(9889) : ""}${Date.now() - startTime}ms ${response.status}`);
        return response;
    } catch (error) {
        console.error("Error serving request:", error);
        return json({
            error: error.message
        }, {
            status: 500
        });
    }
}
function defaultNotFoundPage() {
    return new Response("<h1 align=center>page not found</h1>", {
        status: 404,
        headers: {
            "Content-Type": "text/html; charset=utf-8"
        }
    });
}
function json(jsobj, init2) {
    const headers = init2?.headers instanceof Headers ? init2.headers : new Headers(init2?.headers);
    if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json; charset=utf-8");
    }
    return new Response(JSON.stringify(jsobj) + "\n", {
        statusText: init2?.statusText ?? STATUS_TEXT.get(init2?.status ?? Status.OK),
        status: init2?.status ?? Status.OK,
        headers
    });
}
function jsx(jsx1, init3) {
    const headers = init3?.headers instanceof Headers ? init3.headers : new Headers(init3?.headers);
    if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "text/html; charset=utf-8");
    }
    return new Response(h(jsx1), {
        statusText: init3?.statusText ?? STATUS_TEXT.get(init3?.status ?? Status.OK),
        status: init3?.status ?? Status.OK,
        headers
    });
}
function removeEmptyValues(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, value])=>{
        if (value === null) return false;
        if (value === undefined) return false;
        if (value === "") return false;
        return true;
    }));
}
function difference(arrA, arrB) {
    return arrA.filter((a2)=>arrB.indexOf(a2) < 0
    );
}
function parse3(rawDotenv) {
    const env = {};
    for (const line of rawDotenv.split("\n")){
        if (!isVariableStart(line)) continue;
        const key = line.slice(0, line.indexOf("=")).trim();
        let value = line.slice(line.indexOf("=") + 1).trim();
        if (hasSingleQuotes(value)) {
            value = value.slice(1, -1);
        } else if (hasDoubleQuotes(value)) {
            value = value.slice(1, -1);
            value = expandNewlines(value);
        } else value = value.trim();
        env[key] = value;
    }
    return env;
}
const defaultConfigOptions = {
    path: `.env`,
    export: false,
    safe: false,
    example: `.env.example`,
    allowEmptyValues: false,
    defaults: `.env.defaults`
};
async function configAsync(options = {}) {
    const o3 = {
        ...defaultConfigOptions,
        ...options
    };
    const conf = await parseFileAsync(o3.path);
    if (o3.defaults) {
        const confDefaults = await parseFileAsync(o3.defaults);
        for(const key in confDefaults){
            if (!(key in conf)) {
                conf[key] = confDefaults[key];
            }
        }
    }
    if (o3.safe) {
        const confExample = await parseFileAsync(o3.example);
        assertSafe(conf, confExample, o3.allowEmptyValues);
    }
    if (o3.export) {
        for(const key in conf){
            if (Deno.env.get(key) !== undefined) continue;
            Deno.env.set(key, conf[key]);
        }
    }
    return conf;
}
async function parseFileAsync(filepath) {
    try {
        return parse3(new TextDecoder("utf-8").decode(await Deno.readFile(filepath)));
    } catch (e9) {
        if (e9 instanceof Deno.errors.NotFound) return {};
        throw e9;
    }
}
function isVariableStart(str) {
    return /^\s*[a-zA-Z_][a-zA-Z_0-9 ]*\s*=/.test(str);
}
function hasSingleQuotes(str) {
    return /^'([\s\S]*)'$/.test(str);
}
function hasDoubleQuotes(str) {
    return /^"([\s\S]*)"$/.test(str);
}
function expandNewlines(str) {
    return str.replaceAll("\\n", "\n");
}
function assertSafe(conf, confExample, allowEmptyValues) {
    const currentEnv = Deno.env.toObject();
    const confWithEnv = Object.assign({}, currentEnv, conf);
    const missing = difference(Object.keys(confExample), Object.keys(allowEmptyValues ? confWithEnv : removeEmptyValues(confWithEnv)));
    if (missing.length > 0) {
        const errorMessages = [
            `The following variables were defined in the example file but are not present in the environment:\n  ${missing.join(", ")}`,
            `Make sure to add them to your env file.`,
            !allowEmptyValues && `If you expect any of these variables to be empty, you can set the allowEmptyValues option to true.`, 
        ];
        throw new MissingEnvVarsError(errorMessages.filter(Boolean).join("\n\n"));
    }
}
class MissingEnvVarsError extends Error {
    constructor(message){
        super(message);
        this.name = "MissingEnvVarsError";
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
await configAsync({
    export: true
});
Object.freeze({
    major: 15,
    minor: 0,
    patch: 0,
    preReleaseTag: null
});
function isPromise(value) {
    return typeof value?.then === 'function';
}
const nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
function inspect(value) {
    return formatValue(value, []);
}
function formatValue(value, seenValues) {
    switch(typeof value){
        case 'string':
            return JSON.stringify(value);
        case 'function':
            return value.name ? `[function ${value.name}]` : '[function]';
        case 'object':
            if (value === null) {
                return 'null';
            }
            return formatObjectValue(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue(value, previouslySeenValues) {
    if (previouslySeenValues.indexOf(value) !== -1) {
        return '[Circular]';
    }
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    const customInspectFn = getCustomFn(value);
    if (customInspectFn !== undefined) {
        const customValue = customInspectFn.call(value);
        if (customValue !== value) {
            return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
        }
    } else if (Array.isArray(value)) {
        return formatArray(value, seenValues);
    }
    return formatObject(value, seenValues);
}
function formatObject(object, seenValues) {
    const keys1 = Object.keys(object);
    if (keys1.length === 0) {
        return '{}';
    }
    if (seenValues.length > 2) {
        return '[' + getObjectTag(object) + ']';
    }
    const properties = keys1.map((key)=>{
        const value = formatValue(object[key], seenValues);
        return key + ': ' + value;
    });
    return '{ ' + properties.join(', ') + ' }';
}
function formatArray(array, seenValues) {
    if (array.length === 0) {
        return '[]';
    }
    if (seenValues.length > 2) {
        return '[Array]';
    }
    const len = Math.min(10, array.length);
    const remaining = array.length - len;
    const items = [];
    for(let i20 = 0; i20 < len; ++i20){
        items.push(formatValue(array[i20], seenValues));
    }
    if (remaining === 1) {
        items.push('... 1 more item');
    } else if (remaining > 1) {
        items.push(`... ${remaining} more items`);
    }
    return '[' + items.join(', ') + ']';
}
function getCustomFn(object) {
    const customInspectFn = object[String(nodejsCustomInspectSymbol)];
    if (typeof customInspectFn === 'function') {
        return customInspectFn;
    }
    if (typeof object.inspect === 'function') {
        return object.inspect;
    }
}
function getObjectTag(object) {
    const tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');
    if (tag === 'Object' && typeof object.constructor === 'function') {
        const name = object.constructor.name;
        if (typeof name === 'string' && name !== '') {
            return name;
        }
    }
    return tag;
}
function devAssert(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message);
    }
}
function isObjectLike(value) {
    return typeof value == 'object' && value !== null;
}
const SYMBOL_ITERATOR = typeof Symbol === 'function' ? Symbol.iterator : '@@iterator';
typeof Symbol === 'function' ? Symbol.asyncIterator : '@@asyncIterator';
const SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' ? Symbol.toStringTag : '@@toStringTag';
function getLocation(source, position) {
    const lineRegexp = /\r\n|[\n\r]/g;
    let line = 1;
    let column = position + 1;
    let match1;
    while((match1 = lineRegexp.exec(source.body)) && match1.index < position){
        line += 1;
        column = position + 1 - (match1.index + match1[0].length);
    }
    return {
        line,
        column
    };
}
function printLocation(location) {
    return printSourceLocation(location.source, getLocation(location.source, location.start));
}
function printSourceLocation(source, sourceLocation) {
    const firstLineColumnOffset = source.locationOffset.column - 1;
    const body = whitespace(firstLineColumnOffset) + source.body;
    const lineIndex = sourceLocation.line - 1;
    const lineOffset = source.locationOffset.line - 1;
    const lineNum = sourceLocation.line + lineOffset;
    const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    const columnNum = sourceLocation.column + columnOffset;
    const locationStr = `${source.name}:${lineNum}:${columnNum}\n`;
    const lines = body.split(/\r\n|[\n\r]/g);
    const locationLine = lines[lineIndex];
    if (locationLine.length > 120) {
        const subLineIndex = Math.floor(columnNum / 80);
        const subLineColumnNum = columnNum % 80;
        const subLines = [];
        for(let i21 = 0; i21 < locationLine.length; i21 += 80){
            subLines.push(locationLine.slice(i21, i21 + 80));
        }
        return locationStr + printPrefixedLines([
            [
                `${lineNum}`,
                subLines[0]
            ],
            ...subLines.slice(1, subLineIndex + 1).map((subLine)=>[
                    '',
                    subLine
                ]
            ),
            [
                ' ',
                whitespace(subLineColumnNum - 1) + '^'
            ],
            [
                '',
                subLines[subLineIndex + 1]
            ]
        ]);
    }
    return locationStr + printPrefixedLines([
        [
            `${lineNum - 1}`,
            lines[lineIndex - 1]
        ],
        [
            `${lineNum}`,
            locationLine
        ],
        [
            '',
            whitespace(columnNum - 1) + '^'
        ],
        [
            `${lineNum + 1}`,
            lines[lineIndex + 1]
        ]
    ]);
}
function printPrefixedLines(lines) {
    const existingLines = lines.filter(([_, line])=>line !== undefined
    );
    const padLen = Math.max(...existingLines.map(([prefix])=>prefix.length
    ));
    return existingLines.map(([prefix, line])=>leftPad(padLen, prefix) + (line ? ' | ' + line : ' |')
    ).join('\n');
}
function whitespace(len) {
    return Array(len + 1).join(' ');
}
function leftPad(len, str) {
    return whitespace(len - str.length) + str;
}
class GraphQLError extends Error {
    constructor(message, nodes, source, positions, path26, originalError, extensions1){
        super(message);
        const _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [
            nodes
        ] : undefined;
        let _source = source;
        if (!_source && _nodes) {
            _source = _nodes[0].loc?.source;
        }
        let _positions = positions;
        if (!_positions && _nodes) {
            _positions = _nodes.reduce((list1, node)=>{
                if (node.loc) {
                    list1.push(node.loc.start);
                }
                return list1;
            }, []);
        }
        if (_positions && _positions.length === 0) {
            _positions = undefined;
        }
        let _locations;
        if (positions && source) {
            _locations = positions.map((pos)=>getLocation(source, pos)
            );
        } else if (_nodes) {
            _locations = _nodes.reduce((list2, node)=>{
                if (node.loc) {
                    list2.push(getLocation(node.loc.source, node.loc.start));
                }
                return list2;
            }, []);
        }
        let _extensions = extensions1;
        if (_extensions == null && originalError != null) {
            const originalExtensions = originalError.extensions;
            if (isObjectLike(originalExtensions)) {
                _extensions = originalExtensions;
            }
        }
        Object.defineProperties(this, {
            name: {
                value: 'GraphQLError'
            },
            message: {
                value: message,
                enumerable: true,
                writable: true
            },
            locations: {
                value: _locations ?? undefined,
                enumerable: _locations != null
            },
            path: {
                value: path26 ?? undefined,
                enumerable: path26 != null
            },
            nodes: {
                value: _nodes ?? undefined
            },
            source: {
                value: _source ?? undefined
            },
            positions: {
                value: _positions ?? undefined
            },
            originalError: {
                value: originalError
            },
            extensions: {
                value: _extensions ?? undefined,
                enumerable: _extensions != null
            }
        });
        if (originalError?.stack) {
            Object.defineProperty(this, 'stack', {
                value: originalError.stack,
                writable: true,
                configurable: true
            });
            return;
        }
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, GraphQLError);
        } else {
            Object.defineProperty(this, 'stack', {
                value: Error().stack,
                writable: true,
                configurable: true
            });
        }
    }
    toString() {
        return printError(this);
    }
    get [SYMBOL_TO_STRING_TAG]() {
        return 'Object';
    }
}
function printError(error) {
    let output = error.message;
    if (error.nodes) {
        for (const node of error.nodes){
            if (node.loc) {
                output += '\n\n' + printLocation(node.loc);
            }
        }
    } else if (error.source && error.locations) {
        for (const location of error.locations){
            output += '\n\n' + printSourceLocation(error.source, location);
        }
    }
    return output;
}
function syntaxError(source, position, description) {
    return new GraphQLError(`Syntax Error: ${description}`, undefined, source, [
        position
    ]);
}
const Kind = Object.freeze({
    NAME: 'Name',
    DOCUMENT: 'Document',
    OPERATION_DEFINITION: 'OperationDefinition',
    VARIABLE_DEFINITION: 'VariableDefinition',
    SELECTION_SET: 'SelectionSet',
    FIELD: 'Field',
    ARGUMENT: 'Argument',
    FRAGMENT_SPREAD: 'FragmentSpread',
    INLINE_FRAGMENT: 'InlineFragment',
    FRAGMENT_DEFINITION: 'FragmentDefinition',
    VARIABLE: 'Variable',
    INT: 'IntValue',
    FLOAT: 'FloatValue',
    STRING: 'StringValue',
    BOOLEAN: 'BooleanValue',
    NULL: 'NullValue',
    ENUM: 'EnumValue',
    LIST: 'ListValue',
    OBJECT: 'ObjectValue',
    OBJECT_FIELD: 'ObjectField',
    DIRECTIVE: 'Directive',
    NAMED_TYPE: 'NamedType',
    LIST_TYPE: 'ListType',
    NON_NULL_TYPE: 'NonNullType',
    SCHEMA_DEFINITION: 'SchemaDefinition',
    OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
    SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
    OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
    FIELD_DEFINITION: 'FieldDefinition',
    INPUT_VALUE_DEFINITION: 'InputValueDefinition',
    INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
    UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
    ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
    ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
    INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
    DIRECTIVE_DEFINITION: 'DirectiveDefinition',
    SCHEMA_EXTENSION: 'SchemaExtension',
    SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
    OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
    INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
    UNION_TYPE_EXTENSION: 'UnionTypeExtension',
    ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
    INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
class Source {
    constructor(body, name = 'GraphQL request', locationOffset = {
        line: 1,
        column: 1
    }){
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        devAssert(this.locationOffset.line > 0, 'line in locationOffset is 1-indexed and must be positive.');
        devAssert(this.locationOffset.column > 0, 'column in locationOffset is 1-indexed and must be positive.');
    }
    get [SYMBOL_TO_STRING_TAG]() {
        return 'Source';
    }
}
const DirectiveLocation = Object.freeze({
    QUERY: 'QUERY',
    MUTATION: 'MUTATION',
    SUBSCRIPTION: 'SUBSCRIPTION',
    FIELD: 'FIELD',
    FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
    FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
    INLINE_FRAGMENT: 'INLINE_FRAGMENT',
    VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
    SCHEMA: 'SCHEMA',
    SCALAR: 'SCALAR',
    OBJECT: 'OBJECT',
    FIELD_DEFINITION: 'FIELD_DEFINITION',
    ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
    INTERFACE: 'INTERFACE',
    UNION: 'UNION',
    ENUM: 'ENUM',
    ENUM_VALUE: 'ENUM_VALUE',
    INPUT_OBJECT: 'INPUT_OBJECT',
    INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
const TokenKind = Object.freeze({
    SOF: '<SOF>',
    EOF: '<EOF>',
    BANG: '!',
    DOLLAR: '$',
    AMP: '&',
    PAREN_L: '(',
    PAREN_R: ')',
    SPREAD: '...',
    COLON: ':',
    EQUALS: '=',
    AT: '@',
    BRACKET_L: '[',
    BRACKET_R: ']',
    BRACE_L: '{',
    PIPE: '|',
    BRACE_R: '}',
    NAME: 'Name',
    INT: 'Int',
    FLOAT: 'Float',
    STRING: 'String',
    BLOCK_STRING: 'BlockString',
    COMMENT: 'Comment'
});
function defineToJSON(classObject, fn = classObject.prototype.toString) {
    classObject.prototype.toJSON = fn;
    classObject.prototype.inspect = fn;
    if (nodejsCustomInspectSymbol) {
        classObject.prototype[nodejsCustomInspectSymbol] = fn;
    }
}
class Location {
    constructor(startToken, endToken, source){
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
    }
}
defineToJSON(Location, function() {
    return {
        start: this.start,
        end: this.end
    };
});
class Token {
    constructor(kind, start, end, line, column, prev, value){
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column;
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
}
defineToJSON(Token, function() {
    return {
        kind: this.kind,
        value: this.value,
        line: this.line,
        column: this.column
    };
});
function isNode(maybeNode) {
    return maybeNode != null && typeof maybeNode.kind === 'string';
}
function dedentBlockStringValue(rawString) {
    const lines = rawString.split(/\r\n|[\n\r]/g);
    const commonIndent = getBlockStringIndentation(lines);
    if (commonIndent !== 0) {
        for(let i22 = 1; i22 < lines.length; i22++){
            lines[i22] = lines[i22].slice(commonIndent);
        }
    }
    while(lines.length > 0 && isBlank(lines[0])){
        lines.shift();
    }
    while(lines.length > 0 && isBlank(lines[lines.length - 1])){
        lines.pop();
    }
    return lines.join('\n');
}
function getBlockStringIndentation(lines) {
    let commonIndent = null;
    for(let i23 = 1; i23 < lines.length; i23++){
        const line = lines[i23];
        const indent1 = leadingWhitespace(line);
        if (indent1 === line.length) {
            continue;
        }
        if (commonIndent === null || indent1 < commonIndent) {
            commonIndent = indent1;
            if (commonIndent === 0) {
                break;
            }
        }
    }
    return commonIndent === null ? 0 : commonIndent;
}
function leadingWhitespace(str) {
    let i24 = 0;
    while(i24 < str.length && (str[i24] === ' ' || str[i24] === '\t')){
        i24++;
    }
    return i24;
}
function isBlank(str) {
    return leadingWhitespace(str) === str.length;
}
function printBlockString(value, indentation = '', preferMultipleLines = false) {
    const isSingleLine = value.indexOf('\n') === -1;
    const hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
    const hasTrailingQuote = value[value.length - 1] === '"';
    const printAsMultipleLines = !isSingleLine || hasTrailingQuote || preferMultipleLines;
    let result = '';
    if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
        result += '\n' + indentation;
    }
    result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;
    if (printAsMultipleLines) {
        result += '\n';
    }
    return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}
class Lexer {
    constructor(source){
        const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0, null);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
    }
    advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
    }
    lookahead() {
        let token = this.token;
        if (token.kind !== TokenKind.EOF) {
            do {
                token = token.next ?? (token.next = readToken(this, token));
            }while (token.kind === TokenKind.COMMENT)
        }
        return token;
    }
}
function isPunctuatorTokenKind(kind) {
    return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function printCharCode(code17) {
    return isNaN(code17) ? TokenKind.EOF : code17 < 127 ? JSON.stringify(String.fromCharCode(code17)) : `"\\u${('00' + code17.toString(16).toUpperCase()).slice(-4)}"`;
}
function readToken(lexer, prev) {
    const source = lexer.source;
    const body = source.body;
    const bodyLength = body.length;
    const pos = positionAfterWhitespace(body, prev.end, lexer);
    const line = lexer.line;
    const col = 1 + pos - lexer.lineStart;
    if (pos >= bodyLength) {
        return new Token(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
    }
    const code18 = body.charCodeAt(pos);
    switch(code18){
        case 33:
            return new Token(TokenKind.BANG, pos, pos + 1, line, col, prev);
        case 35:
            return readComment(source, pos, line, col, prev);
        case 36:
            return new Token(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
        case 38:
            return new Token(TokenKind.AMP, pos, pos + 1, line, col, prev);
        case 40:
            return new Token(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
        case 41:
            return new Token(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
        case 46:
            if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
                return new Token(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
            }
            break;
        case 58:
            return new Token(TokenKind.COLON, pos, pos + 1, line, col, prev);
        case 61:
            return new Token(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
        case 64:
            return new Token(TokenKind.AT, pos, pos + 1, line, col, prev);
        case 91:
            return new Token(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
        case 93:
            return new Token(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
        case 123:
            return new Token(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
        case 124:
            return new Token(TokenKind.PIPE, pos, pos + 1, line, col, prev);
        case 125:
            return new Token(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 95:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
            return readName(source, pos, line, col, prev);
        case 45:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            return readNumber(source, pos, code18, line, col, prev);
        case 34:
            if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
                return readBlockString(source, pos, line, col, prev, lexer);
            }
            return readString(source, pos, line, col, prev);
    }
    throw syntaxError(source, pos, unexpectedCharacterMessage(code18));
}
function unexpectedCharacterMessage(code19) {
    if (code19 < 32 && code19 !== 9 && code19 !== 10 && code19 !== 13) {
        return `Cannot contain the invalid character ${printCharCode(code19)}.`;
    }
    if (code19 === 39) {
        return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
    }
    return `Cannot parse the unexpected character ${printCharCode(code19)}.`;
}
function positionAfterWhitespace(body, startPosition, lexer) {
    const bodyLength = body.length;
    let position = startPosition;
    while(position < bodyLength){
        const code20 = body.charCodeAt(position);
        if (code20 === 9 || code20 === 32 || code20 === 44 || code20 === 65279) {
            ++position;
        } else if (code20 === 10) {
            ++position;
            ++lexer.line;
            lexer.lineStart = position;
        } else if (code20 === 13) {
            if (body.charCodeAt(position + 1) === 10) {
                position += 2;
            } else {
                ++position;
            }
            ++lexer.line;
            lexer.lineStart = position;
        } else {
            break;
        }
    }
    return position;
}
function readComment(source, start, line, col, prev) {
    const body = source.body;
    let code21;
    let position = start;
    do {
        code21 = body.charCodeAt(++position);
    }while (!isNaN(code21) && (code21 > 31 || code21 === 9))
    return new Token(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
function readNumber(source, start, firstCode, line, col, prev) {
    const body = source.body;
    let code22 = firstCode;
    let position = start;
    let isFloat = false;
    if (code22 === 45) {
        code22 = body.charCodeAt(++position);
    }
    if (code22 === 48) {
        code22 = body.charCodeAt(++position);
        if (code22 >= 48 && code22 <= 57) {
            throw syntaxError(source, position, `Invalid number, unexpected digit after 0: ${printCharCode(code22)}.`);
        }
    } else {
        position = readDigits(source, position, code22);
        code22 = body.charCodeAt(position);
    }
    if (code22 === 46) {
        isFloat = true;
        code22 = body.charCodeAt(++position);
        position = readDigits(source, position, code22);
        code22 = body.charCodeAt(position);
    }
    if (code22 === 69 || code22 === 101) {
        isFloat = true;
        code22 = body.charCodeAt(++position);
        if (code22 === 43 || code22 === 45) {
            code22 = body.charCodeAt(++position);
        }
        position = readDigits(source, position, code22);
        code22 = body.charCodeAt(position);
    }
    if (code22 === 46 || isNameStart(code22)) {
        throw syntaxError(source, position, `Invalid number, expected digit but got: ${printCharCode(code22)}.`);
    }
    return new Token(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
function readDigits(source, start, firstCode) {
    const body = source.body;
    let position = start;
    let code23 = firstCode;
    if (code23 >= 48 && code23 <= 57) {
        do {
            code23 = body.charCodeAt(++position);
        }while (code23 >= 48 && code23 <= 57)
        return position;
    }
    throw syntaxError(source, position, `Invalid number, expected digit but got: ${printCharCode(code23)}.`);
}
function readString(source, start, line, col, prev) {
    const body = source.body;
    let position = start + 1;
    let chunkStart = position;
    let code24 = 0;
    let value = '';
    while(position < body.length && !isNaN(code24 = body.charCodeAt(position)) && code24 !== 10 && code24 !== 13){
        if (code24 === 34) {
            value += body.slice(chunkStart, position);
            return new Token(TokenKind.STRING, start, position + 1, line, col, prev, value);
        }
        if (code24 < 32 && code24 !== 9) {
            throw syntaxError(source, position, `Invalid character within String: ${printCharCode(code24)}.`);
        }
        ++position;
        if (code24 === 92) {
            value += body.slice(chunkStart, position - 1);
            code24 = body.charCodeAt(position);
            switch(code24){
                case 34:
                    value += '"';
                    break;
                case 47:
                    value += '/';
                    break;
                case 92:
                    value += '\\';
                    break;
                case 98:
                    value += '\b';
                    break;
                case 102:
                    value += '\f';
                    break;
                case 110:
                    value += '\n';
                    break;
                case 114:
                    value += '\r';
                    break;
                case 116:
                    value += '\t';
                    break;
                case 117:
                    {
                        const charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));
                        if (charCode < 0) {
                            const invalidSequence = body.slice(position + 1, position + 5);
                            throw syntaxError(source, position, `Invalid character escape sequence: \\u${invalidSequence}.`);
                        }
                        value += String.fromCharCode(charCode);
                        position += 4;
                        break;
                    }
                default:
                    throw syntaxError(source, position, `Invalid character escape sequence: \\${String.fromCharCode(code24)}.`);
            }
            ++position;
            chunkStart = position;
        }
    }
    throw syntaxError(source, position, 'Unterminated string.');
}
function readBlockString(source, start, line, col, prev, lexer) {
    const body = source.body;
    let position = start + 3;
    let chunkStart = position;
    let code25 = 0;
    let rawValue = '';
    while(position < body.length && !isNaN(code25 = body.charCodeAt(position))){
        if (code25 === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
            rawValue += body.slice(chunkStart, position);
            return new Token(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
        }
        if (code25 < 32 && code25 !== 9 && code25 !== 10 && code25 !== 13) {
            throw syntaxError(source, position, `Invalid character within String: ${printCharCode(code25)}.`);
        }
        if (code25 === 10) {
            ++position;
            ++lexer.line;
            lexer.lineStart = position;
        } else if (code25 === 13) {
            if (body.charCodeAt(position + 1) === 10) {
                position += 2;
            } else {
                ++position;
            }
            ++lexer.line;
            lexer.lineStart = position;
        } else if (code25 === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
            rawValue += body.slice(chunkStart, position) + '"""';
            position += 4;
            chunkStart = position;
        } else {
            ++position;
        }
    }
    throw syntaxError(source, position, 'Unterminated string.');
}
function uniCharCode(a3, b2, c3, d2) {
    return char2hex(a3) << 12 | char2hex(b2) << 8 | char2hex(c3) << 4 | char2hex(d2);
}
function char2hex(a4) {
    return a4 >= 48 && a4 <= 57 ? a4 - 48 : a4 >= 65 && a4 <= 70 ? a4 - 55 : a4 >= 97 && a4 <= 102 ? a4 - 87 : -1;
}
function readName(source, start, line, col, prev) {
    const body = source.body;
    const bodyLength = body.length;
    let position = start + 1;
    let code26 = 0;
    while(position !== bodyLength && !isNaN(code26 = body.charCodeAt(position)) && (code26 === 95 || code26 >= 48 && code26 <= 57 || code26 >= 65 && code26 <= 90 || code26 >= 97 && code26 <= 122)){
        ++position;
    }
    return new Token(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
}
function isNameStart(code27) {
    return code27 === 95 || code27 >= 65 && code27 <= 90 || code27 >= 97 && code27 <= 122;
}
function parse4(source, options) {
    const parser = new Parser(source, options);
    return parser.parseDocument();
}
class Parser {
    constructor(source, options){
        const sourceObj = typeof source === 'string' ? new Source(source) : source;
        devAssert(sourceObj instanceof Source, `Must provide Source. Received: ${inspect(sourceObj)}.`);
        this._lexer = new Lexer(sourceObj);
        this._options = options;
    }
    parseName() {
        const token = this.expectToken(TokenKind.NAME);
        return {
            kind: Kind.NAME,
            value: token.value,
            loc: this.loc(token)
        };
    }
    parseDocument() {
        const start = this._lexer.token;
        return {
            kind: Kind.DOCUMENT,
            definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
            loc: this.loc(start)
        };
    }
    parseDefinition() {
        if (this.peek(TokenKind.NAME)) {
            switch(this._lexer.token.value){
                case 'query':
                case 'mutation':
                case 'subscription':
                    return this.parseOperationDefinition();
                case 'fragment':
                    return this.parseFragmentDefinition();
                case 'schema':
                case 'scalar':
                case 'type':
                case 'interface':
                case 'union':
                case 'enum':
                case 'input':
                case 'directive':
                    return this.parseTypeSystemDefinition();
                case 'extend':
                    return this.parseTypeSystemExtension();
            }
        } else if (this.peek(TokenKind.BRACE_L)) {
            return this.parseOperationDefinition();
        } else if (this.peekDescription()) {
            return this.parseTypeSystemDefinition();
        }
        throw this.unexpected();
    }
    parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek(TokenKind.BRACE_L)) {
            return {
                kind: Kind.OPERATION_DEFINITION,
                operation: 'query',
                name: undefined,
                variableDefinitions: [],
                directives: [],
                selectionSet: this.parseSelectionSet(),
                loc: this.loc(start)
            };
        }
        const operation = this.parseOperationType();
        let name;
        if (this.peek(TokenKind.NAME)) {
            name = this.parseName();
        }
        return {
            kind: Kind.OPERATION_DEFINITION,
            operation,
            name,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
        };
    }
    parseOperationType() {
        const operationToken = this.expectToken(TokenKind.NAME);
        switch(operationToken.value){
            case 'query':
                return 'query';
            case 'mutation':
                return 'mutation';
            case 'subscription':
                return 'subscription';
        }
        throw this.unexpected(operationToken);
    }
    parseVariableDefinitions() {
        return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
    }
    parseVariableDefinition() {
        const start = this._lexer.token;
        return {
            kind: Kind.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
            directives: this.parseDirectives(true),
            loc: this.loc(start)
        };
    }
    parseVariable() {
        const start = this._lexer.token;
        this.expectToken(TokenKind.DOLLAR);
        return {
            kind: Kind.VARIABLE,
            name: this.parseName(),
            loc: this.loc(start)
        };
    }
    parseSelectionSet() {
        const start = this._lexer.token;
        return {
            kind: Kind.SELECTION_SET,
            selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
            loc: this.loc(start)
        };
    }
    parseSelection() {
        return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
    }
    parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken(TokenKind.COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
        } else {
            name = nameOrAlias;
        }
        return {
            kind: Kind.FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
            loc: this.loc(start)
        };
    }
    parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
    }
    parseArgument() {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return {
            kind: Kind.ARGUMENT,
            name,
            value: this.parseValueLiteral(false),
            loc: this.loc(start)
        };
    }
    parseConstArgument() {
        const start = this._lexer.token;
        return {
            kind: Kind.ARGUMENT,
            name: this.parseName(),
            value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
            loc: this.loc(start)
        };
    }
    parseFragment() {
        const start = this._lexer.token;
        this.expectToken(TokenKind.SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword('on');
        if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
            return {
                kind: Kind.FRAGMENT_SPREAD,
                name: this.parseFragmentName(),
                directives: this.parseDirectives(false),
                loc: this.loc(start)
            };
        }
        return {
            kind: Kind.INLINE_FRAGMENT,
            typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
        };
    }
    parseFragmentDefinition() {
        const start = this._lexer.token;
        this.expectKeyword('fragment');
        if (this._options?.experimentalFragmentVariables === true) {
            return {
                kind: Kind.FRAGMENT_DEFINITION,
                name: this.parseFragmentName(),
                variableDefinitions: this.parseVariableDefinitions(),
                typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
                directives: this.parseDirectives(false),
                selectionSet: this.parseSelectionSet(),
                loc: this.loc(start)
            };
        }
        return {
            kind: Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
        };
    }
    parseFragmentName() {
        if (this._lexer.token.value === 'on') {
            throw this.unexpected();
        }
        return this.parseName();
    }
    parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch(token.kind){
            case TokenKind.BRACKET_L:
                return this.parseList(isConst);
            case TokenKind.BRACE_L:
                return this.parseObject(isConst);
            case TokenKind.INT:
                this._lexer.advance();
                return {
                    kind: Kind.INT,
                    value: token.value,
                    loc: this.loc(token)
                };
            case TokenKind.FLOAT:
                this._lexer.advance();
                return {
                    kind: Kind.FLOAT,
                    value: token.value,
                    loc: this.loc(token)
                };
            case TokenKind.STRING:
            case TokenKind.BLOCK_STRING:
                return this.parseStringLiteral();
            case TokenKind.NAME:
                this._lexer.advance();
                switch(token.value){
                    case 'true':
                        return {
                            kind: Kind.BOOLEAN,
                            value: true,
                            loc: this.loc(token)
                        };
                    case 'false':
                        return {
                            kind: Kind.BOOLEAN,
                            value: false,
                            loc: this.loc(token)
                        };
                    case 'null':
                        return {
                            kind: Kind.NULL,
                            loc: this.loc(token)
                        };
                    default:
                        return {
                            kind: Kind.ENUM,
                            value: token.value,
                            loc: this.loc(token)
                        };
                }
            case TokenKind.DOLLAR:
                if (!isConst) {
                    return this.parseVariable();
                }
                break;
        }
        throw this.unexpected();
    }
    parseStringLiteral() {
        const token = this._lexer.token;
        this._lexer.advance();
        return {
            kind: Kind.STRING,
            value: token.value,
            block: token.kind === TokenKind.BLOCK_STRING,
            loc: this.loc(token)
        };
    }
    parseList(isConst) {
        const start = this._lexer.token;
        const item = ()=>this.parseValueLiteral(isConst)
        ;
        return {
            kind: Kind.LIST,
            values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
            loc: this.loc(start)
        };
    }
    parseObject(isConst) {
        const start = this._lexer.token;
        const item = ()=>this.parseObjectField(isConst)
        ;
        return {
            kind: Kind.OBJECT,
            fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
            loc: this.loc(start)
        };
    }
    parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return {
            kind: Kind.OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst),
            loc: this.loc(start)
        };
    }
    parseDirectives(isConst) {
        const directives = [];
        while(this.peek(TokenKind.AT)){
            directives.push(this.parseDirective(isConst));
        }
        return directives;
    }
    parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken(TokenKind.AT);
        return {
            kind: Kind.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(isConst),
            loc: this.loc(start)
        };
    }
    parseTypeReference() {
        const start = this._lexer.token;
        let type2;
        if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
            type2 = this.parseTypeReference();
            this.expectToken(TokenKind.BRACKET_R);
            type2 = {
                kind: Kind.LIST_TYPE,
                type: type2,
                loc: this.loc(start)
            };
        } else {
            type2 = this.parseNamedType();
        }
        if (this.expectOptionalToken(TokenKind.BANG)) {
            return {
                kind: Kind.NON_NULL_TYPE,
                type: type2,
                loc: this.loc(start)
            };
        }
        return type2;
    }
    parseNamedType() {
        const start = this._lexer.token;
        return {
            kind: Kind.NAMED_TYPE,
            name: this.parseName(),
            loc: this.loc(start)
        };
    }
    parseTypeSystemDefinition() {
        const keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === TokenKind.NAME) {
            switch(keywordToken.value){
                case 'schema':
                    return this.parseSchemaDefinition();
                case 'scalar':
                    return this.parseScalarTypeDefinition();
                case 'type':
                    return this.parseObjectTypeDefinition();
                case 'interface':
                    return this.parseInterfaceTypeDefinition();
                case 'union':
                    return this.parseUnionTypeDefinition();
                case 'enum':
                    return this.parseEnumTypeDefinition();
                case 'input':
                    return this.parseInputObjectTypeDefinition();
                case 'directive':
                    return this.parseDirectiveDefinition();
            }
        }
        throw this.unexpected(keywordToken);
    }
    peekDescription() {
        return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
    }
    parseDescription() {
        if (this.peekDescription()) {
            return this.parseStringLiteral();
        }
    }
    parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('schema');
        const directives = this.parseDirectives(true);
        const operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
        return {
            kind: Kind.SCHEMA_DEFINITION,
            description,
            directives,
            operationTypes,
            loc: this.loc(start)
        };
    }
    parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken(TokenKind.COLON);
        const type3 = this.parseNamedType();
        return {
            kind: Kind.OPERATION_TYPE_DEFINITION,
            operation,
            type: type3,
            loc: this.loc(start)
        };
    }
    parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('scalar');
        const name = this.parseName();
        const directives = this.parseDirectives(true);
        return {
            kind: Kind.SCALAR_TYPE_DEFINITION,
            description,
            name,
            directives,
            loc: this.loc(start)
        };
    }
    parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('type');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseDirectives(true);
        const fields = this.parseFieldsDefinition();
        return {
            kind: Kind.OBJECT_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
        };
    }
    parseImplementsInterfaces() {
        const types1 = [];
        if (this.expectOptionalKeyword('implements')) {
            this.expectOptionalToken(TokenKind.AMP);
            do {
                types1.push(this.parseNamedType());
            }while (this.expectOptionalToken(TokenKind.AMP) || this._options?.allowLegacySDLImplementsInterfaces === true && this.peek(TokenKind.NAME))
        }
        return types1;
    }
    parseFieldsDefinition() {
        if (this._options?.allowLegacySDLEmptyFields === true && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
            this._lexer.advance();
            this._lexer.advance();
            return [];
        }
        return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
    }
    parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(TokenKind.COLON);
        const type4 = this.parseTypeReference();
        const directives = this.parseDirectives(true);
        return {
            kind: Kind.FIELD_DEFINITION,
            description,
            name,
            arguments: args,
            type: type4,
            directives,
            loc: this.loc(start)
        };
    }
    parseArgumentDefs() {
        return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
    }
    parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        const type5 = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(TokenKind.EQUALS)) {
            defaultValue = this.parseValueLiteral(true);
        }
        const directives = this.parseDirectives(true);
        return {
            kind: Kind.INPUT_VALUE_DEFINITION,
            description,
            name,
            type: type5,
            defaultValue,
            directives,
            loc: this.loc(start)
        };
    }
    parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('interface');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseDirectives(true);
        const fields = this.parseFieldsDefinition();
        return {
            kind: Kind.INTERFACE_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
        };
    }
    parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('union');
        const name = this.parseName();
        const directives = this.parseDirectives(true);
        const types2 = this.parseUnionMemberTypes();
        return {
            kind: Kind.UNION_TYPE_DEFINITION,
            description,
            name,
            directives,
            types: types2,
            loc: this.loc(start)
        };
    }
    parseUnionMemberTypes() {
        const types3 = [];
        if (this.expectOptionalToken(TokenKind.EQUALS)) {
            this.expectOptionalToken(TokenKind.PIPE);
            do {
                types3.push(this.parseNamedType());
            }while (this.expectOptionalToken(TokenKind.PIPE))
        }
        return types3;
    }
    parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('enum');
        const name = this.parseName();
        const directives = this.parseDirectives(true);
        const values1 = this.parseEnumValuesDefinition();
        return {
            kind: Kind.ENUM_TYPE_DEFINITION,
            description,
            name,
            directives,
            values: values1,
            loc: this.loc(start)
        };
    }
    parseEnumValuesDefinition() {
        return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
    }
    parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const directives = this.parseDirectives(true);
        return {
            kind: Kind.ENUM_VALUE_DEFINITION,
            description,
            name,
            directives,
            loc: this.loc(start)
        };
    }
    parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('input');
        const name = this.parseName();
        const directives = this.parseDirectives(true);
        const fields = this.parseInputFieldsDefinition();
        return {
            kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
            description,
            name,
            directives,
            fields,
            loc: this.loc(start)
        };
    }
    parseInputFieldsDefinition() {
        return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
    }
    parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === TokenKind.NAME) {
            switch(keywordToken.value){
                case 'schema':
                    return this.parseSchemaExtension();
                case 'scalar':
                    return this.parseScalarTypeExtension();
                case 'type':
                    return this.parseObjectTypeExtension();
                case 'interface':
                    return this.parseInterfaceTypeExtension();
                case 'union':
                    return this.parseUnionTypeExtension();
                case 'enum':
                    return this.parseEnumTypeExtension();
                case 'input':
                    return this.parseInputObjectTypeExtension();
            }
        }
        throw this.unexpected(keywordToken);
    }
    parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('schema');
        const directives = this.parseDirectives(true);
        const operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
        if (directives.length === 0 && operationTypes.length === 0) {
            throw this.unexpected();
        }
        return {
            kind: Kind.SCHEMA_EXTENSION,
            directives,
            operationTypes,
            loc: this.loc(start)
        };
    }
    parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('scalar');
        const name = this.parseName();
        const directives = this.parseDirectives(true);
        if (directives.length === 0) {
            throw this.unexpected();
        }
        return {
            kind: Kind.SCALAR_TYPE_EXTENSION,
            name,
            directives,
            loc: this.loc(start)
        };
    }
    parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('type');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseDirectives(true);
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return {
            kind: Kind.OBJECT_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
        };
    }
    parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('interface');
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseDirectives(true);
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return {
            kind: Kind.INTERFACE_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
        };
    }
    parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('union');
        const name = this.parseName();
        const directives = this.parseDirectives(true);
        const types4 = this.parseUnionMemberTypes();
        if (directives.length === 0 && types4.length === 0) {
            throw this.unexpected();
        }
        return {
            kind: Kind.UNION_TYPE_EXTENSION,
            name,
            directives,
            types: types4,
            loc: this.loc(start)
        };
    }
    parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('enum');
        const name = this.parseName();
        const directives = this.parseDirectives(true);
        const values2 = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values2.length === 0) {
            throw this.unexpected();
        }
        return {
            kind: Kind.ENUM_TYPE_EXTENSION,
            name,
            directives,
            values: values2,
            loc: this.loc(start)
        };
    }
    parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('input');
        const name = this.parseName();
        const directives = this.parseDirectives(true);
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
        }
        return {
            kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
            name,
            directives,
            fields,
            loc: this.loc(start)
        };
    }
    parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword('directive');
        this.expectToken(TokenKind.AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword('repeatable');
        this.expectKeyword('on');
        const locations = this.parseDirectiveLocations();
        return {
            kind: Kind.DIRECTIVE_DEFINITION,
            description,
            name,
            arguments: args,
            repeatable,
            locations,
            loc: this.loc(start)
        };
    }
    parseDirectiveLocations() {
        this.expectOptionalToken(TokenKind.PIPE);
        const locations = [];
        do {
            locations.push(this.parseDirectiveLocation());
        }while (this.expectOptionalToken(TokenKind.PIPE))
        return locations;
    }
    parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (DirectiveLocation[name.value] !== undefined) {
            return name;
        }
        throw this.unexpected(start);
    }
    loc(startToken) {
        if (this._options?.noLocation !== true) {
            return new Location(startToken, this._lexer.lastToken, this._lexer.source);
        }
    }
    peek(kind) {
        return this._lexer.token.kind === kind;
    }
    expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this._lexer.advance();
            return token;
        }
        throw syntaxError(this._lexer.source, token.start, `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`);
    }
    expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
            this._lexer.advance();
            return token;
        }
        return undefined;
    }
    expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
            this._lexer.advance();
        } else {
            throw syntaxError(this._lexer.source, token.start, `Expected "${value}", found ${getTokenDesc(token)}.`);
        }
    }
    expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
            this._lexer.advance();
            return true;
        }
        return false;
    }
    unexpected(atToken) {
        const token = atToken ?? this._lexer.token;
        return syntaxError(this._lexer.source, token.start, `Unexpected ${getTokenDesc(token)}.`);
    }
    any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while(!this.expectOptionalToken(closeKind)){
            nodes.push(parseFn.call(this));
        }
        return nodes;
    }
    optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
            const nodes = [];
            do {
                nodes.push(parseFn.call(this));
            }while (!this.expectOptionalToken(closeKind))
            return nodes;
        }
        return [];
    }
    many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do {
            nodes.push(parseFn.call(this));
        }while (!this.expectOptionalToken(closeKind))
        return nodes;
    }
}
function getTokenDesc(token) {
    const value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : '');
}
function getTokenKindDesc(kind) {
    return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}
const QueryDocumentKeys = {
    Name: [],
    Document: [
        'definitions'
    ],
    OperationDefinition: [
        'name',
        'variableDefinitions',
        'directives',
        'selectionSet'
    ],
    VariableDefinition: [
        'variable',
        'type',
        'defaultValue',
        'directives'
    ],
    Variable: [
        'name'
    ],
    SelectionSet: [
        'selections'
    ],
    Field: [
        'alias',
        'name',
        'arguments',
        'directives',
        'selectionSet'
    ],
    Argument: [
        'name',
        'value'
    ],
    FragmentSpread: [
        'name',
        'directives'
    ],
    InlineFragment: [
        'typeCondition',
        'directives',
        'selectionSet'
    ],
    FragmentDefinition: [
        'name',
        'variableDefinitions',
        'typeCondition',
        'directives',
        'selectionSet'
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: [
        'values'
    ],
    ObjectValue: [
        'fields'
    ],
    ObjectField: [
        'name',
        'value'
    ],
    Directive: [
        'name',
        'arguments'
    ],
    NamedType: [
        'name'
    ],
    ListType: [
        'type'
    ],
    NonNullType: [
        'type'
    ],
    SchemaDefinition: [
        'description',
        'directives',
        'operationTypes'
    ],
    OperationTypeDefinition: [
        'type'
    ],
    ScalarTypeDefinition: [
        'description',
        'name',
        'directives'
    ],
    ObjectTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    FieldDefinition: [
        'description',
        'name',
        'arguments',
        'type',
        'directives'
    ],
    InputValueDefinition: [
        'description',
        'name',
        'type',
        'defaultValue',
        'directives'
    ],
    InterfaceTypeDefinition: [
        'description',
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    UnionTypeDefinition: [
        'description',
        'name',
        'directives',
        'types'
    ],
    EnumTypeDefinition: [
        'description',
        'name',
        'directives',
        'values'
    ],
    EnumValueDefinition: [
        'description',
        'name',
        'directives'
    ],
    InputObjectTypeDefinition: [
        'description',
        'name',
        'directives',
        'fields'
    ],
    DirectiveDefinition: [
        'description',
        'name',
        'arguments',
        'locations'
    ],
    SchemaExtension: [
        'directives',
        'operationTypes'
    ],
    ScalarTypeExtension: [
        'name',
        'directives'
    ],
    ObjectTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    InterfaceTypeExtension: [
        'name',
        'interfaces',
        'directives',
        'fields'
    ],
    UnionTypeExtension: [
        'name',
        'directives',
        'types'
    ],
    EnumTypeExtension: [
        'name',
        'directives',
        'values'
    ],
    InputObjectTypeExtension: [
        'name',
        'directives',
        'fields'
    ]
};
const BREAK = Object.freeze({});
function visit(root, visitor, visitorKeys = QueryDocumentKeys) {
    let stack = undefined;
    let inArray = Array.isArray(root);
    let keys2 = [
        root
    ];
    let index1 = -1;
    let edits = [];
    let node = undefined;
    let key = undefined;
    let parent = undefined;
    const path27 = [];
    const ancestors = [];
    let newRoot = root;
    do {
        index1++;
        const isLeaving = index1 === keys2.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
            key = ancestors.length === 0 ? undefined : path27[path27.length - 1];
            node = parent;
            parent = ancestors.pop();
            if (isEdited) {
                if (inArray) {
                    node = node.slice();
                } else {
                    const clone1 = {};
                    for (const k5 of Object.keys(node)){
                        clone1[k5] = node[k5];
                    }
                    node = clone1;
                }
                let editOffset = 0;
                for(let ii = 0; ii < edits.length; ii++){
                    let editKey = edits[ii][0];
                    const editValue = edits[ii][1];
                    if (inArray) {
                        editKey -= editOffset;
                    }
                    if (inArray && editValue === null) {
                        node.splice(editKey, 1);
                        editOffset++;
                    } else {
                        node[editKey] = editValue;
                    }
                }
            }
            index1 = stack.index;
            keys2 = stack.keys;
            edits = stack.edits;
            inArray = stack.inArray;
            stack = stack.prev;
        } else {
            key = parent ? inArray ? index1 : keys2[index1] : undefined;
            node = parent ? parent[key] : newRoot;
            if (node === null || node === undefined) {
                continue;
            }
            if (parent) {
                path27.push(key);
            }
        }
        let result;
        if (!Array.isArray(node)) {
            if (!isNode(node)) {
                throw new Error(`Invalid AST Node: ${inspect(node)}.`);
            }
            const visitFn = getVisitFn(visitor, node.kind, isLeaving);
            if (visitFn) {
                result = visitFn.call(visitor, node, key, parent, path27, ancestors);
                if (result === BREAK) {
                    break;
                }
                if (result === false) {
                    if (!isLeaving) {
                        path27.pop();
                        continue;
                    }
                } else if (result !== undefined) {
                    edits.push([
                        key,
                        result
                    ]);
                    if (!isLeaving) {
                        if (isNode(result)) {
                            node = result;
                        } else {
                            path27.pop();
                            continue;
                        }
                    }
                }
            }
        }
        if (result === undefined && isEdited) {
            edits.push([
                key,
                node
            ]);
        }
        if (isLeaving) {
            path27.pop();
        } else {
            stack = {
                inArray,
                index: index1,
                keys: keys2,
                edits,
                prev: stack
            };
            inArray = Array.isArray(node);
            keys2 = inArray ? node : visitorKeys[node.kind] ?? [];
            index1 = -1;
            edits = [];
            if (parent) {
                ancestors.push(parent);
            }
            parent = node;
        }
    }while (stack !== undefined)
    if (edits.length !== 0) {
        newRoot = edits[edits.length - 1][1];
    }
    return newRoot;
}
function visitInParallel(visitors) {
    const skipping = new Array(visitors.length);
    return {
        enter (node) {
            for(let i25 = 0; i25 < visitors.length; i25++){
                if (skipping[i25] == null) {
                    const fn = getVisitFn(visitors[i25], node.kind, false);
                    if (fn) {
                        const result = fn.apply(visitors[i25], arguments);
                        if (result === false) {
                            skipping[i25] = node;
                        } else if (result === BREAK) {
                            skipping[i25] = BREAK;
                        } else if (result !== undefined) {
                            return result;
                        }
                    }
                }
            }
        },
        leave (node) {
            for(let i26 = 0; i26 < visitors.length; i26++){
                if (skipping[i26] == null) {
                    const fn = getVisitFn(visitors[i26], node.kind, true);
                    if (fn) {
                        const result = fn.apply(visitors[i26], arguments);
                        if (result === BREAK) {
                            skipping[i26] = BREAK;
                        } else if (result !== undefined && result !== false) {
                            return result;
                        }
                    }
                } else if (skipping[i26] === node) {
                    skipping[i26] = null;
                }
            }
        }
    };
}
function getVisitFn(visitor, kind, isLeaving) {
    const kindVisitor = visitor[kind];
    if (kindVisitor) {
        if (!isLeaving && typeof kindVisitor === 'function') {
            return kindVisitor;
        }
        const kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
        if (typeof kindSpecificVisitor === 'function') {
            return kindSpecificVisitor;
        }
    } else {
        const specificVisitor = isLeaving ? visitor.leave : visitor.enter;
        if (specificVisitor) {
            if (typeof specificVisitor === 'function') {
                return specificVisitor;
            }
            const specificKindVisitor = specificVisitor[kind];
            if (typeof specificKindVisitor === 'function') {
                return specificKindVisitor;
            }
        }
    }
}
const find = Array.prototype.find ? function(list3, predicate) {
    return Array.prototype.find.call(list3, predicate);
} : function(list4, predicate) {
    for (const value of list4){
        if (predicate(value)) {
            return value;
        }
    }
};
const flatMapMethod = Array.prototype.flatMap;
const flatMap = flatMapMethod ? function(list5, fn) {
    return flatMapMethod.call(list5, fn);
} : function(list6, fn) {
    let result = [];
    for (const item of list6){
        const value = fn(item);
        if (Array.isArray(value)) {
            result = result.concat(value);
        } else {
            result.push(value);
        }
    }
    return result;
};
const objectValues = Object.values || ((obj)=>Object.keys(obj).map((key)=>obj[key]
    )
);
function locatedError(originalError, nodes, path28) {
    if (Array.isArray(originalError.path)) {
        return originalError;
    }
    return new GraphQLError(originalError.message, originalError.nodes ?? nodes, originalError.source, originalError.positions, path28, originalError);
}
const NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
function isValidNameError(name) {
    devAssert(typeof name === 'string', 'Expected name to be a string.');
    if (name.length > 1 && name[0] === '_' && name[1] === '_') {
        return new GraphQLError(`Name "${name}" must not begin with "__", which is reserved by GraphQL introspection.`);
    }
    if (!NAME_RX.test(name)) {
        return new GraphQLError(`Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "${name}" does not.`);
    }
}
const objectEntries = Object.entries || ((obj)=>Object.keys(obj).map((key)=>[
            key,
            obj[key]
        ]
    )
);
function keyMap(list7, keyFn) {
    return list7.reduce((map1, item)=>{
        map1[keyFn(item)] = item;
        return map1;
    }, Object.create(null));
}
function mapValue(map2, fn) {
    const result = Object.create(null);
    for (const [key, value] of objectEntries(map2)){
        result[key] = fn(value, key);
    }
    return result;
}
function toObjMap(obj) {
    if (Object.getPrototypeOf(obj) === null) {
        return obj;
    }
    const map3 = Object.create(null);
    for (const [key, value] of objectEntries(obj)){
        map3[key] = value;
    }
    return map3;
}
function keyValMap(list8, keyFn, valFn) {
    return list8.reduce((map4, item)=>{
        map4[keyFn(item)] = valFn(item);
        return map4;
    }, Object.create(null));
}
const __default = Deno.env.NODE_ENV === 'production' ? function instanceOf(value, constructor) {
    return value instanceof constructor;
} : function instanceOf(value, constructor) {
    if (value instanceof constructor) {
        return true;
    }
    if (value) {
        const valueClass = value.constructor;
        const className = constructor.name;
        if (className && valueClass && valueClass.name === className) {
            throw new Error(`Cannot use ${className} "${value}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
    }
    return false;
};
function didYouMean(firstArg, secondArg) {
    const [subMessage, suggestionsArg] = typeof firstArg === 'string' ? [
        firstArg,
        secondArg
    ] : [
        undefined,
        firstArg
    ];
    let message = ' Did you mean ';
    if (subMessage) {
        message += subMessage + ' ';
    }
    const suggestions = suggestionsArg.map((x2)=>`"${x2}"`
    );
    switch(suggestions.length){
        case 0:
            return '';
        case 1:
            return message + suggestions[0] + '?';
        case 2:
            return message + suggestions[0] + ' or ' + suggestions[1] + '?';
    }
    const selected = suggestions.slice(0, 5);
    const lastItem = selected.pop();
    return message + selected.join(', ') + ', or ' + lastItem + '?';
}
function identityFunc(x3) {
    return x3;
}
function suggestionList(input, options) {
    const optionsByDistance = Object.create(null);
    const lexicalDistance = new LexicalDistance(input);
    const threshold = Math.floor(input.length * 0.4) + 1;
    for (const option of options){
        const distance = lexicalDistance.measure(option, threshold);
        if (distance !== undefined) {
            optionsByDistance[option] = distance;
        }
    }
    return Object.keys(optionsByDistance).sort((a5, b3)=>{
        const distanceDiff = optionsByDistance[a5] - optionsByDistance[b3];
        return distanceDiff !== 0 ? distanceDiff : a5.localeCompare(b3);
    });
}
class LexicalDistance {
    constructor(input){
        this._input = input;
        this._inputLowerCase = input.toLowerCase();
        this._inputArray = stringToArray(this._inputLowerCase);
        this._rows = [
            new Array(input.length + 1).fill(0),
            new Array(input.length + 1).fill(0),
            new Array(input.length + 1).fill(0)
        ];
    }
    measure(option, threshold) {
        if (this._input === option) {
            return 0;
        }
        const optionLowerCase = option.toLowerCase();
        if (this._inputLowerCase === optionLowerCase) {
            return 1;
        }
        let a6 = stringToArray(optionLowerCase);
        let b4 = this._inputArray;
        if (a6.length < b4.length) {
            const tmp = a6;
            a6 = b4;
            b4 = tmp;
        }
        const aLength = a6.length;
        const bLength = b4.length;
        if (aLength - bLength > threshold) {
            return undefined;
        }
        const rows = this._rows;
        for(let j6 = 0; j6 <= bLength; j6++){
            rows[0][j6] = j6;
        }
        for(let i27 = 1; i27 <= aLength; i27++){
            const upRow = rows[(i27 - 1) % 3];
            const currentRow = rows[i27 % 3];
            let smallestCell = currentRow[0] = i27;
            for(let j7 = 1; j7 <= bLength; j7++){
                const cost = a6[i27 - 1] === b4[j7 - 1] ? 0 : 1;
                let currentCell = Math.min(upRow[j7] + 1, currentRow[j7 - 1] + 1, upRow[j7 - 1] + cost);
                if (i27 > 1 && j7 > 1 && a6[i27 - 1] === b4[j7 - 2] && a6[i27 - 2] === b4[j7 - 1]) {
                    const doubleDiagonalCell = rows[(i27 - 2) % 3][j7 - 2];
                    currentCell = Math.min(currentCell, doubleDiagonalCell + 1);
                }
                if (currentCell < smallestCell) {
                    smallestCell = currentCell;
                }
                currentRow[j7] = currentCell;
            }
            if (smallestCell > threshold) {
                return undefined;
            }
        }
        const distance = rows[aLength % 3][bLength];
        return distance <= threshold ? distance : undefined;
    }
}
function stringToArray(str) {
    const strLength = str.length;
    const array = new Array(strLength);
    for(let i28 = 0; i28 < strLength; ++i28){
        array[i28] = str.charCodeAt(i28);
    }
    return array;
}
function print(ast) {
    return visit(ast, {
        leave: printDocASTReducer
    });
}
const printDocASTReducer = {
    Name: (node)=>node.value
    ,
    Variable: (node)=>'$' + node.name
    ,
    Document: (node)=>join4(node.definitions, '\n\n') + '\n'
    ,
    OperationDefinition (node) {
        const op = node.operation;
        const name = node.name;
        const varDefs = wrap('(', join4(node.variableDefinitions, ', '), ')');
        const directives = join4(node.directives, ' ');
        const selectionSet = node.selectionSet;
        return !name && !directives && !varDefs && op === 'query' ? selectionSet : join4([
            op,
            join4([
                name,
                varDefs
            ]),
            directives,
            selectionSet
        ], ' ');
    },
    VariableDefinition: ({ variable , type: type6 , defaultValue , directives  })=>variable + ': ' + type6 + wrap(' = ', defaultValue) + wrap(' ', join4(directives, ' '))
    ,
    SelectionSet: ({ selections  })=>block(selections)
    ,
    Field: ({ alias , name , arguments: args , directives , selectionSet  })=>join4([
            wrap('', alias, ': ') + name + wrap('(', join4(args, ', '), ')'),
            join4(directives, ' '),
            selectionSet
        ], ' ')
    ,
    Argument: ({ name , value  })=>name + ': ' + value
    ,
    FragmentSpread: ({ name , directives  })=>'...' + name + wrap(' ', join4(directives, ' '))
    ,
    InlineFragment: ({ typeCondition , directives , selectionSet  })=>join4([
            '...',
            wrap('on ', typeCondition),
            join4(directives, ' '),
            selectionSet
        ], ' ')
    ,
    FragmentDefinition: ({ name , typeCondition , variableDefinitions , directives , selectionSet  })=>`fragment ${name}${wrap('(', join4(variableDefinitions, ', '), ')')} ` + `on ${typeCondition} ${wrap('', join4(directives, ' '), ' ')}` + selectionSet
    ,
    IntValue: ({ value  })=>value
    ,
    FloatValue: ({ value  })=>value
    ,
    StringValue: ({ value , block: isBlockString  }, key)=>isBlockString ? printBlockString(value, key === 'description' ? '' : '  ') : JSON.stringify(value)
    ,
    BooleanValue: ({ value  })=>value ? 'true' : 'false'
    ,
    NullValue: ()=>'null'
    ,
    EnumValue: ({ value  })=>value
    ,
    ListValue: ({ values: values3  })=>'[' + join4(values3, ', ') + ']'
    ,
    ObjectValue: ({ fields  })=>'{' + join4(fields, ', ') + '}'
    ,
    ObjectField: ({ name , value  })=>name + ': ' + value
    ,
    Directive: ({ name , arguments: args  })=>'@' + name + wrap('(', join4(args, ', '), ')')
    ,
    NamedType: ({ name  })=>name
    ,
    ListType: ({ type: type7  })=>'[' + type7 + ']'
    ,
    NonNullType: ({ type: type8  })=>type8 + '!'
    ,
    SchemaDefinition: addDescription(({ directives , operationTypes  })=>join4([
            'schema',
            join4(directives, ' '),
            block(operationTypes)
        ], ' ')
    ),
    OperationTypeDefinition: ({ operation , type: type9  })=>operation + ': ' + type9
    ,
    ScalarTypeDefinition: addDescription(({ name , directives  })=>join4([
            'scalar',
            name,
            join4(directives, ' ')
        ], ' ')
    ),
    ObjectTypeDefinition: addDescription(({ name , interfaces , directives , fields  })=>join4([
            'type',
            name,
            wrap('implements ', join4(interfaces, ' & ')),
            join4(directives, ' '),
            block(fields)
        ], ' ')
    ),
    FieldDefinition: addDescription(({ name , arguments: args , type: type10 , directives  })=>name + (hasMultilineItems(args) ? wrap('(\n', indent(join4(args, '\n')), '\n)') : wrap('(', join4(args, ', '), ')')) + ': ' + type10 + wrap(' ', join4(directives, ' '))
    ),
    InputValueDefinition: addDescription(({ name , type: type11 , defaultValue , directives  })=>join4([
            name + ': ' + type11,
            wrap('= ', defaultValue),
            join4(directives, ' ')
        ], ' ')
    ),
    InterfaceTypeDefinition: addDescription(({ name , interfaces , directives , fields  })=>join4([
            'interface',
            name,
            wrap('implements ', join4(interfaces, ' & ')),
            join4(directives, ' '),
            block(fields)
        ], ' ')
    ),
    UnionTypeDefinition: addDescription(({ name , directives , types: types5  })=>join4([
            'union',
            name,
            join4(directives, ' '),
            types5 && types5.length !== 0 ? '= ' + join4(types5, ' | ') : ''
        ], ' ')
    ),
    EnumTypeDefinition: addDescription(({ name , directives , values: values4  })=>join4([
            'enum',
            name,
            join4(directives, ' '),
            block(values4)
        ], ' ')
    ),
    EnumValueDefinition: addDescription(({ name , directives  })=>join4([
            name,
            join4(directives, ' ')
        ], ' ')
    ),
    InputObjectTypeDefinition: addDescription(({ name , directives , fields  })=>join4([
            'input',
            name,
            join4(directives, ' '),
            block(fields)
        ], ' ')
    ),
    DirectiveDefinition: addDescription(({ name , arguments: args , repeatable , locations  })=>'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join4(args, '\n')), '\n)') : wrap('(', join4(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join4(locations, ' | ')
    ),
    SchemaExtension: ({ directives , operationTypes  })=>join4([
            'extend schema',
            join4(directives, ' '),
            block(operationTypes)
        ], ' ')
    ,
    ScalarTypeExtension: ({ name , directives  })=>join4([
            'extend scalar',
            name,
            join4(directives, ' ')
        ], ' ')
    ,
    ObjectTypeExtension: ({ name , interfaces , directives , fields  })=>join4([
            'extend type',
            name,
            wrap('implements ', join4(interfaces, ' & ')),
            join4(directives, ' '),
            block(fields)
        ], ' ')
    ,
    InterfaceTypeExtension: ({ name , interfaces , directives , fields  })=>join4([
            'extend interface',
            name,
            wrap('implements ', join4(interfaces, ' & ')),
            join4(directives, ' '),
            block(fields)
        ], ' ')
    ,
    UnionTypeExtension: ({ name , directives , types: types6  })=>join4([
            'extend union',
            name,
            join4(directives, ' '),
            types6 && types6.length !== 0 ? '= ' + join4(types6, ' | ') : ''
        ], ' ')
    ,
    EnumTypeExtension: ({ name , directives , values: values5  })=>join4([
            'extend enum',
            name,
            join4(directives, ' '),
            block(values5)
        ], ' ')
    ,
    InputObjectTypeExtension: ({ name , directives , fields  })=>join4([
            'extend input',
            name,
            join4(directives, ' '),
            block(fields)
        ], ' ')
};
function addDescription(cb) {
    return (node)=>join4([
            node.description,
            cb(node)
        ], '\n')
    ;
}
function join4(maybeArray, separator = '') {
    return maybeArray?.filter((x4)=>x4
    ).join(separator) ?? '';
}
function block(array) {
    return array && array.length !== 0 ? '{\n' + indent(join4(array, '\n')) + '\n}' : '';
}
function wrap(start, maybeString, end = '') {
    return maybeString ? start + maybeString + end : '';
}
function indent(maybeString) {
    return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}
function isMultiline(string) {
    return string.indexOf('\n') !== -1;
}
function hasMultilineItems(maybeArray) {
    return maybeArray && maybeArray.some(isMultiline);
}
function invariant(condition, message) {
    const booleanCondition = Boolean(condition);
    if (!booleanCondition) {
        throw new Error(message != null ? message : 'Unexpected invariant triggered.');
    }
}
function valueFromASTUntyped(valueNode, variables) {
    switch(valueNode.kind){
        case Kind.NULL:
            return null;
        case Kind.INT:
            return parseInt(valueNode.value, 10);
        case Kind.FLOAT:
            return parseFloat(valueNode.value);
        case Kind.STRING:
        case Kind.ENUM:
        case Kind.BOOLEAN:
            return valueNode.value;
        case Kind.LIST:
            return valueNode.values.map((node)=>valueFromASTUntyped(node, variables)
            );
        case Kind.OBJECT:
            return keyValMap(valueNode.fields, (field)=>field.name.value
            , (field)=>valueFromASTUntyped(field.value, variables)
            );
        case Kind.VARIABLE:
            return variables?.[valueNode.name.value];
    }
    invariant(false, 'Unexpected value node: ' + inspect(valueNode));
}
function isType(type12) {
    return isScalarType(type12) || isObjectType(type12) || isInterfaceType(type12) || isUnionType(type12) || isEnumType(type12) || isInputObjectType(type12) || isListType(type12) || isNonNullType(type12);
}
function assertType(type13) {
    if (!isType(type13)) {
        throw new Error(`Expected ${inspect(type13)} to be a GraphQL type.`);
    }
    return type13;
}
function isScalarType(type14) {
    return __default(type14, GraphQLScalarType);
}
function isObjectType(type15) {
    return __default(type15, GraphQLObjectType);
}
function isInterfaceType(type16) {
    return __default(type16, GraphQLInterfaceType);
}
function isUnionType(type17) {
    return __default(type17, GraphQLUnionType);
}
function isEnumType(type18) {
    return __default(type18, GraphQLEnumType);
}
function isInputObjectType(type19) {
    return __default(type19, GraphQLInputObjectType);
}
function isListType(type20) {
    return __default(type20, GraphQLList);
}
function isNonNullType(type21) {
    return __default(type21, GraphQLNonNull);
}
function isInputType(type22) {
    return isScalarType(type22) || isEnumType(type22) || isInputObjectType(type22) || isWrappingType(type22) && isInputType(type22.ofType);
}
function isOutputType(type23) {
    return isScalarType(type23) || isObjectType(type23) || isInterfaceType(type23) || isUnionType(type23) || isEnumType(type23) || isWrappingType(type23) && isOutputType(type23.ofType);
}
function isLeafType(type24) {
    return isScalarType(type24) || isEnumType(type24);
}
function isCompositeType(type25) {
    return isObjectType(type25) || isInterfaceType(type25) || isUnionType(type25);
}
function isAbstractType(type26) {
    return isInterfaceType(type26) || isUnionType(type26);
}
function GraphQLList(ofType) {
    if (this instanceof GraphQLList) {
        this.ofType = assertType(ofType);
    } else {
        return new GraphQLList(ofType);
    }
}
GraphQLList.prototype.toString = function toString() {
    return '[' + String(this.ofType) + ']';
};
Object.defineProperty(GraphQLList.prototype, SYMBOL_TO_STRING_TAG, {
    get () {
        return 'GraphQLList';
    }
});
defineToJSON(GraphQLList);
function GraphQLNonNull(ofType) {
    if (this instanceof GraphQLNonNull) {
        this.ofType = assertNullableType(ofType);
    } else {
        return new GraphQLNonNull(ofType);
    }
}
GraphQLNonNull.prototype.toString = function toString() {
    return String(this.ofType) + '!';
};
Object.defineProperty(GraphQLNonNull.prototype, SYMBOL_TO_STRING_TAG, {
    get () {
        return 'GraphQLNonNull';
    }
});
defineToJSON(GraphQLNonNull);
function isWrappingType(type27) {
    return isListType(type27) || isNonNullType(type27);
}
function isNullableType(type28) {
    return isType(type28) && !isNonNullType(type28);
}
function assertNullableType(type29) {
    if (!isNullableType(type29)) {
        throw new Error(`Expected ${inspect(type29)} to be a GraphQL nullable type.`);
    }
    return type29;
}
function getNullableType(type30) {
    if (type30) {
        return isNonNullType(type30) ? type30.ofType : type30;
    }
}
function isNamedType(type31) {
    return isScalarType(type31) || isObjectType(type31) || isInterfaceType(type31) || isUnionType(type31) || isEnumType(type31) || isInputObjectType(type31);
}
function getNamedType(type32) {
    if (type32) {
        let unwrappedType = type32;
        while(isWrappingType(unwrappedType)){
            unwrappedType = unwrappedType.ofType;
        }
        return unwrappedType;
    }
}
function resolveThunk(thunk) {
    return typeof thunk === 'function' ? thunk() : thunk;
}
function undefineIfEmpty(arr) {
    return arr && arr.length > 0 ? arr : undefined;
}
class GraphQLScalarType {
    constructor(config){
        const parseValue = config.parseValue ?? identityFunc;
        this.name = config.name;
        this.description = config.description;
        this.serialize = config.serialize ?? identityFunc;
        this.parseValue = parseValue;
        this.parseLiteral = config.parseLiteral ?? ((node)=>parseValue(valueFromASTUntyped(node))
        );
        this.extensions = config.extensions && toObjMap(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        devAssert(typeof config.name === 'string', 'Must provide name.');
        devAssert(config.serialize == null || typeof config.serialize === 'function', `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`);
        if (config.parseLiteral) {
            devAssert(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function', `${this.name} must provide both "parseValue" and "parseLiteral" functions.`);
        }
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            serialize: this.serialize,
            parseValue: this.parseValue,
            parseLiteral: this.parseLiteral,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes ?? []
        };
    }
    toString() {
        return this.name;
    }
    get [SYMBOL_TO_STRING_TAG]() {
        return 'GraphQLScalarType';
    }
}
defineToJSON(GraphQLScalarType);
class GraphQLObjectType {
    constructor(config){
        this.name = config.name;
        this.description = config.description;
        this.isTypeOf = config.isTypeOf;
        this.extensions = config.extensions && toObjMap(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        this._fields = defineFieldMap.bind(undefined, config);
        this._interfaces = defineInterfaces.bind(undefined, config);
        devAssert(typeof config.name === 'string', 'Must provide name.');
        devAssert(config.isTypeOf == null || typeof config.isTypeOf === 'function', `${this.name} must provide "isTypeOf" as a function, ` + `but got: ${inspect(config.isTypeOf)}.`);
    }
    getFields() {
        if (typeof this._fields === 'function') {
            this._fields = this._fields();
        }
        return this._fields;
    }
    getInterfaces() {
        if (typeof this._interfaces === 'function') {
            this._interfaces = this._interfaces();
        }
        return this._interfaces;
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: fieldsToFieldsConfig(this.getFields()),
            isTypeOf: this.isTypeOf,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes || []
        };
    }
    toString() {
        return this.name;
    }
    get [SYMBOL_TO_STRING_TAG]() {
        return 'GraphQLObjectType';
    }
}
defineToJSON(GraphQLObjectType);
function defineInterfaces(config) {
    const interfaces = resolveThunk(config.interfaces) ?? [];
    devAssert(Array.isArray(interfaces), `${config.name} interfaces must be an Array or a function which returns an Array.`);
    return interfaces;
}
function defineFieldMap(config) {
    const fieldMap = resolveThunk(config.fields);
    devAssert(isPlainObj(fieldMap), `${config.name} fields must be an object with field names as keys or a function which returns such an object.`);
    return mapValue(fieldMap, (fieldConfig, fieldName)=>{
        devAssert(isPlainObj(fieldConfig), `${config.name}.${fieldName} field config must be an object.`);
        devAssert(!('isDeprecated' in fieldConfig), `${config.name}.${fieldName} should provide "deprecationReason" instead of "isDeprecated".`);
        devAssert(fieldConfig.resolve == null || typeof fieldConfig.resolve === 'function', `${config.name}.${fieldName} field resolver must be a function if ` + `provided, but got: ${inspect(fieldConfig.resolve)}.`);
        const argsConfig = fieldConfig.args ?? {};
        devAssert(isPlainObj(argsConfig), `${config.name}.${fieldName} args must be an object with argument names as keys.`);
        const args = objectEntries(argsConfig).map(([argName, argConfig])=>({
                name: argName,
                description: argConfig.description,
                type: argConfig.type,
                defaultValue: argConfig.defaultValue,
                extensions: argConfig.extensions && toObjMap(argConfig.extensions),
                astNode: argConfig.astNode
            })
        );
        return {
            name: fieldName,
            description: fieldConfig.description,
            type: fieldConfig.type,
            args,
            resolve: fieldConfig.resolve,
            subscribe: fieldConfig.subscribe,
            isDeprecated: fieldConfig.deprecationReason != null,
            deprecationReason: fieldConfig.deprecationReason,
            extensions: fieldConfig.extensions && toObjMap(fieldConfig.extensions),
            astNode: fieldConfig.astNode
        };
    });
}
function isPlainObj(obj) {
    return isObjectLike(obj) && !Array.isArray(obj);
}
function fieldsToFieldsConfig(fields) {
    return mapValue(fields, (field)=>({
            description: field.description,
            type: field.type,
            args: argsToArgsConfig(field.args),
            resolve: field.resolve,
            subscribe: field.subscribe,
            deprecationReason: field.deprecationReason,
            extensions: field.extensions,
            astNode: field.astNode
        })
    );
}
function argsToArgsConfig(args) {
    return keyValMap(args, (arg)=>arg.name
    , (arg)=>({
            description: arg.description,
            type: arg.type,
            defaultValue: arg.defaultValue,
            extensions: arg.extensions,
            astNode: arg.astNode
        })
    );
}
function isRequiredArgument(arg) {
    return isNonNullType(arg.type) && arg.defaultValue === undefined;
}
class GraphQLInterfaceType {
    constructor(config){
        this.name = config.name;
        this.description = config.description;
        this.resolveType = config.resolveType;
        this.extensions = config.extensions && toObjMap(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        this._fields = defineFieldMap.bind(undefined, config);
        this._interfaces = defineInterfaces.bind(undefined, config);
        devAssert(typeof config.name === 'string', 'Must provide name.');
        devAssert(config.resolveType == null || typeof config.resolveType === 'function', `${this.name} must provide "resolveType" as a function, ` + `but got: ${inspect(config.resolveType)}.`);
    }
    getFields() {
        if (typeof this._fields === 'function') {
            this._fields = this._fields();
        }
        return this._fields;
    }
    getInterfaces() {
        if (typeof this._interfaces === 'function') {
            this._interfaces = this._interfaces();
        }
        return this._interfaces;
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: fieldsToFieldsConfig(this.getFields()),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes ?? []
        };
    }
    toString() {
        return this.name;
    }
    get [SYMBOL_TO_STRING_TAG]() {
        return 'GraphQLInterfaceType';
    }
}
defineToJSON(GraphQLInterfaceType);
class GraphQLUnionType {
    constructor(config){
        this.name = config.name;
        this.description = config.description;
        this.resolveType = config.resolveType;
        this.extensions = config.extensions && toObjMap(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        this._types = defineTypes.bind(undefined, config);
        devAssert(typeof config.name === 'string', 'Must provide name.');
        devAssert(config.resolveType == null || typeof config.resolveType === 'function', `${this.name} must provide "resolveType" as a function, ` + `but got: ${inspect(config.resolveType)}.`);
    }
    getTypes() {
        if (typeof this._types === 'function') {
            this._types = this._types();
        }
        return this._types;
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            types: this.getTypes(),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes ?? []
        };
    }
    toString() {
        return this.name;
    }
    get [SYMBOL_TO_STRING_TAG]() {
        return 'GraphQLUnionType';
    }
}
defineToJSON(GraphQLUnionType);
function defineTypes(config) {
    const types7 = resolveThunk(config.types);
    devAssert(Array.isArray(types7), `Must provide Array of types or a function which returns such an array for Union ${config.name}.`);
    return types7;
}
class GraphQLEnumType {
    constructor(config){
        this.name = config.name;
        this.description = config.description;
        this.extensions = config.extensions && toObjMap(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        this._values = defineEnumValues(this.name, config.values);
        this._valueLookup = new Map(this._values.map((enumValue)=>[
                enumValue.value,
                enumValue
            ]
        ));
        this._nameLookup = keyMap(this._values, (value)=>value.name
        );
        devAssert(typeof config.name === 'string', 'Must provide name.');
    }
    getValues() {
        return this._values;
    }
    getValue(name) {
        return this._nameLookup[name];
    }
    serialize(outputValue) {
        const enumValue = this._valueLookup.get(outputValue);
        if (enumValue === undefined) {
            throw new GraphQLError(`Enum "${this.name}" cannot represent value: ${inspect(outputValue)}`);
        }
        return enumValue.name;
    }
    parseValue(inputValue) {
        if (typeof inputValue !== 'string') {
            const valueStr = inspect(inputValue);
            throw new GraphQLError(`Enum "${this.name}" cannot represent non-string value: ${valueStr}.` + didYouMeanEnumValue(this, valueStr));
        }
        const enumValue = this.getValue(inputValue);
        if (enumValue == null) {
            throw new GraphQLError(`Value "${inputValue}" does not exist in "${this.name}" enum.` + didYouMeanEnumValue(this, inputValue));
        }
        return enumValue.value;
    }
    parseLiteral(valueNode, _variables) {
        if (valueNode.kind !== Kind.ENUM) {
            const valueStr = print(valueNode);
            throw new GraphQLError(`Enum "${this.name}" cannot represent non-enum value: ${valueStr}.` + didYouMeanEnumValue(this, valueStr), valueNode);
        }
        const enumValue = this.getValue(valueNode.value);
        if (enumValue == null) {
            const valueStr = print(valueNode);
            throw new GraphQLError(`Value "${valueStr}" does not exist in "${this.name}" enum.` + didYouMeanEnumValue(this, valueStr), valueNode);
        }
        return enumValue.value;
    }
    toConfig() {
        const values6 = keyValMap(this.getValues(), (value)=>value.name
        , (value)=>({
                description: value.description,
                value: value.value,
                deprecationReason: value.deprecationReason,
                extensions: value.extensions,
                astNode: value.astNode
            })
        );
        return {
            name: this.name,
            description: this.description,
            values: values6,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes ?? []
        };
    }
    toString() {
        return this.name;
    }
    get [SYMBOL_TO_STRING_TAG]() {
        return 'GraphQLEnumType';
    }
}
defineToJSON(GraphQLEnumType);
function didYouMeanEnumValue(enumType, unknownValueStr) {
    const allNames = enumType.getValues().map((value)=>value.name
    );
    const suggestedValues = suggestionList(unknownValueStr, allNames);
    return didYouMean('the enum value', suggestedValues);
}
function defineEnumValues(typeName, valueMap) {
    devAssert(isPlainObj(valueMap), `${typeName} values must be an object with value names as keys.`);
    return objectEntries(valueMap).map(([valueName, valueConfig])=>{
        devAssert(isPlainObj(valueConfig), `${typeName}.${valueName} must refer to an object with a "value" key ` + `representing an internal value but got: ${inspect(valueConfig)}.`);
        devAssert(!('isDeprecated' in valueConfig), `${typeName}.${valueName} should provide "deprecationReason" instead of "isDeprecated".`);
        return {
            name: valueName,
            description: valueConfig.description,
            value: valueConfig.value !== undefined ? valueConfig.value : valueName,
            isDeprecated: valueConfig.deprecationReason != null,
            deprecationReason: valueConfig.deprecationReason,
            extensions: valueConfig.extensions && toObjMap(valueConfig.extensions),
            astNode: valueConfig.astNode
        };
    });
}
class GraphQLInputObjectType {
    constructor(config){
        this.name = config.name;
        this.description = config.description;
        this.extensions = config.extensions && toObjMap(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
        this._fields = defineInputFieldMap.bind(undefined, config);
        devAssert(typeof config.name === 'string', 'Must provide name.');
    }
    getFields() {
        if (typeof this._fields === 'function') {
            this._fields = this._fields();
        }
        return this._fields;
    }
    toConfig() {
        const fields = mapValue(this.getFields(), (field)=>({
                description: field.description,
                type: field.type,
                defaultValue: field.defaultValue,
                extensions: field.extensions,
                astNode: field.astNode
            })
        );
        return {
            name: this.name,
            description: this.description,
            fields,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes ?? []
        };
    }
    toString() {
        return this.name;
    }
    get [SYMBOL_TO_STRING_TAG]() {
        return 'GraphQLInputObjectType';
    }
}
defineToJSON(GraphQLInputObjectType);
function defineInputFieldMap(config) {
    const fieldMap = resolveThunk(config.fields);
    devAssert(isPlainObj(fieldMap), `${config.name} fields must be an object with field names as keys or a function which returns such an object.`);
    return mapValue(fieldMap, (fieldConfig, fieldName)=>{
        devAssert(!('resolve' in fieldConfig), `${config.name}.${fieldName} field has a resolve property, but Input Types cannot define resolvers.`);
        return {
            name: fieldName,
            description: fieldConfig.description,
            type: fieldConfig.type,
            defaultValue: fieldConfig.defaultValue,
            extensions: fieldConfig.extensions && toObjMap(fieldConfig.extensions),
            astNode: fieldConfig.astNode
        };
    });
}
function isRequiredInputField(field) {
    return isNonNullType(field.type) && field.defaultValue === undefined;
}
function isEqualType(typeA, typeB) {
    if (typeA === typeB) {
        return true;
    }
    if (isNonNullType(typeA) && isNonNullType(typeB)) {
        return isEqualType(typeA.ofType, typeB.ofType);
    }
    if (isListType(typeA) && isListType(typeB)) {
        return isEqualType(typeA.ofType, typeB.ofType);
    }
    return false;
}
function isTypeSubTypeOf(schema, maybeSubType, superType) {
    if (maybeSubType === superType) {
        return true;
    }
    if (isNonNullType(superType)) {
        if (isNonNullType(maybeSubType)) {
            return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
        }
        return false;
    }
    if (isNonNullType(maybeSubType)) {
        return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
    }
    if (isListType(superType)) {
        if (isListType(maybeSubType)) {
            return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
        }
        return false;
    }
    if (isListType(maybeSubType)) {
        return false;
    }
    return isAbstractType(superType) && (isInterfaceType(maybeSubType) || isObjectType(maybeSubType)) && schema.isSubType(superType, maybeSubType);
}
function doTypesOverlap(schema, typeA, typeB) {
    if (typeA === typeB) {
        return true;
    }
    if (isAbstractType(typeA)) {
        if (isAbstractType(typeB)) {
            return schema.getPossibleTypes(typeA).some((type33)=>schema.isSubType(typeB, type33)
            );
        }
        return schema.isSubType(typeA, typeB);
    }
    if (isAbstractType(typeB)) {
        return schema.isSubType(typeB, typeA);
    }
    return false;
}
const isFinitePolyfill = Number.isFinite || function(value) {
    return typeof value === 'number' && isFinite(value);
};
const isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};
const MIN_INT = -2147483648;
function serializeInt(outputValue) {
    const coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === 'boolean') {
        return coercedValue ? 1 : 0;
    }
    let num = coercedValue;
    if (typeof coercedValue === 'string' && coercedValue !== '') {
        num = Number(coercedValue);
    }
    if (!isInteger(num)) {
        throw new GraphQLError(`Int cannot represent non-integer value: ${inspect(coercedValue)}`);
    }
    if (num > 2147483647 || num < MIN_INT) {
        throw new GraphQLError('Int cannot represent non 32-bit signed integer value: ' + inspect(coercedValue));
    }
    return num;
}
function coerceInt(inputValue) {
    if (!isInteger(inputValue)) {
        throw new GraphQLError(`Int cannot represent non-integer value: ${inspect(inputValue)}`);
    }
    if (inputValue > 2147483647 || inputValue < MIN_INT) {
        throw new GraphQLError(`Int cannot represent non 32-bit signed integer value: ${inputValue}`);
    }
    return inputValue;
}
const GraphQLInt = new GraphQLScalarType({
    name: 'Int',
    description: 'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
    serialize: serializeInt,
    parseValue: coerceInt,
    parseLiteral (valueNode) {
        if (valueNode.kind !== Kind.INT) {
            throw new GraphQLError(`Int cannot represent non-integer value: ${print(valueNode)}`, valueNode);
        }
        const num = parseInt(valueNode.value, 10);
        if (num > 2147483647 || num < MIN_INT) {
            throw new GraphQLError(`Int cannot represent non 32-bit signed integer value: ${valueNode.value}`, valueNode);
        }
        return num;
    }
});
function serializeFloat(outputValue) {
    const coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === 'boolean') {
        return coercedValue ? 1 : 0;
    }
    let num = coercedValue;
    if (typeof coercedValue === 'string' && coercedValue !== '') {
        num = Number(coercedValue);
    }
    if (!isFinitePolyfill(num)) {
        throw new GraphQLError(`Float cannot represent non numeric value: ${inspect(coercedValue)}`);
    }
    return num;
}
function coerceFloat(inputValue) {
    if (!isFinitePolyfill(inputValue)) {
        throw new GraphQLError(`Float cannot represent non numeric value: ${inspect(inputValue)}`);
    }
    return inputValue;
}
const GraphQLFloat = new GraphQLScalarType({
    name: 'Float',
    description: 'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
    serialize: serializeFloat,
    parseValue: coerceFloat,
    parseLiteral (valueNode) {
        if (valueNode.kind !== Kind.FLOAT && valueNode.kind !== Kind.INT) {
            throw new GraphQLError(`Float cannot represent non numeric value: ${print(valueNode)}`, valueNode);
        }
        return parseFloat(valueNode.value);
    }
});
function serializeObject(outputValue) {
    if (isObjectLike(outputValue)) {
        if (typeof outputValue.valueOf === 'function') {
            const valueOfResult = outputValue.valueOf();
            if (!isObjectLike(valueOfResult)) {
                return valueOfResult;
            }
        }
        if (typeof outputValue.toJSON === 'function') {
            return outputValue.toJSON();
        }
    }
    return outputValue;
}
function serializeString(outputValue) {
    const coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === 'string') {
        return coercedValue;
    }
    if (typeof coercedValue === 'boolean') {
        return coercedValue ? 'true' : 'false';
    }
    if (isFinitePolyfill(coercedValue)) {
        return coercedValue.toString();
    }
    throw new GraphQLError(`String cannot represent value: ${inspect(outputValue)}`);
}
function coerceString(inputValue) {
    if (typeof inputValue !== 'string') {
        throw new GraphQLError(`String cannot represent a non string value: ${inspect(inputValue)}`);
    }
    return inputValue;
}
const GraphQLString = new GraphQLScalarType({
    name: 'String',
    description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
    serialize: serializeString,
    parseValue: coerceString,
    parseLiteral (valueNode) {
        if (valueNode.kind !== Kind.STRING) {
            throw new GraphQLError(`String cannot represent a non string value: ${print(valueNode)}`, valueNode);
        }
        return valueNode.value;
    }
});
function serializeBoolean(outputValue) {
    const coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === 'boolean') {
        return coercedValue;
    }
    if (isFinitePolyfill(coercedValue)) {
        return coercedValue !== 0;
    }
    throw new GraphQLError(`Boolean cannot represent a non boolean value: ${inspect(coercedValue)}`);
}
function coerceBoolean(inputValue) {
    if (typeof inputValue !== 'boolean') {
        throw new GraphQLError(`Boolean cannot represent a non boolean value: ${inspect(inputValue)}`);
    }
    return inputValue;
}
const GraphQLBoolean = new GraphQLScalarType({
    name: 'Boolean',
    description: 'The `Boolean` scalar type represents `true` or `false`.',
    serialize: serializeBoolean,
    parseValue: coerceBoolean,
    parseLiteral (valueNode) {
        if (valueNode.kind !== Kind.BOOLEAN) {
            throw new GraphQLError(`Boolean cannot represent a non boolean value: ${print(valueNode)}`, valueNode);
        }
        return valueNode.value;
    }
});
function serializeID(outputValue) {
    const coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === 'string') {
        return coercedValue;
    }
    if (isInteger(coercedValue)) {
        return String(coercedValue);
    }
    throw new GraphQLError(`ID cannot represent value: ${inspect(outputValue)}`);
}
function coerceID(inputValue) {
    if (typeof inputValue === 'string') {
        return inputValue;
    }
    if (isInteger(inputValue)) {
        return inputValue.toString();
    }
    throw new GraphQLError(`ID cannot represent value: ${inspect(inputValue)}`);
}
const GraphQLID = new GraphQLScalarType({
    name: 'ID',
    description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
    serialize: serializeID,
    parseValue: coerceID,
    parseLiteral (valueNode) {
        if (valueNode.kind !== Kind.STRING && valueNode.kind !== Kind.INT) {
            throw new GraphQLError('ID cannot represent a non-string and non-integer value: ' + print(valueNode), valueNode);
        }
        return valueNode.value;
    }
});
const specifiedScalarTypes = Object.freeze([
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLID
]);
function isSpecifiedScalarType(type34) {
    return specifiedScalarTypes.some(({ name  })=>type34.name === name
    );
}
function isDirective(directive) {
    return __default(directive, GraphQLDirective);
}
class GraphQLDirective {
    constructor(config){
        this.name = config.name;
        this.description = config.description;
        this.locations = config.locations;
        this.isRepeatable = config.isRepeatable ?? false;
        this.extensions = config.extensions && toObjMap(config.extensions);
        this.astNode = config.astNode;
        devAssert(config.name, 'Directive must be named.');
        devAssert(Array.isArray(config.locations), `@${config.name} locations must be an Array.`);
        const args = config.args ?? {};
        devAssert(isObjectLike(args) && !Array.isArray(args), `@${config.name} args must be an object with argument names as keys.`);
        this.args = objectEntries(args).map(([argName, argConfig])=>({
                name: argName,
                description: argConfig.description,
                type: argConfig.type,
                defaultValue: argConfig.defaultValue,
                extensions: argConfig.extensions && toObjMap(argConfig.extensions),
                astNode: argConfig.astNode
            })
        );
    }
    toConfig() {
        return {
            name: this.name,
            description: this.description,
            locations: this.locations,
            args: argsToArgsConfig(this.args),
            isRepeatable: this.isRepeatable,
            extensions: this.extensions,
            astNode: this.astNode
        };
    }
    toString() {
        return '@' + this.name;
    }
    get [SYMBOL_TO_STRING_TAG]() {
        return 'GraphQLDirective';
    }
}
defineToJSON(GraphQLDirective);
const GraphQLIncludeDirective = new GraphQLDirective({
    name: 'include',
    description: 'Directs the executor to include this field or fragment only when the `if` argument is true.',
    locations: [
        DirectiveLocation.FIELD,
        DirectiveLocation.FRAGMENT_SPREAD,
        DirectiveLocation.INLINE_FRAGMENT
    ],
    args: {
        if: {
            type: GraphQLNonNull(GraphQLBoolean),
            description: 'Included when true.'
        }
    }
});
const GraphQLSkipDirective = new GraphQLDirective({
    name: 'skip',
    description: 'Directs the executor to skip this field or fragment when the `if` argument is true.',
    locations: [
        DirectiveLocation.FIELD,
        DirectiveLocation.FRAGMENT_SPREAD,
        DirectiveLocation.INLINE_FRAGMENT
    ],
    args: {
        if: {
            type: GraphQLNonNull(GraphQLBoolean),
            description: 'Skipped when true.'
        }
    }
});
const DEFAULT_DEPRECATION_REASON = 'No longer supported';
const GraphQLDeprecatedDirective = new GraphQLDirective({
    name: 'deprecated',
    description: 'Marks an element of a GraphQL schema as no longer supported.',
    locations: [
        DirectiveLocation.FIELD_DEFINITION,
        DirectiveLocation.ENUM_VALUE
    ],
    args: {
        reason: {
            type: GraphQLString,
            description: 'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
            defaultValue: DEFAULT_DEPRECATION_REASON
        }
    }
});
const specifiedDirectives = Object.freeze([
    GraphQLIncludeDirective,
    GraphQLSkipDirective,
    GraphQLDeprecatedDirective
]);
const arrayFrom = Array.from || function(obj, mapFn, thisArg) {
    if (obj == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
    }
    const iteratorMethod = obj[SYMBOL_ITERATOR];
    if (typeof iteratorMethod === 'function') {
        const iterator = iteratorMethod.call(obj);
        const result = [];
        let step;
        for(let i29 = 0; !(step = iterator.next()).done; ++i29){
            result.push(mapFn.call(thisArg, step.value, i29));
            if (i29 > 9999999) {
                throw new TypeError('Near-infinite iteration.');
            }
        }
        return result;
    }
    const length3 = obj.length;
    if (typeof length3 === 'number' && length3 >= 0 && length3 % 1 === 0) {
        const result = [];
        for(let i30 = 0; i30 < length3; ++i30){
            if (Object.prototype.hasOwnProperty.call(obj, i30)) {
                result.push(mapFn.call(thisArg, obj[i30], i30));
            }
        }
        return result;
    }
    return [];
};
function isCollection(obj) {
    if (obj == null || typeof obj !== 'object') {
        return false;
    }
    const length4 = obj.length;
    if (typeof length4 === 'number' && length4 >= 0 && length4 % 1 === 0) {
        return true;
    }
    return typeof obj[SYMBOL_ITERATOR] === 'function';
}
function astFromValue(value, type35) {
    if (isNonNullType(type35)) {
        const astValue = astFromValue(value, type35.ofType);
        if (astValue?.kind === Kind.NULL) {
            return null;
        }
        return astValue;
    }
    if (value === null) {
        return {
            kind: Kind.NULL
        };
    }
    if (value === undefined) {
        return null;
    }
    if (isListType(type35)) {
        const itemType = type35.ofType;
        if (isCollection(value)) {
            const valuesNodes = [];
            for (const item of arrayFrom(value)){
                const itemNode = astFromValue(item, itemType);
                if (itemNode != null) {
                    valuesNodes.push(itemNode);
                }
            }
            return {
                kind: Kind.LIST,
                values: valuesNodes
            };
        }
        return astFromValue(value, itemType);
    }
    if (isInputObjectType(type35)) {
        if (!isObjectLike(value)) {
            return null;
        }
        const fieldNodes = [];
        for (const field of objectValues(type35.getFields())){
            const fieldValue = astFromValue(value[field.name], field.type);
            if (fieldValue) {
                fieldNodes.push({
                    kind: Kind.OBJECT_FIELD,
                    name: {
                        kind: Kind.NAME,
                        value: field.name
                    },
                    value: fieldValue
                });
            }
        }
        return {
            kind: Kind.OBJECT,
            fields: fieldNodes
        };
    }
    if (isLeafType(type35)) {
        const serialized = type35.serialize(value);
        if (serialized == null) {
            return null;
        }
        if (typeof serialized === 'boolean') {
            return {
                kind: Kind.BOOLEAN,
                value: serialized
            };
        }
        if (typeof serialized === 'number' && isFinitePolyfill(serialized)) {
            const stringNum = String(serialized);
            return integerStringRegExp.test(stringNum) ? {
                kind: Kind.INT,
                value: stringNum
            } : {
                kind: Kind.FLOAT,
                value: stringNum
            };
        }
        if (typeof serialized === 'string') {
            if (isEnumType(type35)) {
                return {
                    kind: Kind.ENUM,
                    value: serialized
                };
            }
            if (type35 === GraphQLID && integerStringRegExp.test(serialized)) {
                return {
                    kind: Kind.INT,
                    value: serialized
                };
            }
            return {
                kind: Kind.STRING,
                value: serialized
            };
        }
        throw new TypeError(`Cannot convert value to AST: ${inspect(serialized)}.`);
    }
    invariant(false, 'Unexpected input type: ' + inspect(type35));
}
const integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;
const __Schema = new GraphQLObjectType({
    name: '__Schema',
    description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
    fields: ()=>({
            description: {
                type: GraphQLString,
                resolve: (schema)=>schema.description
            },
            types: {
                description: 'A list of all types supported by this server.',
                type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__Type))),
                resolve (schema) {
                    return objectValues(schema.getTypeMap());
                }
            },
            queryType: {
                description: 'The type that query operations will be rooted at.',
                type: GraphQLNonNull(__Type),
                resolve: (schema)=>schema.getQueryType()
            },
            mutationType: {
                description: 'If this server supports mutation, the type that mutation operations will be rooted at.',
                type: __Type,
                resolve: (schema)=>schema.getMutationType()
            },
            subscriptionType: {
                description: 'If this server support subscription, the type that subscription operations will be rooted at.',
                type: __Type,
                resolve: (schema)=>schema.getSubscriptionType()
            },
            directives: {
                description: 'A list of all directives supported by this server.',
                type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__Directive))),
                resolve: (schema)=>schema.getDirectives()
            }
        })
});
const __Directive = new GraphQLObjectType({
    name: '__Directive',
    description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
    fields: ()=>({
            name: {
                type: GraphQLNonNull(GraphQLString),
                resolve: (directive)=>directive.name
            },
            description: {
                type: GraphQLString,
                resolve: (directive)=>directive.description
            },
            isRepeatable: {
                type: GraphQLNonNull(GraphQLBoolean),
                resolve: (directive)=>directive.isRepeatable
            },
            locations: {
                type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__DirectiveLocation))),
                resolve: (directive)=>directive.locations
            },
            args: {
                type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__InputValue))),
                resolve: (directive)=>directive.args
            }
        })
});
const __DirectiveLocation = new GraphQLEnumType({
    name: '__DirectiveLocation',
    description: 'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
    values: {
        QUERY: {
            value: DirectiveLocation.QUERY,
            description: 'Location adjacent to a query operation.'
        },
        MUTATION: {
            value: DirectiveLocation.MUTATION,
            description: 'Location adjacent to a mutation operation.'
        },
        SUBSCRIPTION: {
            value: DirectiveLocation.SUBSCRIPTION,
            description: 'Location adjacent to a subscription operation.'
        },
        FIELD: {
            value: DirectiveLocation.FIELD,
            description: 'Location adjacent to a field.'
        },
        FRAGMENT_DEFINITION: {
            value: DirectiveLocation.FRAGMENT_DEFINITION,
            description: 'Location adjacent to a fragment definition.'
        },
        FRAGMENT_SPREAD: {
            value: DirectiveLocation.FRAGMENT_SPREAD,
            description: 'Location adjacent to a fragment spread.'
        },
        INLINE_FRAGMENT: {
            value: DirectiveLocation.INLINE_FRAGMENT,
            description: 'Location adjacent to an inline fragment.'
        },
        VARIABLE_DEFINITION: {
            value: DirectiveLocation.VARIABLE_DEFINITION,
            description: 'Location adjacent to a variable definition.'
        },
        SCHEMA: {
            value: DirectiveLocation.SCHEMA,
            description: 'Location adjacent to a schema definition.'
        },
        SCALAR: {
            value: DirectiveLocation.SCALAR,
            description: 'Location adjacent to a scalar definition.'
        },
        OBJECT: {
            value: DirectiveLocation.OBJECT,
            description: 'Location adjacent to an object type definition.'
        },
        FIELD_DEFINITION: {
            value: DirectiveLocation.FIELD_DEFINITION,
            description: 'Location adjacent to a field definition.'
        },
        ARGUMENT_DEFINITION: {
            value: DirectiveLocation.ARGUMENT_DEFINITION,
            description: 'Location adjacent to an argument definition.'
        },
        INTERFACE: {
            value: DirectiveLocation.INTERFACE,
            description: 'Location adjacent to an interface definition.'
        },
        UNION: {
            value: DirectiveLocation.UNION,
            description: 'Location adjacent to a union definition.'
        },
        ENUM: {
            value: DirectiveLocation.ENUM,
            description: 'Location adjacent to an enum definition.'
        },
        ENUM_VALUE: {
            value: DirectiveLocation.ENUM_VALUE,
            description: 'Location adjacent to an enum value definition.'
        },
        INPUT_OBJECT: {
            value: DirectiveLocation.INPUT_OBJECT,
            description: 'Location adjacent to an input object type definition.'
        },
        INPUT_FIELD_DEFINITION: {
            value: DirectiveLocation.INPUT_FIELD_DEFINITION,
            description: 'Location adjacent to an input object field definition.'
        }
    }
});
const __Type = new GraphQLObjectType({
    name: '__Type',
    description: 'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
    fields: ()=>({
            kind: {
                type: GraphQLNonNull(__TypeKind),
                resolve (type36) {
                    if (isScalarType(type36)) {
                        return TypeKind.SCALAR;
                    }
                    if (isObjectType(type36)) {
                        return TypeKind.OBJECT;
                    }
                    if (isInterfaceType(type36)) {
                        return TypeKind.INTERFACE;
                    }
                    if (isUnionType(type36)) {
                        return TypeKind.UNION;
                    }
                    if (isEnumType(type36)) {
                        return TypeKind.ENUM;
                    }
                    if (isInputObjectType(type36)) {
                        return TypeKind.INPUT_OBJECT;
                    }
                    if (isListType(type36)) {
                        return TypeKind.LIST;
                    }
                    if (isNonNullType(type36)) {
                        return TypeKind.NON_NULL;
                    }
                    invariant(false, `Unexpected type: "${inspect(type36)}".`);
                }
            },
            name: {
                type: GraphQLString,
                resolve: (type37)=>type37.name !== undefined ? type37.name : undefined
            },
            description: {
                type: GraphQLString,
                resolve: (type38)=>type38.description !== undefined ? type38.description : undefined
            },
            fields: {
                type: GraphQLList(GraphQLNonNull(__Field)),
                args: {
                    includeDeprecated: {
                        type: GraphQLBoolean,
                        defaultValue: false
                    }
                },
                resolve (type39, { includeDeprecated  }) {
                    if (isObjectType(type39) || isInterfaceType(type39)) {
                        let fields = objectValues(type39.getFields());
                        if (!includeDeprecated) {
                            fields = fields.filter((field)=>!field.isDeprecated
                            );
                        }
                        return fields;
                    }
                    return null;
                }
            },
            interfaces: {
                type: GraphQLList(GraphQLNonNull(__Type)),
                resolve (type40) {
                    if (isObjectType(type40) || isInterfaceType(type40)) {
                        return type40.getInterfaces();
                    }
                }
            },
            possibleTypes: {
                type: GraphQLList(GraphQLNonNull(__Type)),
                resolve (type41, _args, _context, { schema  }) {
                    if (isAbstractType(type41)) {
                        return schema.getPossibleTypes(type41);
                    }
                }
            },
            enumValues: {
                type: GraphQLList(GraphQLNonNull(__EnumValue)),
                args: {
                    includeDeprecated: {
                        type: GraphQLBoolean,
                        defaultValue: false
                    }
                },
                resolve (type42, { includeDeprecated  }) {
                    if (isEnumType(type42)) {
                        let values7 = type42.getValues();
                        if (!includeDeprecated) {
                            values7 = values7.filter((value)=>!value.isDeprecated
                            );
                        }
                        return values7;
                    }
                }
            },
            inputFields: {
                type: GraphQLList(GraphQLNonNull(__InputValue)),
                resolve (type43) {
                    if (isInputObjectType(type43)) {
                        return objectValues(type43.getFields());
                    }
                }
            },
            ofType: {
                type: __Type,
                resolve: (type44)=>type44.ofType !== undefined ? type44.ofType : undefined
            }
        })
});
const __Field = new GraphQLObjectType({
    name: '__Field',
    description: 'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
    fields: ()=>({
            name: {
                type: GraphQLNonNull(GraphQLString),
                resolve: (field)=>field.name
            },
            description: {
                type: GraphQLString,
                resolve: (field)=>field.description
            },
            args: {
                type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__InputValue))),
                resolve: (field)=>field.args
            },
            type: {
                type: GraphQLNonNull(__Type),
                resolve: (field)=>field.type
            },
            isDeprecated: {
                type: GraphQLNonNull(GraphQLBoolean),
                resolve: (field)=>field.isDeprecated
            },
            deprecationReason: {
                type: GraphQLString,
                resolve: (field)=>field.deprecationReason
            }
        })
});
const __InputValue = new GraphQLObjectType({
    name: '__InputValue',
    description: 'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
    fields: ()=>({
            name: {
                type: GraphQLNonNull(GraphQLString),
                resolve: (inputValue)=>inputValue.name
            },
            description: {
                type: GraphQLString,
                resolve: (inputValue)=>inputValue.description
            },
            type: {
                type: GraphQLNonNull(__Type),
                resolve: (inputValue)=>inputValue.type
            },
            defaultValue: {
                type: GraphQLString,
                description: 'A GraphQL-formatted string representing the default value for this input value.',
                resolve (inputValue) {
                    const { type: type45 , defaultValue  } = inputValue;
                    const valueAST = astFromValue(defaultValue, type45);
                    return valueAST ? print(valueAST) : null;
                }
            }
        })
});
const __EnumValue = new GraphQLObjectType({
    name: '__EnumValue',
    description: 'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
    fields: ()=>({
            name: {
                type: GraphQLNonNull(GraphQLString),
                resolve: (enumValue)=>enumValue.name
            },
            description: {
                type: GraphQLString,
                resolve: (enumValue)=>enumValue.description
            },
            isDeprecated: {
                type: GraphQLNonNull(GraphQLBoolean),
                resolve: (enumValue)=>enumValue.isDeprecated
            },
            deprecationReason: {
                type: GraphQLString,
                resolve: (enumValue)=>enumValue.deprecationReason
            }
        })
});
const TypeKind = Object.freeze({
    SCALAR: 'SCALAR',
    OBJECT: 'OBJECT',
    INTERFACE: 'INTERFACE',
    UNION: 'UNION',
    ENUM: 'ENUM',
    INPUT_OBJECT: 'INPUT_OBJECT',
    LIST: 'LIST',
    NON_NULL: 'NON_NULL'
});
const __TypeKind = new GraphQLEnumType({
    name: '__TypeKind',
    description: 'An enum describing what kind of type a given `__Type` is.',
    values: {
        SCALAR: {
            value: TypeKind.SCALAR,
            description: 'Indicates this type is a scalar.'
        },
        OBJECT: {
            value: TypeKind.OBJECT,
            description: 'Indicates this type is an object. `fields` and `interfaces` are valid fields.'
        },
        INTERFACE: {
            value: TypeKind.INTERFACE,
            description: 'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.'
        },
        UNION: {
            value: TypeKind.UNION,
            description: 'Indicates this type is a union. `possibleTypes` is a valid field.'
        },
        ENUM: {
            value: TypeKind.ENUM,
            description: 'Indicates this type is an enum. `enumValues` is a valid field.'
        },
        INPUT_OBJECT: {
            value: TypeKind.INPUT_OBJECT,
            description: 'Indicates this type is an input object. `inputFields` is a valid field.'
        },
        LIST: {
            value: TypeKind.LIST,
            description: 'Indicates this type is a list. `ofType` is a valid field.'
        },
        NON_NULL: {
            value: TypeKind.NON_NULL,
            description: 'Indicates this type is a non-null. `ofType` is a valid field.'
        }
    }
});
const SchemaMetaFieldDef = {
    name: '__schema',
    type: GraphQLNonNull(__Schema),
    description: 'Access the current type schema of this server.',
    args: [],
    resolve: (_source, _args, _context, { schema  })=>schema
    ,
    isDeprecated: false,
    deprecationReason: undefined,
    extensions: undefined,
    astNode: undefined
};
const TypeMetaFieldDef = {
    name: '__type',
    type: __Type,
    description: 'Request the type information of a single type.',
    args: [
        {
            name: 'name',
            description: undefined,
            type: GraphQLNonNull(GraphQLString),
            defaultValue: undefined,
            extensions: undefined,
            astNode: undefined
        }
    ],
    resolve: (_source, { name  }, _context, { schema  })=>schema.getType(name)
    ,
    isDeprecated: false,
    deprecationReason: undefined,
    extensions: undefined,
    astNode: undefined
};
const TypeNameMetaFieldDef = {
    name: '__typename',
    type: GraphQLNonNull(GraphQLString),
    description: 'The name of the current Object type at runtime.',
    args: [],
    resolve: (_source, _args, _context, { parentType  })=>parentType.name
    ,
    isDeprecated: false,
    deprecationReason: undefined,
    extensions: undefined,
    astNode: undefined
};
const introspectionTypes = Object.freeze([
    __Schema,
    __Directive,
    __DirectiveLocation,
    __Type,
    __Field,
    __InputValue,
    __EnumValue,
    __TypeKind
]);
function isIntrospectionType(type46) {
    return introspectionTypes.some(({ name  })=>type46.name === name
    );
}
function isSchema(schema) {
    return __default(schema, GraphQLSchema);
}
function assertSchema(schema) {
    if (!isSchema(schema)) {
        throw new Error(`Expected ${inspect(schema)} to be a GraphQL schema.`);
    }
    return schema;
}
class GraphQLSchema {
    constructor(config){
        this.__validationErrors = config.assumeValid === true ? [] : undefined;
        devAssert(isObjectLike(config), 'Must provide configuration object.');
        devAssert(!config.types || Array.isArray(config.types), `"types" must be Array if provided but got: ${inspect(config.types)}.`);
        devAssert(!config.directives || Array.isArray(config.directives), '"directives" must be Array if provided but got: ' + `${inspect(config.directives)}.`);
        this.description = config.description;
        this.extensions = config.extensions && toObjMap(config.extensions);
        this.astNode = config.astNode;
        this.extensionASTNodes = config.extensionASTNodes;
        this._queryType = config.query;
        this._mutationType = config.mutation;
        this._subscriptionType = config.subscription;
        this._directives = config.directives ?? specifiedDirectives;
        const allReferencedTypes = new Set(config.types);
        if (config.types != null) {
            for (const type47 of config.types){
                allReferencedTypes.delete(type47);
                collectReferencedTypes(type47, allReferencedTypes);
            }
        }
        if (this._queryType != null) {
            collectReferencedTypes(this._queryType, allReferencedTypes);
        }
        if (this._mutationType != null) {
            collectReferencedTypes(this._mutationType, allReferencedTypes);
        }
        if (this._subscriptionType != null) {
            collectReferencedTypes(this._subscriptionType, allReferencedTypes);
        }
        for (const directive of this._directives){
            if (isDirective(directive)) {
                for (const arg of directive.args){
                    collectReferencedTypes(arg.type, allReferencedTypes);
                }
            }
        }
        collectReferencedTypes(__Schema, allReferencedTypes);
        this._typeMap = Object.create(null);
        this._subTypeMap = Object.create(null);
        this._implementationsMap = Object.create(null);
        for (const namedType of arrayFrom(allReferencedTypes)){
            if (namedType == null) {
                continue;
            }
            const typeName = namedType.name;
            devAssert(typeName, 'One of the provided types for building the Schema is missing a name.');
            if (this._typeMap[typeName] !== undefined) {
                throw new Error(`Schema must contain uniquely named types but contains multiple types named "${typeName}".`);
            }
            this._typeMap[typeName] = namedType;
            if (isInterfaceType(namedType)) {
                for (const iface of namedType.getInterfaces()){
                    if (isInterfaceType(iface)) {
                        let implementations = this._implementationsMap[iface.name];
                        if (implementations === undefined) {
                            implementations = this._implementationsMap[iface.name] = {
                                objects: [],
                                interfaces: []
                            };
                        }
                        implementations.interfaces.push(namedType);
                    }
                }
            } else if (isObjectType(namedType)) {
                for (const iface of namedType.getInterfaces()){
                    if (isInterfaceType(iface)) {
                        let implementations = this._implementationsMap[iface.name];
                        if (implementations === undefined) {
                            implementations = this._implementationsMap[iface.name] = {
                                objects: [],
                                interfaces: []
                            };
                        }
                        implementations.objects.push(namedType);
                    }
                }
            }
        }
    }
    getQueryType() {
        return this._queryType;
    }
    getMutationType() {
        return this._mutationType;
    }
    getSubscriptionType() {
        return this._subscriptionType;
    }
    getTypeMap() {
        return this._typeMap;
    }
    getType(name) {
        return this.getTypeMap()[name];
    }
    getPossibleTypes(abstractType) {
        return isUnionType(abstractType) ? abstractType.getTypes() : this.getImplementations(abstractType).objects;
    }
    getImplementations(interfaceType) {
        const implementations = this._implementationsMap[interfaceType.name];
        return implementations ?? {
            objects: [],
            interfaces: []
        };
    }
    isPossibleType(abstractType, possibleType) {
        return this.isSubType(abstractType, possibleType);
    }
    isSubType(abstractType, maybeSubType) {
        let map5 = this._subTypeMap[abstractType.name];
        if (map5 === undefined) {
            map5 = Object.create(null);
            if (isUnionType(abstractType)) {
                for (const type48 of abstractType.getTypes()){
                    map5[type48.name] = true;
                }
            } else {
                const implementations = this.getImplementations(abstractType);
                for (const type49 of implementations.objects){
                    map5[type49.name] = true;
                }
                for (const type1 of implementations.interfaces){
                    map5[type1.name] = true;
                }
            }
            this._subTypeMap[abstractType.name] = map5;
        }
        return map5[maybeSubType.name] !== undefined;
    }
    getDirectives() {
        return this._directives;
    }
    getDirective(name) {
        return find(this.getDirectives(), (directive)=>directive.name === name
        );
    }
    toConfig() {
        return {
            description: this.description,
            query: this.getQueryType(),
            mutation: this.getMutationType(),
            subscription: this.getSubscriptionType(),
            types: objectValues(this.getTypeMap()),
            directives: this.getDirectives().slice(),
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes ?? [],
            assumeValid: this.__validationErrors !== undefined
        };
    }
    get [SYMBOL_TO_STRING_TAG]() {
        return 'GraphQLSchema';
    }
}
function collectReferencedTypes(type50, typeSet) {
    const namedType = getNamedType(type50);
    if (!typeSet.has(namedType)) {
        typeSet.add(namedType);
        if (isUnionType(namedType)) {
            for (const memberType of namedType.getTypes()){
                collectReferencedTypes(memberType, typeSet);
            }
        } else if (isObjectType(namedType) || isInterfaceType(namedType)) {
            for (const interfaceType of namedType.getInterfaces()){
                collectReferencedTypes(interfaceType, typeSet);
            }
            for (const field of objectValues(namedType.getFields())){
                collectReferencedTypes(field.type, typeSet);
                for (const arg of field.args){
                    collectReferencedTypes(arg.type, typeSet);
                }
            }
        } else if (isInputObjectType(namedType)) {
            for (const field of objectValues(namedType.getFields())){
                collectReferencedTypes(field.type, typeSet);
            }
        }
    }
    return typeSet;
}
function validateSchema(schema) {
    assertSchema(schema);
    if (schema.__validationErrors) {
        return schema.__validationErrors;
    }
    const context = new SchemaValidationContext(schema);
    validateRootTypes(context);
    validateDirectives(context);
    validateTypes(context);
    const errors = context.getErrors();
    schema.__validationErrors = errors;
    return errors;
}
function assertValidSchema(schema) {
    const errors = validateSchema(schema);
    if (errors.length !== 0) {
        throw new Error(errors.map((error)=>error.message
        ).join('\n\n'));
    }
}
class SchemaValidationContext {
    constructor(schema){
        this._errors = [];
        this.schema = schema;
    }
    reportError(message, nodes) {
        const _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;
        this.addError(new GraphQLError(message, _nodes));
    }
    addError(error) {
        this._errors.push(error);
    }
    getErrors() {
        return this._errors;
    }
}
function validateRootTypes(context) {
    const schema = context.schema;
    const queryType = schema.getQueryType();
    if (!queryType) {
        context.reportError('Query root type must be provided.', schema.astNode);
    } else if (!isObjectType(queryType)) {
        context.reportError(`Query root type must be Object type, it cannot be ${inspect(queryType)}.`, getOperationTypeNode(schema, queryType, 'query'));
    }
    const mutationType = schema.getMutationType();
    if (mutationType && !isObjectType(mutationType)) {
        context.reportError('Mutation root type must be Object type if provided, it cannot be ' + `${inspect(mutationType)}.`, getOperationTypeNode(schema, mutationType, 'mutation'));
    }
    const subscriptionType = schema.getSubscriptionType();
    if (subscriptionType && !isObjectType(subscriptionType)) {
        context.reportError('Subscription root type must be Object type if provided, it cannot be ' + `${inspect(subscriptionType)}.`, getOperationTypeNode(schema, subscriptionType, 'subscription'));
    }
}
function getOperationTypeNode(schema, type51, operation) {
    const operationNodes = getAllSubNodes(schema, (node)=>node.operationTypes
    );
    for (const node1 of operationNodes){
        if (node1.operation === operation) {
            return node1.type;
        }
    }
    return type51.astNode;
}
function validateDirectives(context) {
    for (const directive of context.schema.getDirectives()){
        if (!isDirective(directive)) {
            context.reportError(`Expected directive but got: ${inspect(directive)}.`, directive?.astNode);
            continue;
        }
        validateName(context, directive);
        for (const arg of directive.args){
            validateName(context, arg);
            if (!isInputType(arg.type)) {
                context.reportError(`The type of @${directive.name}(${arg.name}:) must be Input Type ` + `but got: ${inspect(arg.type)}.`, arg.astNode);
            }
        }
    }
}
function validateName(context, node) {
    const error = isValidNameError(node.name);
    if (error) {
        context.addError(locatedError(error, node.astNode));
    }
}
function validateTypes(context) {
    const validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context);
    const typeMap = context.schema.getTypeMap();
    for (const type52 of objectValues(typeMap)){
        if (!isNamedType(type52)) {
            context.reportError(`Expected GraphQL named type but got: ${inspect(type52)}.`, type52.astNode);
            continue;
        }
        if (!isIntrospectionType(type52)) {
            validateName(context, type52);
        }
        if (isObjectType(type52)) {
            validateFields(context, type52);
            validateInterfaces(context, type52);
        } else if (isInterfaceType(type52)) {
            validateFields(context, type52);
            validateInterfaces(context, type52);
        } else if (isUnionType(type52)) {
            validateUnionMembers(context, type52);
        } else if (isEnumType(type52)) {
            validateEnumValues(context, type52);
        } else if (isInputObjectType(type52)) {
            validateInputFields(context, type52);
            validateInputObjectCircularRefs(type52);
        }
    }
}
function validateFields(context, type53) {
    const fields = objectValues(type53.getFields());
    if (fields.length === 0) {
        context.reportError(`Type ${type53.name} must define one or more fields.`, getAllNodes(type53));
    }
    for (const field of fields){
        validateName(context, field);
        if (!isOutputType(field.type)) {
            context.reportError(`The type of ${type53.name}.${field.name} must be Output Type ` + `but got: ${inspect(field.type)}.`, field.astNode?.type);
        }
        for (const arg of field.args){
            const argName = arg.name;
            validateName(context, arg);
            if (!isInputType(arg.type)) {
                context.reportError(`The type of ${type53.name}.${field.name}(${argName}:) must be Input ` + `Type but got: ${inspect(arg.type)}.`, arg.astNode?.type);
            }
        }
    }
}
function validateInterfaces(context, type54) {
    const ifaceTypeNames = Object.create(null);
    for (const iface of type54.getInterfaces()){
        if (!isInterfaceType(iface)) {
            context.reportError(`Type ${inspect(type54)} must only implement Interface types, ` + `it cannot implement ${inspect(iface)}.`, getAllImplementsInterfaceNodes(type54, iface));
            continue;
        }
        if (type54 === iface) {
            context.reportError(`Type ${type54.name} cannot implement itself because it would create a circular reference.`, getAllImplementsInterfaceNodes(type54, iface));
            continue;
        }
        if (ifaceTypeNames[iface.name]) {
            context.reportError(`Type ${type54.name} can only implement ${iface.name} once.`, getAllImplementsInterfaceNodes(type54, iface));
            continue;
        }
        ifaceTypeNames[iface.name] = true;
        validateTypeImplementsAncestors(context, type54, iface);
        validateTypeImplementsInterface(context, type54, iface);
    }
}
function validateTypeImplementsInterface(context, type55, iface) {
    const typeFieldMap = type55.getFields();
    for (const ifaceField of objectValues(iface.getFields())){
        const fieldName = ifaceField.name;
        const typeField = typeFieldMap[fieldName];
        if (!typeField) {
            context.reportError(`Interface field ${iface.name}.${fieldName} expected but ${type55.name} does not provide it.`, [
                ifaceField.astNode,
                ...getAllNodes(type55)
            ]);
            continue;
        }
        if (!isTypeSubTypeOf(context.schema, typeField.type, ifaceField.type)) {
            context.reportError(`Interface field ${iface.name}.${fieldName} expects type ` + `${inspect(ifaceField.type)} but ${type55.name}.${fieldName} ` + `is type ${inspect(typeField.type)}.`, [
                ifaceField.astNode.type,
                typeField.astNode.type
            ]);
        }
        for (const ifaceArg of ifaceField.args){
            const argName = ifaceArg.name;
            const typeArg = find(typeField.args, (arg)=>arg.name === argName
            );
            if (!typeArg) {
                context.reportError(`Interface field argument ${iface.name}.${fieldName}(${argName}:) expected but ${type55.name}.${fieldName} does not provide it.`, [
                    ifaceArg.astNode,
                    typeField.astNode
                ]);
                continue;
            }
            if (!isEqualType(ifaceArg.type, typeArg.type)) {
                context.reportError(`Interface field argument ${iface.name}.${fieldName}(${argName}:) ` + `expects type ${inspect(ifaceArg.type)} but ` + `${type55.name}.${fieldName}(${argName}:) is type ` + `${inspect(typeArg.type)}.`, [
                    ifaceArg.astNode.type,
                    typeArg.astNode.type
                ]);
            }
        }
        for (const typeArg of typeField.args){
            const argName = typeArg.name;
            const ifaceArg = find(ifaceField.args, (arg)=>arg.name === argName
            );
            if (!ifaceArg && isRequiredArgument(typeArg)) {
                context.reportError(`Object field ${type55.name}.${fieldName} includes required argument ${argName} that is missing from the Interface field ${iface.name}.${fieldName}.`, [
                    typeArg.astNode,
                    ifaceField.astNode
                ]);
            }
        }
    }
}
function validateTypeImplementsAncestors(context, type56, iface) {
    const ifaceInterfaces = type56.getInterfaces();
    for (const transitive of iface.getInterfaces()){
        if (ifaceInterfaces.indexOf(transitive) === -1) {
            context.reportError(transitive === type56 ? `Type ${type56.name} cannot implement ${iface.name} because it would create a circular reference.` : `Type ${type56.name} must implement ${transitive.name} because it is implemented by ${iface.name}.`, [
                ...getAllImplementsInterfaceNodes(iface, transitive),
                ...getAllImplementsInterfaceNodes(type56, iface)
            ]);
        }
    }
}
function validateUnionMembers(context, union1) {
    const memberTypes = union1.getTypes();
    if (memberTypes.length === 0) {
        context.reportError(`Union type ${union1.name} must define one or more member types.`, getAllNodes(union1));
    }
    const includedTypeNames = Object.create(null);
    for (const memberType of memberTypes){
        if (includedTypeNames[memberType.name]) {
            context.reportError(`Union type ${union1.name} can only include type ${memberType.name} once.`, getUnionMemberTypeNodes(union1, memberType.name));
            continue;
        }
        includedTypeNames[memberType.name] = true;
        if (!isObjectType(memberType)) {
            context.reportError(`Union type ${union1.name} can only include Object types, ` + `it cannot include ${inspect(memberType)}.`, getUnionMemberTypeNodes(union1, String(memberType)));
        }
    }
}
function validateEnumValues(context, enumType) {
    const enumValues = enumType.getValues();
    if (enumValues.length === 0) {
        context.reportError(`Enum type ${enumType.name} must define one or more values.`, getAllNodes(enumType));
    }
    for (const enumValue of enumValues){
        const valueName = enumValue.name;
        validateName(context, enumValue);
        if (valueName === 'true' || valueName === 'false' || valueName === 'null') {
            context.reportError(`Enum type ${enumType.name} cannot include value: ${valueName}.`, enumValue.astNode);
        }
    }
}
function validateInputFields(context, inputObj) {
    const fields = objectValues(inputObj.getFields());
    if (fields.length === 0) {
        context.reportError(`Input Object type ${inputObj.name} must define one or more fields.`, getAllNodes(inputObj));
    }
    for (const field of fields){
        validateName(context, field);
        if (!isInputType(field.type)) {
            context.reportError(`The type of ${inputObj.name}.${field.name} must be Input Type ` + `but got: ${inspect(field.type)}.`, field.astNode?.type);
        }
    }
}
function createInputObjectCircularRefsValidator(context) {
    const visitedTypes = Object.create(null);
    const fieldPath = [];
    const fieldPathIndexByTypeName = Object.create(null);
    return detectCycleRecursive;
    function detectCycleRecursive(inputObj) {
        if (visitedTypes[inputObj.name]) {
            return;
        }
        visitedTypes[inputObj.name] = true;
        fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
        const fields = objectValues(inputObj.getFields());
        for (const field of fields){
            if (isNonNullType(field.type) && isInputObjectType(field.type.ofType)) {
                const fieldType = field.type.ofType;
                const cycleIndex = fieldPathIndexByTypeName[fieldType.name];
                fieldPath.push(field);
                if (cycleIndex === undefined) {
                    detectCycleRecursive(fieldType);
                } else {
                    const cyclePath = fieldPath.slice(cycleIndex);
                    const pathStr = cyclePath.map((fieldObj)=>fieldObj.name
                    ).join('.');
                    context.reportError(`Cannot reference Input Object "${fieldType.name}" within itself through a series of non-null fields: "${pathStr}".`, cyclePath.map((fieldObj)=>fieldObj.astNode
                    ));
                }
                fieldPath.pop();
            }
        }
        fieldPathIndexByTypeName[inputObj.name] = undefined;
    }
}
function getAllNodes(object) {
    const { astNode , extensionASTNodes  } = object;
    return astNode ? extensionASTNodes ? [
        astNode
    ].concat(extensionASTNodes) : [
        astNode
    ] : extensionASTNodes ?? [];
}
function getAllSubNodes(object, getter) {
    return flatMap(getAllNodes(object), (item)=>getter(item) ?? []
    );
}
function getAllImplementsInterfaceNodes(type57, iface) {
    return getAllSubNodes(type57, (typeNode)=>typeNode.interfaces
    ).filter((ifaceNode)=>ifaceNode.name.value === iface.name
    );
}
function getUnionMemberTypeNodes(union2, typeName) {
    return getAllSubNodes(union2, (unionNode)=>unionNode.types
    ).filter((typeNode)=>typeNode.name.value === typeName
    );
}
function typeFromAST(schema, typeNode) {
    let innerType;
    if (typeNode.kind === Kind.LIST_TYPE) {
        innerType = typeFromAST(schema, typeNode.type);
        return innerType && GraphQLList(innerType);
    }
    if (typeNode.kind === Kind.NON_NULL_TYPE) {
        innerType = typeFromAST(schema, typeNode.type);
        return innerType && GraphQLNonNull(innerType);
    }
    if (typeNode.kind === Kind.NAMED_TYPE) {
        return schema.getType(typeNode.name.value);
    }
    invariant(false, 'Unexpected type node: ' + inspect(typeNode));
}
class TypeInfo {
    constructor(schema, getFieldDefFn, initialType){
        this._schema = schema;
        this._typeStack = [];
        this._parentTypeStack = [];
        this._inputTypeStack = [];
        this._fieldDefStack = [];
        this._defaultValueStack = [];
        this._directive = null;
        this._argument = null;
        this._enumValue = null;
        this._getFieldDef = getFieldDefFn ?? getFieldDef;
        if (initialType) {
            if (isInputType(initialType)) {
                this._inputTypeStack.push(initialType);
            }
            if (isCompositeType(initialType)) {
                this._parentTypeStack.push(initialType);
            }
            if (isOutputType(initialType)) {
                this._typeStack.push(initialType);
            }
        }
    }
    getType() {
        if (this._typeStack.length > 0) {
            return this._typeStack[this._typeStack.length - 1];
        }
    }
    getParentType() {
        if (this._parentTypeStack.length > 0) {
            return this._parentTypeStack[this._parentTypeStack.length - 1];
        }
    }
    getInputType() {
        if (this._inputTypeStack.length > 0) {
            return this._inputTypeStack[this._inputTypeStack.length - 1];
        }
    }
    getParentInputType() {
        if (this._inputTypeStack.length > 1) {
            return this._inputTypeStack[this._inputTypeStack.length - 2];
        }
    }
    getFieldDef() {
        if (this._fieldDefStack.length > 0) {
            return this._fieldDefStack[this._fieldDefStack.length - 1];
        }
    }
    getDefaultValue() {
        if (this._defaultValueStack.length > 0) {
            return this._defaultValueStack[this._defaultValueStack.length - 1];
        }
    }
    getDirective() {
        return this._directive;
    }
    getArgument() {
        return this._argument;
    }
    getEnumValue() {
        return this._enumValue;
    }
    enter(node) {
        const schema = this._schema;
        switch(node.kind){
            case Kind.SELECTION_SET:
                {
                    const namedType = getNamedType(this.getType());
                    this._parentTypeStack.push(isCompositeType(namedType) ? namedType : undefined);
                    break;
                }
            case Kind.FIELD:
                {
                    const parentType = this.getParentType();
                    let fieldDef;
                    let fieldType;
                    if (parentType) {
                        fieldDef = this._getFieldDef(schema, parentType, node);
                        if (fieldDef) {
                            fieldType = fieldDef.type;
                        }
                    }
                    this._fieldDefStack.push(fieldDef);
                    this._typeStack.push(isOutputType(fieldType) ? fieldType : undefined);
                    break;
                }
            case Kind.DIRECTIVE:
                this._directive = schema.getDirective(node.name.value);
                break;
            case Kind.OPERATION_DEFINITION:
                {
                    let type58;
                    switch(node.operation){
                        case 'query':
                            type58 = schema.getQueryType();
                            break;
                        case 'mutation':
                            type58 = schema.getMutationType();
                            break;
                        case 'subscription':
                            type58 = schema.getSubscriptionType();
                            break;
                    }
                    this._typeStack.push(isObjectType(type58) ? type58 : undefined);
                    break;
                }
            case Kind.INLINE_FRAGMENT:
            case Kind.FRAGMENT_DEFINITION:
                {
                    const typeConditionAST = node.typeCondition;
                    const outputType = typeConditionAST ? typeFromAST(schema, typeConditionAST) : getNamedType(this.getType());
                    this._typeStack.push(isOutputType(outputType) ? outputType : undefined);
                    break;
                }
            case Kind.VARIABLE_DEFINITION:
                {
                    const inputType = typeFromAST(schema, node.type);
                    this._inputTypeStack.push(isInputType(inputType) ? inputType : undefined);
                    break;
                }
            case Kind.ARGUMENT:
                {
                    let argDef;
                    let argType;
                    const fieldOrDirective = this.getDirective() ?? this.getFieldDef();
                    if (fieldOrDirective) {
                        argDef = find(fieldOrDirective.args, (arg)=>arg.name === node.name.value
                        );
                        if (argDef) {
                            argType = argDef.type;
                        }
                    }
                    this._argument = argDef;
                    this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);
                    this._inputTypeStack.push(isInputType(argType) ? argType : undefined);
                    break;
                }
            case Kind.LIST:
                {
                    const listType = getNullableType(this.getInputType());
                    const itemType = isListType(listType) ? listType.ofType : listType;
                    this._defaultValueStack.push(undefined);
                    this._inputTypeStack.push(isInputType(itemType) ? itemType : undefined);
                    break;
                }
            case Kind.OBJECT_FIELD:
                {
                    const objectType = getNamedType(this.getInputType());
                    let inputFieldType;
                    let inputField;
                    if (isInputObjectType(objectType)) {
                        inputField = objectType.getFields()[node.name.value];
                        if (inputField) {
                            inputFieldType = inputField.type;
                        }
                    }
                    this._defaultValueStack.push(inputField ? inputField.defaultValue : undefined);
                    this._inputTypeStack.push(isInputType(inputFieldType) ? inputFieldType : undefined);
                    break;
                }
            case Kind.ENUM:
                {
                    const enumType = getNamedType(this.getInputType());
                    let enumValue;
                    if (isEnumType(enumType)) {
                        enumValue = enumType.getValue(node.value);
                    }
                    this._enumValue = enumValue;
                    break;
                }
        }
    }
    leave(node) {
        switch(node.kind){
            case Kind.SELECTION_SET:
                this._parentTypeStack.pop();
                break;
            case Kind.FIELD:
                this._fieldDefStack.pop();
                this._typeStack.pop();
                break;
            case Kind.DIRECTIVE:
                this._directive = null;
                break;
            case Kind.OPERATION_DEFINITION:
            case Kind.INLINE_FRAGMENT:
            case Kind.FRAGMENT_DEFINITION:
                this._typeStack.pop();
                break;
            case Kind.VARIABLE_DEFINITION:
                this._inputTypeStack.pop();
                break;
            case Kind.ARGUMENT:
                this._argument = null;
                this._defaultValueStack.pop();
                this._inputTypeStack.pop();
                break;
            case Kind.LIST:
            case Kind.OBJECT_FIELD:
                this._defaultValueStack.pop();
                this._inputTypeStack.pop();
                break;
            case Kind.ENUM:
                this._enumValue = null;
                break;
        }
    }
}
function getFieldDef(schema, parentType, fieldNode) {
    const name = fieldNode.name.value;
    if (name === SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
        return SchemaMetaFieldDef;
    }
    if (name === TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
        return TypeMetaFieldDef;
    }
    if (name === TypeNameMetaFieldDef.name && isCompositeType(parentType)) {
        return TypeNameMetaFieldDef;
    }
    if (isObjectType(parentType) || isInterfaceType(parentType)) {
        return parentType.getFields()[name];
    }
}
function visitWithTypeInfo(typeInfo, visitor) {
    return {
        enter (node) {
            typeInfo.enter(node);
            const fn = getVisitFn(visitor, node.kind, false);
            if (fn) {
                const result = fn.apply(visitor, arguments);
                if (result !== undefined) {
                    typeInfo.leave(node);
                    if (isNode(result)) {
                        typeInfo.enter(result);
                    }
                }
                return result;
            }
        },
        leave (node) {
            const fn = getVisitFn(visitor, node.kind, true);
            let result;
            if (fn) {
                result = fn.apply(visitor, arguments);
            }
            typeInfo.leave(node);
            return result;
        }
    };
}
function isExecutableDefinitionNode(node) {
    return node.kind === Kind.OPERATION_DEFINITION || node.kind === Kind.FRAGMENT_DEFINITION;
}
function isTypeSystemDefinitionNode(node) {
    return node.kind === Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === Kind.DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
    return node.kind === Kind.SCALAR_TYPE_DEFINITION || node.kind === Kind.OBJECT_TYPE_DEFINITION || node.kind === Kind.INTERFACE_TYPE_DEFINITION || node.kind === Kind.UNION_TYPE_DEFINITION || node.kind === Kind.ENUM_TYPE_DEFINITION || node.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
    return node.kind === Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
    return node.kind === Kind.SCALAR_TYPE_EXTENSION || node.kind === Kind.OBJECT_TYPE_EXTENSION || node.kind === Kind.INTERFACE_TYPE_EXTENSION || node.kind === Kind.UNION_TYPE_EXTENSION || node.kind === Kind.ENUM_TYPE_EXTENSION || node.kind === Kind.INPUT_OBJECT_TYPE_EXTENSION;
}
function ExecutableDefinitionsRule(context) {
    return {
        Document (node) {
            for (const definition of node.definitions){
                if (!isExecutableDefinitionNode(definition)) {
                    const defName = definition.kind === Kind.SCHEMA_DEFINITION || definition.kind === Kind.SCHEMA_EXTENSION ? 'schema' : '"' + definition.name.value + '"';
                    context.reportError(new GraphQLError(`The ${defName} definition is not executable.`, definition));
                }
            }
            return false;
        }
    };
}
function UniqueOperationNamesRule(context) {
    const knownOperationNames = Object.create(null);
    return {
        OperationDefinition (node) {
            const operationName = node.name;
            if (operationName) {
                if (knownOperationNames[operationName.value]) {
                    context.reportError(new GraphQLError(`There can be only one operation named "${operationName.value}".`, [
                        knownOperationNames[operationName.value],
                        operationName
                    ]));
                } else {
                    knownOperationNames[operationName.value] = operationName;
                }
            }
            return false;
        },
        FragmentDefinition: ()=>false
    };
}
function LoneAnonymousOperationRule(context) {
    let operationCount = 0;
    return {
        Document (node) {
            operationCount = node.definitions.filter((definition)=>definition.kind === Kind.OPERATION_DEFINITION
            ).length;
        },
        OperationDefinition (node) {
            if (!node.name && operationCount > 1) {
                context.reportError(new GraphQLError('This anonymous operation must be the only defined operation.', node));
            }
        }
    };
}
function SingleFieldSubscriptionsRule(context) {
    return {
        OperationDefinition (node) {
            if (node.operation === 'subscription') {
                if (node.selectionSet.selections.length !== 1) {
                    context.reportError(new GraphQLError(node.name ? `Subscription "${node.name.value}" must select only one top level field.` : 'Anonymous Subscription must select only one top level field.', node.selectionSet.selections.slice(1)));
                }
            }
        }
    };
}
function KnownTypeNamesRule(context) {
    const schema = context.getSchema();
    const existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
    const definedTypes = Object.create(null);
    for (const def of context.getDocument().definitions){
        if (isTypeDefinitionNode(def)) {
            definedTypes[def.name.value] = true;
        }
    }
    const typeNames = Object.keys(existingTypesMap).concat(Object.keys(definedTypes));
    return {
        NamedType (node, _1, parent, _2, ancestors) {
            const typeName = node.name.value;
            if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
                const definitionNode = ancestors[2] ?? parent;
                const isSDL = definitionNode != null && isSDLNode(definitionNode);
                if (isSDL && isSpecifiedScalarName(typeName)) {
                    return;
                }
                const suggestedTypes = suggestionList(typeName, isSDL ? specifiedScalarsNames.concat(typeNames) : typeNames);
                context.reportError(new GraphQLError(`Unknown type "${typeName}".` + didYouMean(suggestedTypes), node));
            }
        }
    };
}
const specifiedScalarsNames = specifiedScalarTypes.map((type59)=>type59.name
);
function isSpecifiedScalarName(typeName) {
    return specifiedScalarsNames.indexOf(typeName) !== -1;
}
function isSDLNode(value) {
    return !Array.isArray(value) && (isTypeSystemDefinitionNode(value) || isTypeSystemExtensionNode(value));
}
function FragmentsOnCompositeTypesRule(context) {
    return {
        InlineFragment (node) {
            const typeCondition = node.typeCondition;
            if (typeCondition) {
                const type60 = typeFromAST(context.getSchema(), typeCondition);
                if (type60 && !isCompositeType(type60)) {
                    const typeStr = print(typeCondition);
                    context.reportError(new GraphQLError(`Fragment cannot condition on non composite type "${typeStr}".`, typeCondition));
                }
            }
        },
        FragmentDefinition (node) {
            const type61 = typeFromAST(context.getSchema(), node.typeCondition);
            if (type61 && !isCompositeType(type61)) {
                const typeStr = print(node.typeCondition);
                context.reportError(new GraphQLError(`Fragment "${node.name.value}" cannot condition on non composite type "${typeStr}".`, node.typeCondition));
            }
        }
    };
}
function VariablesAreInputTypesRule(context) {
    return {
        VariableDefinition (node) {
            const type62 = typeFromAST(context.getSchema(), node.type);
            if (type62 && !isInputType(type62)) {
                const variableName = node.variable.name.value;
                const typeName = print(node.type);
                context.reportError(new GraphQLError(`Variable "$${variableName}" cannot be non-input type "${typeName}".`, node.type));
            }
        }
    };
}
function ScalarLeafsRule(context) {
    return {
        Field (node) {
            const type63 = context.getType();
            const selectionSet = node.selectionSet;
            if (type63) {
                if (isLeafType(getNamedType(type63))) {
                    if (selectionSet) {
                        const fieldName = node.name.value;
                        const typeStr = inspect(type63);
                        context.reportError(new GraphQLError(`Field "${fieldName}" must not have a selection since type "${typeStr}" has no subfields.`, selectionSet));
                    }
                } else if (!selectionSet) {
                    const fieldName = node.name.value;
                    const typeStr = inspect(type63);
                    context.reportError(new GraphQLError(`Field "${fieldName}" of type "${typeStr}" must have a selection of subfields. Did you mean "${fieldName} { ... }"?`, node));
                }
            }
        }
    };
}
function FieldsOnCorrectTypeRule(context) {
    return {
        Field (node) {
            const type64 = context.getParentType();
            if (type64) {
                const fieldDef = context.getFieldDef();
                if (!fieldDef) {
                    const schema = context.getSchema();
                    const fieldName = node.name.value;
                    let suggestion = didYouMean('to use an inline fragment on', getSuggestedTypeNames(schema, type64, fieldName));
                    if (suggestion === '') {
                        suggestion = didYouMean(getSuggestedFieldNames(type64, fieldName));
                    }
                    context.reportError(new GraphQLError(`Cannot query field "${fieldName}" on type "${type64.name}".` + suggestion, node));
                }
            }
        }
    };
}
function getSuggestedTypeNames(schema, type65, fieldName) {
    if (!isAbstractType(type65)) {
        return [];
    }
    const suggestedTypes = new Set();
    const usageCount = Object.create(null);
    for (const possibleType of schema.getPossibleTypes(type65)){
        if (!possibleType.getFields()[fieldName]) {
            continue;
        }
        suggestedTypes.add(possibleType);
        usageCount[possibleType.name] = 1;
        for (const possibleInterface of possibleType.getInterfaces()){
            if (!possibleInterface.getFields()[fieldName]) {
                continue;
            }
            suggestedTypes.add(possibleInterface);
            usageCount[possibleInterface.name] = (usageCount[possibleInterface.name] ?? 0) + 1;
        }
    }
    return arrayFrom(suggestedTypes).sort((typeA, typeB)=>{
        const usageCountDiff = usageCount[typeB.name] - usageCount[typeA.name];
        if (usageCountDiff !== 0) {
            return usageCountDiff;
        }
        if (isInterfaceType(typeA) && schema.isSubType(typeA, typeB)) {
            return -1;
        }
        if (isInterfaceType(typeB) && schema.isSubType(typeB, typeA)) {
            return 1;
        }
        return typeA.name.localeCompare(typeB.name);
    }).map((x5)=>x5.name
    );
}
function getSuggestedFieldNames(type66, fieldName) {
    if (isObjectType(type66) || isInterfaceType(type66)) {
        const possibleFieldNames = Object.keys(type66.getFields());
        return suggestionList(fieldName, possibleFieldNames);
    }
    return [];
}
function UniqueFragmentNamesRule(context) {
    const knownFragmentNames = Object.create(null);
    return {
        OperationDefinition: ()=>false
        ,
        FragmentDefinition (node) {
            const fragmentName = node.name.value;
            if (knownFragmentNames[fragmentName]) {
                context.reportError(new GraphQLError(`There can be only one fragment named "${fragmentName}".`, [
                    knownFragmentNames[fragmentName],
                    node.name
                ]));
            } else {
                knownFragmentNames[fragmentName] = node.name;
            }
            return false;
        }
    };
}
function KnownFragmentNamesRule(context) {
    return {
        FragmentSpread (node) {
            const fragmentName = node.name.value;
            const fragment = context.getFragment(fragmentName);
            if (!fragment) {
                context.reportError(new GraphQLError(`Unknown fragment "${fragmentName}".`, node.name));
            }
        }
    };
}
function NoUnusedFragmentsRule(context) {
    const operationDefs = [];
    const fragmentDefs = [];
    return {
        OperationDefinition (node) {
            operationDefs.push(node);
            return false;
        },
        FragmentDefinition (node) {
            fragmentDefs.push(node);
            return false;
        },
        Document: {
            leave () {
                const fragmentNameUsed = Object.create(null);
                for (const operation of operationDefs){
                    for (const fragment of context.getRecursivelyReferencedFragments(operation)){
                        fragmentNameUsed[fragment.name.value] = true;
                    }
                }
                for (const fragmentDef of fragmentDefs){
                    const fragName = fragmentDef.name.value;
                    if (fragmentNameUsed[fragName] !== true) {
                        context.reportError(new GraphQLError(`Fragment "${fragName}" is never used.`, fragmentDef));
                    }
                }
            }
        }
    };
}
function PossibleFragmentSpreadsRule(context) {
    return {
        InlineFragment (node) {
            const fragType = context.getType();
            const parentType = context.getParentType();
            if (isCompositeType(fragType) && isCompositeType(parentType) && !doTypesOverlap(context.getSchema(), fragType, parentType)) {
                const parentTypeStr = inspect(parentType);
                const fragTypeStr = inspect(fragType);
                context.reportError(new GraphQLError(`Fragment cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`, node));
            }
        },
        FragmentSpread (node) {
            const fragName = node.name.value;
            const fragType = getFragmentType(context, fragName);
            const parentType = context.getParentType();
            if (fragType && parentType && !doTypesOverlap(context.getSchema(), fragType, parentType)) {
                const parentTypeStr = inspect(parentType);
                const fragTypeStr = inspect(fragType);
                context.reportError(new GraphQLError(`Fragment "${fragName}" cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`, node));
            }
        }
    };
}
function getFragmentType(context, name) {
    const frag = context.getFragment(name);
    if (frag) {
        const type67 = typeFromAST(context.getSchema(), frag.typeCondition);
        if (isCompositeType(type67)) {
            return type67;
        }
    }
}
function NoFragmentCyclesRule(context) {
    const visitedFrags = Object.create(null);
    const spreadPath = [];
    const spreadPathIndexByName = Object.create(null);
    return {
        OperationDefinition: ()=>false
        ,
        FragmentDefinition (node) {
            detectCycleRecursive(node);
            return false;
        }
    };
    function detectCycleRecursive(fragment) {
        if (visitedFrags[fragment.name.value]) {
            return;
        }
        const fragmentName = fragment.name.value;
        visitedFrags[fragmentName] = true;
        const spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
        if (spreadNodes.length === 0) {
            return;
        }
        spreadPathIndexByName[fragmentName] = spreadPath.length;
        for (const spreadNode of spreadNodes){
            const spreadName = spreadNode.name.value;
            const cycleIndex = spreadPathIndexByName[spreadName];
            spreadPath.push(spreadNode);
            if (cycleIndex === undefined) {
                const spreadFragment = context.getFragment(spreadName);
                if (spreadFragment) {
                    detectCycleRecursive(spreadFragment);
                }
            } else {
                const cyclePath = spreadPath.slice(cycleIndex);
                const viaPath = cyclePath.slice(0, -1).map((s3)=>'"' + s3.name.value + '"'
                ).join(', ');
                context.reportError(new GraphQLError(`Cannot spread fragment "${spreadName}" within itself` + (viaPath !== '' ? ` via ${viaPath}.` : '.'), cyclePath));
            }
            spreadPath.pop();
        }
        spreadPathIndexByName[fragmentName] = undefined;
    }
}
function UniqueVariableNamesRule(context) {
    let knownVariableNames = Object.create(null);
    return {
        OperationDefinition () {
            knownVariableNames = Object.create(null);
        },
        VariableDefinition (node) {
            const variableName = node.variable.name.value;
            if (knownVariableNames[variableName]) {
                context.reportError(new GraphQLError(`There can be only one variable named "$${variableName}".`, [
                    knownVariableNames[variableName],
                    node.variable.name
                ]));
            } else {
                knownVariableNames[variableName] = node.variable.name;
            }
        }
    };
}
function NoUndefinedVariablesRule(context) {
    let variableNameDefined = Object.create(null);
    return {
        OperationDefinition: {
            enter () {
                variableNameDefined = Object.create(null);
            },
            leave (operation) {
                const usages = context.getRecursiveVariableUsages(operation);
                for (const { node  } of usages){
                    const varName = node.name.value;
                    if (variableNameDefined[varName] !== true) {
                        context.reportError(new GraphQLError(operation.name ? `Variable "$${varName}" is not defined by operation "${operation.name.value}".` : `Variable "$${varName}" is not defined.`, [
                            node,
                            operation
                        ]));
                    }
                }
            }
        },
        VariableDefinition (node) {
            variableNameDefined[node.variable.name.value] = true;
        }
    };
}
function NoUnusedVariablesRule(context) {
    let variableDefs = [];
    return {
        OperationDefinition: {
            enter () {
                variableDefs = [];
            },
            leave (operation) {
                const variableNameUsed = Object.create(null);
                const usages = context.getRecursiveVariableUsages(operation);
                for (const { node  } of usages){
                    variableNameUsed[node.name.value] = true;
                }
                for (const variableDef of variableDefs){
                    const variableName = variableDef.variable.name.value;
                    if (variableNameUsed[variableName] !== true) {
                        context.reportError(new GraphQLError(operation.name ? `Variable "$${variableName}" is never used in operation "${operation.name.value}".` : `Variable "$${variableName}" is never used.`, variableDef));
                    }
                }
            }
        },
        VariableDefinition (def) {
            variableDefs.push(def);
        }
    };
}
function KnownDirectivesRule(context) {
    const locationsMap = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;
    for (const directive of definedDirectives){
        locationsMap[directive.name] = directive.locations;
    }
    const astDefinitions = context.getDocument().definitions;
    for (const def of astDefinitions){
        if (def.kind === Kind.DIRECTIVE_DEFINITION) {
            locationsMap[def.name.value] = def.locations.map((name)=>name.value
            );
        }
    }
    return {
        Directive (node, _key, _parent, _path, ancestors) {
            const name = node.name.value;
            const locations = locationsMap[name];
            if (!locations) {
                context.reportError(new GraphQLError(`Unknown directive "@${name}".`, node));
                return;
            }
            const candidateLocation = getDirectiveLocationForASTPath(ancestors);
            if (candidateLocation && locations.indexOf(candidateLocation) === -1) {
                context.reportError(new GraphQLError(`Directive "@${name}" may not be used on ${candidateLocation}.`, node));
            }
        }
    };
}
function getDirectiveLocationForASTPath(ancestors) {
    const appliedTo = ancestors[ancestors.length - 1];
    invariant(!Array.isArray(appliedTo));
    switch(appliedTo.kind){
        case Kind.OPERATION_DEFINITION:
            return getDirectiveLocationForOperation(appliedTo.operation);
        case Kind.FIELD:
            return DirectiveLocation.FIELD;
        case Kind.FRAGMENT_SPREAD:
            return DirectiveLocation.FRAGMENT_SPREAD;
        case Kind.INLINE_FRAGMENT:
            return DirectiveLocation.INLINE_FRAGMENT;
        case Kind.FRAGMENT_DEFINITION:
            return DirectiveLocation.FRAGMENT_DEFINITION;
        case Kind.VARIABLE_DEFINITION:
            return DirectiveLocation.VARIABLE_DEFINITION;
        case Kind.SCHEMA_DEFINITION:
        case Kind.SCHEMA_EXTENSION:
            return DirectiveLocation.SCHEMA;
        case Kind.SCALAR_TYPE_DEFINITION:
        case Kind.SCALAR_TYPE_EXTENSION:
            return DirectiveLocation.SCALAR;
        case Kind.OBJECT_TYPE_DEFINITION:
        case Kind.OBJECT_TYPE_EXTENSION:
            return DirectiveLocation.OBJECT;
        case Kind.FIELD_DEFINITION:
            return DirectiveLocation.FIELD_DEFINITION;
        case Kind.INTERFACE_TYPE_DEFINITION:
        case Kind.INTERFACE_TYPE_EXTENSION:
            return DirectiveLocation.INTERFACE;
        case Kind.UNION_TYPE_DEFINITION:
        case Kind.UNION_TYPE_EXTENSION:
            return DirectiveLocation.UNION;
        case Kind.ENUM_TYPE_DEFINITION:
        case Kind.ENUM_TYPE_EXTENSION:
            return DirectiveLocation.ENUM;
        case Kind.ENUM_VALUE_DEFINITION:
            return DirectiveLocation.ENUM_VALUE;
        case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        case Kind.INPUT_OBJECT_TYPE_EXTENSION:
            return DirectiveLocation.INPUT_OBJECT;
        case Kind.INPUT_VALUE_DEFINITION:
            {
                const parentNode = ancestors[ancestors.length - 3];
                return parentNode.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION ? DirectiveLocation.INPUT_FIELD_DEFINITION : DirectiveLocation.ARGUMENT_DEFINITION;
            }
    }
}
function getDirectiveLocationForOperation(operation) {
    switch(operation){
        case 'query':
            return DirectiveLocation.QUERY;
        case 'mutation':
            return DirectiveLocation.MUTATION;
        case 'subscription':
            return DirectiveLocation.SUBSCRIPTION;
    }
    invariant(false, 'Unexpected operation: ' + inspect(operation));
}
function UniqueDirectivesPerLocationRule(context) {
    const uniqueDirectiveMap = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;
    for (const directive1 of definedDirectives){
        uniqueDirectiveMap[directive1.name] = !directive1.isRepeatable;
    }
    const astDefinitions = context.getDocument().definitions;
    for (const def of astDefinitions){
        if (def.kind === Kind.DIRECTIVE_DEFINITION) {
            uniqueDirectiveMap[def.name.value] = !def.repeatable;
        }
    }
    const schemaDirectives = Object.create(null);
    const typeDirectivesMap = Object.create(null);
    return {
        enter (node) {
            if (node.directives == null) {
                return;
            }
            let seenDirectives;
            if (node.kind === Kind.SCHEMA_DEFINITION || node.kind === Kind.SCHEMA_EXTENSION) {
                seenDirectives = schemaDirectives;
            } else if (isTypeDefinitionNode(node) || isTypeExtensionNode(node)) {
                const typeName = node.name.value;
                seenDirectives = typeDirectivesMap[typeName];
                if (seenDirectives === undefined) {
                    typeDirectivesMap[typeName] = seenDirectives = Object.create(null);
                }
            } else {
                seenDirectives = Object.create(null);
            }
            for (const directive of node.directives){
                const directiveName = directive.name.value;
                if (uniqueDirectiveMap[directiveName]) {
                    if (seenDirectives[directiveName]) {
                        context.reportError(new GraphQLError(`The directive "@${directiveName}" can only be used once at this location.`, [
                            seenDirectives[directiveName],
                            directive
                        ]));
                    } else {
                        seenDirectives[directiveName] = directive;
                    }
                }
            }
        }
    };
}
function KnownArgumentNamesRule(context) {
    return {
        ...KnownArgumentNamesOnDirectivesRule(context),
        Argument (argNode) {
            const argDef = context.getArgument();
            const fieldDef = context.getFieldDef();
            const parentType = context.getParentType();
            if (!argDef && fieldDef && parentType) {
                const argName = argNode.name.value;
                const knownArgsNames = fieldDef.args.map((arg)=>arg.name
                );
                const suggestions = suggestionList(argName, knownArgsNames);
                context.reportError(new GraphQLError(`Unknown argument "${argName}" on field "${parentType.name}.${fieldDef.name}".` + didYouMean(suggestions), argNode));
            }
        }
    };
}
function KnownArgumentNamesOnDirectivesRule(context) {
    const directiveArgs = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;
    for (const directive of definedDirectives){
        directiveArgs[directive.name] = directive.args.map((arg)=>arg.name
        );
    }
    const astDefinitions = context.getDocument().definitions;
    for (const def of astDefinitions){
        if (def.kind === Kind.DIRECTIVE_DEFINITION) {
            const argsNodes = def.arguments ?? [];
            directiveArgs[def.name.value] = argsNodes.map((arg)=>arg.name.value
            );
        }
    }
    return {
        Directive (directiveNode) {
            const directiveName = directiveNode.name.value;
            const knownArgs = directiveArgs[directiveName];
            if (directiveNode.arguments && knownArgs) {
                for (const argNode of directiveNode.arguments){
                    const argName = argNode.name.value;
                    if (knownArgs.indexOf(argName) === -1) {
                        const suggestions = suggestionList(argName, knownArgs);
                        context.reportError(new GraphQLError(`Unknown argument "${argName}" on directive "@${directiveName}".` + didYouMean(suggestions), argNode));
                    }
                }
            }
            return false;
        }
    };
}
function UniqueArgumentNamesRule(context) {
    let knownArgNames = Object.create(null);
    return {
        Field () {
            knownArgNames = Object.create(null);
        },
        Directive () {
            knownArgNames = Object.create(null);
        },
        Argument (node) {
            const argName = node.name.value;
            if (knownArgNames[argName]) {
                context.reportError(new GraphQLError(`There can be only one argument named "${argName}".`, [
                    knownArgNames[argName],
                    node.name
                ]));
            } else {
                knownArgNames[argName] = node.name;
            }
            return false;
        }
    };
}
function ValuesOfCorrectTypeRule(context) {
    return {
        ListValue (node) {
            const type68 = getNullableType(context.getParentInputType());
            if (!isListType(type68)) {
                isValidValueNode(context, node);
                return false;
            }
        },
        ObjectValue (node) {
            const type69 = getNamedType(context.getInputType());
            if (!isInputObjectType(type69)) {
                isValidValueNode(context, node);
                return false;
            }
            const fieldNodeMap = keyMap(node.fields, (field)=>field.name.value
            );
            for (const fieldDef of objectValues(type69.getFields())){
                const fieldNode = fieldNodeMap[fieldDef.name];
                if (!fieldNode && isRequiredInputField(fieldDef)) {
                    const typeStr = inspect(fieldDef.type);
                    context.reportError(new GraphQLError(`Field "${type69.name}.${fieldDef.name}" of required type "${typeStr}" was not provided.`, node));
                }
            }
        },
        ObjectField (node) {
            const parentType = getNamedType(context.getParentInputType());
            const fieldType = context.getInputType();
            if (!fieldType && isInputObjectType(parentType)) {
                const suggestions = suggestionList(node.name.value, Object.keys(parentType.getFields()));
                context.reportError(new GraphQLError(`Field "${node.name.value}" is not defined by type "${parentType.name}".` + didYouMean(suggestions), node));
            }
        },
        NullValue (node) {
            const type70 = context.getInputType();
            if (isNonNullType(type70)) {
                context.reportError(new GraphQLError(`Expected value of type "${inspect(type70)}", found ${print(node)}.`, node));
            }
        },
        EnumValue: (node)=>isValidValueNode(context, node)
        ,
        IntValue: (node)=>isValidValueNode(context, node)
        ,
        FloatValue: (node)=>isValidValueNode(context, node)
        ,
        StringValue: (node)=>isValidValueNode(context, node)
        ,
        BooleanValue: (node)=>isValidValueNode(context, node)
    };
}
function isValidValueNode(context, node) {
    const locationType = context.getInputType();
    if (!locationType) {
        return;
    }
    const type71 = getNamedType(locationType);
    if (!isLeafType(type71)) {
        const typeStr = inspect(locationType);
        context.reportError(new GraphQLError(`Expected value of type "${typeStr}", found ${print(node)}.`, node));
        return;
    }
    try {
        const parseResult = type71.parseLiteral(node, undefined);
        if (parseResult === undefined) {
            const typeStr = inspect(locationType);
            context.reportError(new GraphQLError(`Expected value of type "${typeStr}", found ${print(node)}.`, node));
        }
    } catch (error) {
        const typeStr = inspect(locationType);
        if (error instanceof GraphQLError) {
            context.reportError(error);
        } else {
            context.reportError(new GraphQLError(`Expected value of type "${typeStr}", found ${print(node)}; ` + error.message, node, undefined, undefined, undefined, error));
        }
    }
}
function ProvidedRequiredArgumentsRule(context) {
    return {
        ...ProvidedRequiredArgumentsOnDirectivesRule(context),
        Field: {
            leave (fieldNode) {
                const fieldDef = context.getFieldDef();
                if (!fieldDef) {
                    return false;
                }
                const argNodes = fieldNode.arguments ?? [];
                const argNodeMap = keyMap(argNodes, (arg)=>arg.name.value
                );
                for (const argDef of fieldDef.args){
                    const argNode = argNodeMap[argDef.name];
                    if (!argNode && isRequiredArgument(argDef)) {
                        const argTypeStr = inspect(argDef.type);
                        context.reportError(new GraphQLError(`Field "${fieldDef.name}" argument "${argDef.name}" of type "${argTypeStr}" is required, but it was not provided.`, fieldNode));
                    }
                }
            }
        }
    };
}
function ProvidedRequiredArgumentsOnDirectivesRule(context) {
    const requiredArgsMap = Object.create(null);
    const schema = context.getSchema();
    const definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;
    for (const directive of definedDirectives){
        requiredArgsMap[directive.name] = keyMap(directive.args.filter(isRequiredArgument), (arg)=>arg.name
        );
    }
    const astDefinitions = context.getDocument().definitions;
    for (const def of astDefinitions){
        if (def.kind === Kind.DIRECTIVE_DEFINITION) {
            const argNodes = def.arguments ?? [];
            requiredArgsMap[def.name.value] = keyMap(argNodes.filter(isRequiredArgumentNode), (arg)=>arg.name.value
            );
        }
    }
    return {
        Directive: {
            leave (directiveNode) {
                const directiveName = directiveNode.name.value;
                const requiredArgs = requiredArgsMap[directiveName];
                if (requiredArgs) {
                    const argNodes = directiveNode.arguments ?? [];
                    const argNodeMap = keyMap(argNodes, (arg)=>arg.name.value
                    );
                    for (const argName of Object.keys(requiredArgs)){
                        if (!argNodeMap[argName]) {
                            const argType = requiredArgs[argName].type;
                            const argTypeStr = isType(argType) ? inspect(argType) : print(argType);
                            context.reportError(new GraphQLError(`Directive "@${directiveName}" argument "${argName}" of type "${argTypeStr}" is required, but it was not provided.`, directiveNode));
                        }
                    }
                }
            }
        }
    };
}
function isRequiredArgumentNode(arg) {
    return arg.type.kind === Kind.NON_NULL_TYPE && arg.defaultValue == null;
}
function VariablesInAllowedPositionRule(context) {
    let varDefMap = Object.create(null);
    return {
        OperationDefinition: {
            enter () {
                varDefMap = Object.create(null);
            },
            leave (operation) {
                const usages = context.getRecursiveVariableUsages(operation);
                for (const { node , type: type72 , defaultValue  } of usages){
                    const varName = node.name.value;
                    const varDef = varDefMap[varName];
                    if (varDef && type72) {
                        const schema = context.getSchema();
                        const varType = typeFromAST(schema, varDef.type);
                        if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type72, defaultValue)) {
                            const varTypeStr = inspect(varType);
                            const typeStr = inspect(type72);
                            context.reportError(new GraphQLError(`Variable "$${varName}" of type "${varTypeStr}" used in position expecting type "${typeStr}".`, [
                                varDef,
                                node
                            ]));
                        }
                    }
                }
            }
        },
        VariableDefinition (node) {
            varDefMap[node.variable.name.value] = node;
        }
    };
}
function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
    if (isNonNullType(locationType) && !isNonNullType(varType)) {
        const hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== Kind.NULL;
        const hasLocationDefaultValue = locationDefaultValue !== undefined;
        if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
            return false;
        }
        const nullableLocationType = locationType.ofType;
        return isTypeSubTypeOf(schema, varType, nullableLocationType);
    }
    return isTypeSubTypeOf(schema, varType, locationType);
}
function reasonMessage(reason) {
    if (Array.isArray(reason)) {
        return reason.map(([responseName, subReason])=>`subfields "${responseName}" conflict because ` + reasonMessage(subReason)
        ).join(' and ');
    }
    return reason;
}
function OverlappingFieldsCanBeMergedRule(context) {
    const comparedFragmentPairs = new PairSet();
    const cachedFieldsAndFragmentNames = new Map();
    return {
        SelectionSet (selectionSet) {
            const conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);
            for (const [[responseName, reason], fields1, fields2] of conflicts){
                const reasonMsg = reasonMessage(reason);
                context.reportError(new GraphQLError(`Fields "${responseName}" conflict because ${reasonMsg}. Use different aliases on the fields to fetch both if this was intentional.`, fields1.concat(fields2)));
            }
        }
    };
}
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
    const conflicts = [];
    const [fieldMap, fragmentNames] = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet);
    collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);
    if (fragmentNames.length !== 0) {
        for(let i31 = 0; i31 < fragmentNames.length; i31++){
            collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fieldMap, fragmentNames[i31]);
            for(let j8 = i31 + 1; j8 < fragmentNames.length; j8++){
                collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i31], fragmentNames[j8]);
            }
        }
    }
    return conflicts;
}
function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
    const fragment = context.getFragment(fragmentName);
    if (!fragment) {
        return;
    }
    const [fieldMap2, fragmentNames2] = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment);
    if (fieldMap === fieldMap2) {
        return;
    }
    collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2);
    for(let i32 = 0; i32 < fragmentNames2.length; i32++){
        collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i32]);
    }
}
function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
    if (fragmentName1 === fragmentName2) {
        return;
    }
    if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
        return;
    }
    comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
    const fragment1 = context.getFragment(fragmentName1);
    const fragment2 = context.getFragment(fragmentName2);
    if (!fragment1 || !fragment2) {
        return;
    }
    const [fieldMap1, fragmentNames1] = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1);
    const [fieldMap2, fragmentNames2] = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2);
    collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);
    for(let j9 = 0; j9 < fragmentNames2.length; j9++){
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j9]);
    }
    for(let i33 = 0; i33 < fragmentNames1.length; i33++){
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i33], fragmentName2);
    }
}
function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
    const conflicts = [];
    const [fieldMap1, fragmentNames1] = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1);
    const [fieldMap2, fragmentNames2] = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2);
    collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2);
    if (fragmentNames2.length !== 0) {
        for(let j10 = 0; j10 < fragmentNames2.length; j10++){
            collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j10]);
        }
    }
    if (fragmentNames1.length !== 0) {
        for(let i34 = 0; i34 < fragmentNames1.length; i34++){
            collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i34]);
        }
    }
    for(let i35 = 0; i35 < fragmentNames1.length; i35++){
        for(let j11 = 0; j11 < fragmentNames2.length; j11++){
            collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i35], fragmentNames2[j11]);
        }
    }
    return conflicts;
}
function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
    for (const [responseName, fields] of objectEntries(fieldMap)){
        if (fields.length > 1) {
            for(let i36 = 0; i36 < fields.length; i36++){
                for(let j12 = i36 + 1; j12 < fields.length; j12++){
                    const conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, responseName, fields[i36], fields[j12]);
                    if (conflict) {
                        conflicts.push(conflict);
                    }
                }
            }
        }
    }
}
function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
    for (const responseName of Object.keys(fieldMap1)){
        const fields2 = fieldMap2[responseName];
        if (fields2) {
            const fields1 = fieldMap1[responseName];
            for(let i37 = 0; i37 < fields1.length; i37++){
                for(let j13 = 0; j13 < fields2.length; j13++){
                    const conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i37], fields2[j13]);
                    if (conflict) {
                        conflicts.push(conflict);
                    }
                }
            }
        }
    }
}
function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
    const [parentType1, node1, def1] = field1;
    const [parentType2, node2, def2] = field2;
    const areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && isObjectType(parentType1) && isObjectType(parentType2);
    if (!areMutuallyExclusive) {
        const name1 = node1.name.value;
        const name2 = node2.name.value;
        if (name1 !== name2) {
            return [
                [
                    responseName,
                    `"${name1}" and "${name2}" are different fields`
                ],
                [
                    node1
                ],
                [
                    node2
                ]
            ];
        }
        const args1 = node1.arguments ?? [];
        const args2 = node2.arguments ?? [];
        if (!sameArguments(args1, args2)) {
            return [
                [
                    responseName,
                    'they have differing arguments'
                ],
                [
                    node1
                ],
                [
                    node2
                ]
            ];
        }
    }
    const type1 = def1?.type;
    const type2 = def2?.type;
    if (type1 && type2 && doTypesConflict(type1, type2)) {
        return [
            [
                responseName,
                `they return conflicting types "${inspect(type1)}" and "${inspect(type2)}"`
            ],
            [
                node1
            ],
            [
                node2
            ]
        ];
    }
    const selectionSet1 = node1.selectionSet;
    const selectionSet2 = node2.selectionSet;
    if (selectionSet1 && selectionSet2) {
        const conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, getNamedType(type1), selectionSet1, getNamedType(type2), selectionSet2);
        return subfieldConflicts(conflicts, responseName, node1, node2);
    }
}
function sameArguments(arguments1, arguments2) {
    if (arguments1.length !== arguments2.length) {
        return false;
    }
    return arguments1.every((argument1)=>{
        const argument2 = find(arguments2, (argument)=>argument.name.value === argument1.name.value
        );
        if (!argument2) {
            return false;
        }
        return sameValue(argument1.value, argument2.value);
    });
}
function sameValue(value1, value2) {
    return print(value1) === print(value2);
}
function doTypesConflict(type1, type2) {
    if (isListType(type1)) {
        return isListType(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
    }
    if (isListType(type2)) {
        return true;
    }
    if (isNonNullType(type1)) {
        return isNonNullType(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
    }
    if (isNonNullType(type2)) {
        return true;
    }
    if (isLeafType(type1) || isLeafType(type2)) {
        return type1 !== type2;
    }
    return false;
}
function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
    let cached = cachedFieldsAndFragmentNames.get(selectionSet);
    if (!cached) {
        const nodeAndDefs = Object.create(null);
        const fragmentNames = Object.create(null);
        _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);
        cached = [
            nodeAndDefs,
            Object.keys(fragmentNames)
        ];
        cachedFieldsAndFragmentNames.set(selectionSet, cached);
    }
    return cached;
}
function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
    const cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
    if (cached) {
        return cached;
    }
    const fragmentType = typeFromAST(context.getSchema(), fragment.typeCondition);
    return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}
function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
    for (const selection of selectionSet.selections){
        switch(selection.kind){
            case Kind.FIELD:
                {
                    const fieldName = selection.name.value;
                    let fieldDef;
                    if (isObjectType(parentType) || isInterfaceType(parentType)) {
                        fieldDef = parentType.getFields()[fieldName];
                    }
                    const responseName = selection.alias ? selection.alias.value : fieldName;
                    if (!nodeAndDefs[responseName]) {
                        nodeAndDefs[responseName] = [];
                    }
                    nodeAndDefs[responseName].push([
                        parentType,
                        selection,
                        fieldDef
                    ]);
                    break;
                }
            case Kind.FRAGMENT_SPREAD:
                fragmentNames[selection.name.value] = true;
                break;
            case Kind.INLINE_FRAGMENT:
                {
                    const typeCondition = selection.typeCondition;
                    const inlineFragmentType = typeCondition ? typeFromAST(context.getSchema(), typeCondition) : parentType;
                    _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);
                    break;
                }
        }
    }
}
function subfieldConflicts(conflicts, responseName, node1, node2) {
    if (conflicts.length > 0) {
        return [
            [
                responseName,
                conflicts.map(([reason])=>reason
                )
            ],
            conflicts.reduce((allFields, [, fields1])=>allFields.concat(fields1)
            , [
                node1
            ]),
            conflicts.reduce((allFields, [, , fields2])=>allFields.concat(fields2)
            , [
                node2
            ])
        ];
    }
}
class PairSet {
    constructor(){
        this._data = Object.create(null);
    }
    has(a7, b5, areMutuallyExclusive) {
        const first = this._data[a7];
        const result = first && first[b5];
        if (result === undefined) {
            return false;
        }
        if (areMutuallyExclusive === false) {
            return result === false;
        }
        return true;
    }
    add(a8, b6, areMutuallyExclusive) {
        _pairSetAdd(this._data, a8, b6, areMutuallyExclusive);
        _pairSetAdd(this._data, b6, a8, areMutuallyExclusive);
    }
}
function _pairSetAdd(data, a9, b7, areMutuallyExclusive) {
    let map6 = data[a9];
    if (!map6) {
        map6 = Object.create(null);
        data[a9] = map6;
    }
    map6[b7] = areMutuallyExclusive;
}
function UniqueInputFieldNamesRule(context) {
    const knownNameStack = [];
    let knownNames = Object.create(null);
    return {
        ObjectValue: {
            enter () {
                knownNameStack.push(knownNames);
                knownNames = Object.create(null);
            },
            leave () {
                knownNames = knownNameStack.pop();
            }
        },
        ObjectField (node) {
            const fieldName = node.name.value;
            if (knownNames[fieldName]) {
                context.reportError(new GraphQLError(`There can be only one input field named "${fieldName}".`, [
                    knownNames[fieldName],
                    node.name
                ]));
            } else {
                knownNames[fieldName] = node.name;
            }
        }
    };
}
function LoneSchemaDefinitionRule(context) {
    const oldSchema = context.getSchema();
    const alreadyDefined = ((oldSchema?.astNode ?? oldSchema?.getQueryType()) ?? oldSchema?.getMutationType()) ?? oldSchema?.getSubscriptionType();
    let schemaDefinitionsCount = 0;
    return {
        SchemaDefinition (node) {
            if (alreadyDefined) {
                context.reportError(new GraphQLError('Cannot define a new schema within a schema extension.', node));
                return;
            }
            if (schemaDefinitionsCount > 0) {
                context.reportError(new GraphQLError('Must provide only one schema definition.', node));
            }
            ++schemaDefinitionsCount;
        }
    };
}
function UniqueOperationTypesRule(context) {
    const schema = context.getSchema();
    const definedOperationTypes = Object.create(null);
    const existingOperationTypes = schema ? {
        query: schema.getQueryType(),
        mutation: schema.getMutationType(),
        subscription: schema.getSubscriptionType()
    } : {};
    return {
        SchemaDefinition: checkOperationTypes,
        SchemaExtension: checkOperationTypes
    };
    function checkOperationTypes(node) {
        const operationTypesNodes = node.operationTypes ?? [];
        for (const operationType of operationTypesNodes){
            const operation = operationType.operation;
            const alreadyDefinedOperationType = definedOperationTypes[operation];
            if (existingOperationTypes[operation]) {
                context.reportError(new GraphQLError(`Type for ${operation} already defined in the schema. It cannot be redefined.`, operationType));
            } else if (alreadyDefinedOperationType) {
                context.reportError(new GraphQLError(`There can be only one ${operation} type in schema.`, [
                    alreadyDefinedOperationType,
                    operationType
                ]));
            } else {
                definedOperationTypes[operation] = operationType;
            }
        }
        return false;
    }
}
function UniqueTypeNamesRule(context) {
    const knownTypeNames = Object.create(null);
    const schema = context.getSchema();
    return {
        ScalarTypeDefinition: checkTypeName,
        ObjectTypeDefinition: checkTypeName,
        InterfaceTypeDefinition: checkTypeName,
        UnionTypeDefinition: checkTypeName,
        EnumTypeDefinition: checkTypeName,
        InputObjectTypeDefinition: checkTypeName
    };
    function checkTypeName(node) {
        const typeName = node.name.value;
        if (schema?.getType(typeName)) {
            context.reportError(new GraphQLError(`Type "${typeName}" already exists in the schema. It cannot also be defined in this type definition.`, node.name));
            return;
        }
        if (knownTypeNames[typeName]) {
            context.reportError(new GraphQLError(`There can be only one type named "${typeName}".`, [
                knownTypeNames[typeName],
                node.name
            ]));
        } else {
            knownTypeNames[typeName] = node.name;
        }
        return false;
    }
}
function UniqueEnumValueNamesRule(context) {
    const schema = context.getSchema();
    const existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
    const knownValueNames = Object.create(null);
    return {
        EnumTypeDefinition: checkValueUniqueness,
        EnumTypeExtension: checkValueUniqueness
    };
    function checkValueUniqueness(node) {
        const typeName = node.name.value;
        if (!knownValueNames[typeName]) {
            knownValueNames[typeName] = Object.create(null);
        }
        const valueNodes = node.values ?? [];
        const valueNames = knownValueNames[typeName];
        for (const valueDef of valueNodes){
            const valueName = valueDef.name.value;
            const existingType = existingTypeMap[typeName];
            if (isEnumType(existingType) && existingType.getValue(valueName)) {
                context.reportError(new GraphQLError(`Enum value "${typeName}.${valueName}" already exists in the schema. It cannot also be defined in this type extension.`, valueDef.name));
            } else if (valueNames[valueName]) {
                context.reportError(new GraphQLError(`Enum value "${typeName}.${valueName}" can only be defined once.`, [
                    valueNames[valueName],
                    valueDef.name
                ]));
            } else {
                valueNames[valueName] = valueDef.name;
            }
        }
        return false;
    }
}
function UniqueFieldDefinitionNamesRule(context) {
    const schema = context.getSchema();
    const existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
    const knownFieldNames = Object.create(null);
    return {
        InputObjectTypeDefinition: checkFieldUniqueness,
        InputObjectTypeExtension: checkFieldUniqueness,
        InterfaceTypeDefinition: checkFieldUniqueness,
        InterfaceTypeExtension: checkFieldUniqueness,
        ObjectTypeDefinition: checkFieldUniqueness,
        ObjectTypeExtension: checkFieldUniqueness
    };
    function checkFieldUniqueness(node) {
        const typeName = node.name.value;
        if (!knownFieldNames[typeName]) {
            knownFieldNames[typeName] = Object.create(null);
        }
        const fieldNodes = node.fields ?? [];
        const fieldNames = knownFieldNames[typeName];
        for (const fieldDef of fieldNodes){
            const fieldName = fieldDef.name.value;
            if (hasField(existingTypeMap[typeName], fieldName)) {
                context.reportError(new GraphQLError(`Field "${typeName}.${fieldName}" already exists in the schema. It cannot also be defined in this type extension.`, fieldDef.name));
            } else if (fieldNames[fieldName]) {
                context.reportError(new GraphQLError(`Field "${typeName}.${fieldName}" can only be defined once.`, [
                    fieldNames[fieldName],
                    fieldDef.name
                ]));
            } else {
                fieldNames[fieldName] = fieldDef.name;
            }
        }
        return false;
    }
}
function hasField(type73, fieldName) {
    if (isObjectType(type73) || isInterfaceType(type73) || isInputObjectType(type73)) {
        return type73.getFields()[fieldName];
    }
    return false;
}
function UniqueDirectiveNamesRule(context) {
    const knownDirectiveNames = Object.create(null);
    const schema = context.getSchema();
    return {
        DirectiveDefinition (node) {
            const directiveName = node.name.value;
            if (schema?.getDirective(directiveName)) {
                context.reportError(new GraphQLError(`Directive "@${directiveName}" already exists in the schema. It cannot be redefined.`, node.name));
                return;
            }
            if (knownDirectiveNames[directiveName]) {
                context.reportError(new GraphQLError(`There can be only one directive named "@${directiveName}".`, [
                    knownDirectiveNames[directiveName],
                    node.name
                ]));
            } else {
                knownDirectiveNames[directiveName] = node.name;
            }
            return false;
        }
    };
}
function PossibleTypeExtensionsRule(context) {
    const schema = context.getSchema();
    const definedTypes = Object.create(null);
    for (const def of context.getDocument().definitions){
        if (isTypeDefinitionNode(def)) {
            definedTypes[def.name.value] = def;
        }
    }
    return {
        ScalarTypeExtension: checkExtension,
        ObjectTypeExtension: checkExtension,
        InterfaceTypeExtension: checkExtension,
        UnionTypeExtension: checkExtension,
        EnumTypeExtension: checkExtension,
        InputObjectTypeExtension: checkExtension
    };
    function checkExtension(node) {
        const typeName = node.name.value;
        const defNode = definedTypes[typeName];
        const existingType = schema?.getType(typeName);
        let expectedKind;
        if (defNode) {
            expectedKind = defKindToExtKind[defNode.kind];
        } else if (existingType) {
            expectedKind = typeToExtKind(existingType);
        }
        if (expectedKind) {
            if (expectedKind !== node.kind) {
                const kindStr = extensionKindToTypeName(node.kind);
                context.reportError(new GraphQLError(`Cannot extend non-${kindStr} type "${typeName}".`, defNode ? [
                    defNode,
                    node
                ] : node));
            }
        } else {
            let allTypeNames = Object.keys(definedTypes);
            if (schema) {
                allTypeNames = allTypeNames.concat(Object.keys(schema.getTypeMap()));
            }
            const suggestedTypes = suggestionList(typeName, allTypeNames);
            context.reportError(new GraphQLError(`Cannot extend type "${typeName}" because it is not defined.` + didYouMean(suggestedTypes), node.name));
        }
    }
}
const defKindToExtKind = {
    [Kind.SCALAR_TYPE_DEFINITION]: Kind.SCALAR_TYPE_EXTENSION,
    [Kind.OBJECT_TYPE_DEFINITION]: Kind.OBJECT_TYPE_EXTENSION,
    [Kind.INTERFACE_TYPE_DEFINITION]: Kind.INTERFACE_TYPE_EXTENSION,
    [Kind.UNION_TYPE_DEFINITION]: Kind.UNION_TYPE_EXTENSION,
    [Kind.ENUM_TYPE_DEFINITION]: Kind.ENUM_TYPE_EXTENSION,
    [Kind.INPUT_OBJECT_TYPE_DEFINITION]: Kind.INPUT_OBJECT_TYPE_EXTENSION
};
function typeToExtKind(type74) {
    if (isScalarType(type74)) {
        return Kind.SCALAR_TYPE_EXTENSION;
    }
    if (isObjectType(type74)) {
        return Kind.OBJECT_TYPE_EXTENSION;
    }
    if (isInterfaceType(type74)) {
        return Kind.INTERFACE_TYPE_EXTENSION;
    }
    if (isUnionType(type74)) {
        return Kind.UNION_TYPE_EXTENSION;
    }
    if (isEnumType(type74)) {
        return Kind.ENUM_TYPE_EXTENSION;
    }
    if (isInputObjectType(type74)) {
        return Kind.INPUT_OBJECT_TYPE_EXTENSION;
    }
    invariant(false, 'Unexpected type: ' + inspect(type74));
}
function extensionKindToTypeName(kind) {
    switch(kind){
        case Kind.SCALAR_TYPE_EXTENSION:
            return 'scalar';
        case Kind.OBJECT_TYPE_EXTENSION:
            return 'object';
        case Kind.INTERFACE_TYPE_EXTENSION:
            return 'interface';
        case Kind.UNION_TYPE_EXTENSION:
            return 'union';
        case Kind.ENUM_TYPE_EXTENSION:
            return 'enum';
        case Kind.INPUT_OBJECT_TYPE_EXTENSION:
            return 'input object';
    }
    invariant(false, 'Unexpected kind: ' + inspect(kind));
}
const specifiedRules = Object.freeze([
    ExecutableDefinitionsRule,
    UniqueOperationNamesRule,
    LoneAnonymousOperationRule,
    SingleFieldSubscriptionsRule,
    KnownTypeNamesRule,
    FragmentsOnCompositeTypesRule,
    VariablesAreInputTypesRule,
    ScalarLeafsRule,
    FieldsOnCorrectTypeRule,
    UniqueFragmentNamesRule,
    KnownFragmentNamesRule,
    NoUnusedFragmentsRule,
    PossibleFragmentSpreadsRule,
    NoFragmentCyclesRule,
    UniqueVariableNamesRule,
    NoUndefinedVariablesRule,
    NoUnusedVariablesRule,
    KnownDirectivesRule,
    UniqueDirectivesPerLocationRule,
    KnownArgumentNamesRule,
    UniqueArgumentNamesRule,
    ValuesOfCorrectTypeRule,
    ProvidedRequiredArgumentsRule,
    VariablesInAllowedPositionRule,
    OverlappingFieldsCanBeMergedRule,
    UniqueInputFieldNamesRule
]);
const specifiedSDLRules = Object.freeze([
    LoneSchemaDefinitionRule,
    UniqueOperationTypesRule,
    UniqueTypeNamesRule,
    UniqueEnumValueNamesRule,
    UniqueFieldDefinitionNamesRule,
    UniqueDirectiveNamesRule,
    KnownTypeNamesRule,
    KnownDirectivesRule,
    UniqueDirectivesPerLocationRule,
    PossibleTypeExtensionsRule,
    KnownArgumentNamesOnDirectivesRule,
    UniqueArgumentNamesRule,
    UniqueInputFieldNamesRule,
    ProvidedRequiredArgumentsOnDirectivesRule
]);
class ASTValidationContext {
    constructor(ast, onError){
        this._ast = ast;
        this._fragments = undefined;
        this._fragmentSpreads = new Map();
        this._recursivelyReferencedFragments = new Map();
        this._onError = onError;
    }
    reportError(error) {
        this._onError(error);
    }
    getDocument() {
        return this._ast;
    }
    getFragment(name) {
        let fragments = this._fragments;
        if (!fragments) {
            this._fragments = fragments = this.getDocument().definitions.reduce((frags, statement)=>{
                if (statement.kind === Kind.FRAGMENT_DEFINITION) {
                    frags[statement.name.value] = statement;
                }
                return frags;
            }, Object.create(null));
        }
        return fragments[name];
    }
    getFragmentSpreads(node) {
        let spreads = this._fragmentSpreads.get(node);
        if (!spreads) {
            spreads = [];
            const setsToVisit = [
                node
            ];
            while(setsToVisit.length !== 0){
                const set3 = setsToVisit.pop();
                for (const selection of set3.selections){
                    if (selection.kind === Kind.FRAGMENT_SPREAD) {
                        spreads.push(selection);
                    } else if (selection.selectionSet) {
                        setsToVisit.push(selection.selectionSet);
                    }
                }
            }
            this._fragmentSpreads.set(node, spreads);
        }
        return spreads;
    }
    getRecursivelyReferencedFragments(operation) {
        let fragments = this._recursivelyReferencedFragments.get(operation);
        if (!fragments) {
            fragments = [];
            const collectedNames = Object.create(null);
            const nodesToVisit = [
                operation.selectionSet
            ];
            while(nodesToVisit.length !== 0){
                const node = nodesToVisit.pop();
                for (const spread of this.getFragmentSpreads(node)){
                    const fragName = spread.name.value;
                    if (collectedNames[fragName] !== true) {
                        collectedNames[fragName] = true;
                        const fragment = this.getFragment(fragName);
                        if (fragment) {
                            fragments.push(fragment);
                            nodesToVisit.push(fragment.selectionSet);
                        }
                    }
                }
            }
            this._recursivelyReferencedFragments.set(operation, fragments);
        }
        return fragments;
    }
}
class SDLValidationContext extends ASTValidationContext {
    constructor(ast, schema, onError){
        super(ast, onError);
        this._schema = schema;
    }
    getSchema() {
        return this._schema;
    }
}
class ValidationContext extends ASTValidationContext {
    constructor(schema, ast, typeInfo, onError){
        super(ast, onError);
        this._schema = schema;
        this._typeInfo = typeInfo;
        this._variableUsages = new Map();
        this._recursiveVariableUsages = new Map();
    }
    getSchema() {
        return this._schema;
    }
    getVariableUsages(node) {
        let usages = this._variableUsages.get(node);
        if (!usages) {
            const newUsages = [];
            const typeInfo = new TypeInfo(this._schema);
            visit(node, visitWithTypeInfo(typeInfo, {
                VariableDefinition: ()=>false
                ,
                Variable (variable) {
                    newUsages.push({
                        node: variable,
                        type: typeInfo.getInputType(),
                        defaultValue: typeInfo.getDefaultValue()
                    });
                }
            }));
            usages = newUsages;
            this._variableUsages.set(node, usages);
        }
        return usages;
    }
    getRecursiveVariableUsages(operation) {
        let usages = this._recursiveVariableUsages.get(operation);
        if (!usages) {
            usages = this.getVariableUsages(operation);
            for (const frag of this.getRecursivelyReferencedFragments(operation)){
                usages = usages.concat(this.getVariableUsages(frag));
            }
            this._recursiveVariableUsages.set(operation, usages);
        }
        return usages;
    }
    getType() {
        return this._typeInfo.getType();
    }
    getParentType() {
        return this._typeInfo.getParentType();
    }
    getInputType() {
        return this._typeInfo.getInputType();
    }
    getParentInputType() {
        return this._typeInfo.getParentInputType();
    }
    getFieldDef() {
        return this._typeInfo.getFieldDef();
    }
    getDirective() {
        return this._typeInfo.getDirective();
    }
    getArgument() {
        return this._typeInfo.getArgument();
    }
}
function validate(schema, documentAST, rules = specifiedRules, typeInfo = new TypeInfo(schema), options = {
    maxErrors: undefined
}) {
    devAssert(documentAST, 'Must provide document.');
    assertValidSchema(schema);
    const abortObj = Object.freeze({});
    const errors = [];
    const context = new ValidationContext(schema, documentAST, typeInfo, (error)=>{
        if (options.maxErrors != null && errors.length >= options.maxErrors) {
            errors.push(new GraphQLError('Too many validation errors, error limit reached. Validation aborted.'));
            throw abortObj;
        }
        errors.push(error);
    });
    const visitor = visitInParallel(rules.map((rule)=>rule(context)
    ));
    try {
        visit(documentAST, visitWithTypeInfo(typeInfo, visitor));
    } catch (e10) {
        if (e10 !== abortObj) {
            throw e10;
        }
    }
    return errors;
}
function validateSDL(documentAST, schemaToExtend, rules = specifiedSDLRules) {
    const errors = [];
    const context = new SDLValidationContext(documentAST, schemaToExtend, (error)=>{
        errors.push(error);
    });
    const visitors = rules.map((rule)=>rule(context)
    );
    visit(documentAST, visitInParallel(visitors));
    return errors;
}
function assertValidSDL(documentAST) {
    const errors = validateSDL(documentAST);
    if (errors.length !== 0) {
        throw new Error(errors.map((error)=>error.message
        ).join('\n\n'));
    }
}
function assertValidSDLExtension(documentAST, schema) {
    const errors = validateSDL(documentAST, schema);
    if (errors.length !== 0) {
        throw new Error(errors.map((error)=>error.message
        ).join('\n\n'));
    }
}
function memoize3(fn) {
    let cache0;
    function memoized(a11, a2, a3) {
        if (!cache0) {
            cache0 = new WeakMap();
        }
        let cache1 = cache0.get(a11);
        let cache2;
        if (cache1) {
            cache2 = cache1.get(a2);
            if (cache2) {
                const cachedValue = cache2.get(a3);
                if (cachedValue !== undefined) {
                    return cachedValue;
                }
            }
        } else {
            cache1 = new WeakMap();
            cache0.set(a11, cache1);
        }
        if (!cache2) {
            cache2 = new WeakMap();
            cache1.set(a2, cache2);
        }
        const newValue = fn(a11, a2, a3);
        cache2.set(a3, newValue);
        return newValue;
    }
    return memoized;
}
function promiseReduce(values8, callback, initialValue) {
    return values8.reduce((previous, value)=>isPromise(previous) ? previous.then((resolved)=>callback(resolved, value)
        ) : callback(previous, value)
    , initialValue);
}
function promiseForObject(object) {
    const keys3 = Object.keys(object);
    const valuesAndPromises = keys3.map((name)=>object[name]
    );
    return Promise.all(valuesAndPromises).then((values9)=>values9.reduce((resolvedObject, value, i38)=>{
            resolvedObject[keys3[i38]] = value;
            return resolvedObject;
        }, Object.create(null))
    );
}
function addPath(prev, key) {
    return {
        prev,
        key
    };
}
function pathToArray(path29) {
    const flattened = [];
    let curr = path29;
    while(curr){
        flattened.push(curr.key);
        curr = curr.prev;
    }
    return flattened.reverse();
}
function getOperationRootType(schema, operation) {
    if (operation.operation === 'query') {
        const queryType = schema.getQueryType();
        if (!queryType) {
            throw new GraphQLError('Schema does not define the required query root type.', operation);
        }
        return queryType;
    }
    if (operation.operation === 'mutation') {
        const mutationType = schema.getMutationType();
        if (!mutationType) {
            throw new GraphQLError('Schema is not configured for mutations.', operation);
        }
        return mutationType;
    }
    if (operation.operation === 'subscription') {
        const subscriptionType = schema.getSubscriptionType();
        if (!subscriptionType) {
            throw new GraphQLError('Schema is not configured for subscriptions.', operation);
        }
        return subscriptionType;
    }
    throw new GraphQLError('Can only have query, mutation and subscription operations.', operation);
}
function printPathArray(path30) {
    return path30.map((key)=>typeof key === 'number' ? '[' + key.toString() + ']' : '.' + key
    ).join('');
}
function valueFromAST(valueNode, type75, variables) {
    if (!valueNode) {
        return;
    }
    if (valueNode.kind === Kind.VARIABLE) {
        const variableName = valueNode.name.value;
        if (variables == null || variables[variableName] === undefined) {
            return;
        }
        const variableValue = variables[variableName];
        if (variableValue === null && isNonNullType(type75)) {
            return;
        }
        return variableValue;
    }
    if (isNonNullType(type75)) {
        if (valueNode.kind === Kind.NULL) {
            return;
        }
        return valueFromAST(valueNode, type75.ofType, variables);
    }
    if (valueNode.kind === Kind.NULL) {
        return null;
    }
    if (isListType(type75)) {
        const itemType = type75.ofType;
        if (valueNode.kind === Kind.LIST) {
            const coercedValues = [];
            for (const itemNode of valueNode.values){
                if (isMissingVariable(itemNode, variables)) {
                    if (isNonNullType(itemType)) {
                        return;
                    }
                    coercedValues.push(null);
                } else {
                    const itemValue = valueFromAST(itemNode, itemType, variables);
                    if (itemValue === undefined) {
                        return;
                    }
                    coercedValues.push(itemValue);
                }
            }
            return coercedValues;
        }
        const coercedValue = valueFromAST(valueNode, itemType, variables);
        if (coercedValue === undefined) {
            return;
        }
        return [
            coercedValue
        ];
    }
    if (isInputObjectType(type75)) {
        if (valueNode.kind !== Kind.OBJECT) {
            return;
        }
        const coercedObj = Object.create(null);
        const fieldNodes = keyMap(valueNode.fields, (field)=>field.name.value
        );
        for (const field1 of objectValues(type75.getFields())){
            const fieldNode = fieldNodes[field1.name];
            if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
                if (field1.defaultValue !== undefined) {
                    coercedObj[field1.name] = field1.defaultValue;
                } else if (isNonNullType(field1.type)) {
                    return;
                }
                continue;
            }
            const fieldValue = valueFromAST(fieldNode.value, field1.type, variables);
            if (fieldValue === undefined) {
                return;
            }
            coercedObj[field1.name] = fieldValue;
        }
        return coercedObj;
    }
    if (isLeafType(type75)) {
        let result;
        try {
            result = type75.parseLiteral(valueNode, variables);
        } catch (_error) {
            return;
        }
        if (result === undefined) {
            return;
        }
        return result;
    }
    invariant(false, 'Unexpected input type: ' + inspect(type75));
}
function isMissingVariable(valueNode, variables) {
    return valueNode.kind === Kind.VARIABLE && (variables == null || variables[valueNode.name.value] === undefined);
}
function coerceInputValue(inputValue, type76, onError = defaultOnError) {
    return coerceInputValueImpl(inputValue, type76, onError);
}
function defaultOnError(path31, invalidValue, error) {
    let errorPrefix = 'Invalid value ' + inspect(invalidValue);
    if (path31.length > 0) {
        errorPrefix += ` at "value${printPathArray(path31)}"`;
    }
    error.message = errorPrefix + ': ' + error.message;
    throw error;
}
function coerceInputValueImpl(inputValue, type77, onError, path32) {
    if (isNonNullType(type77)) {
        if (inputValue != null) {
            return coerceInputValueImpl(inputValue, type77.ofType, onError, path32);
        }
        onError(pathToArray(path32), inputValue, new GraphQLError(`Expected non-nullable type "${inspect(type77)}" not to be null.`));
        return;
    }
    if (inputValue == null) {
        return null;
    }
    if (isListType(type77)) {
        const itemType = type77.ofType;
        if (isCollection(inputValue)) {
            return arrayFrom(inputValue, (itemValue, index2)=>{
                const itemPath = addPath(path32, index2);
                return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
            });
        }
        return [
            coerceInputValueImpl(inputValue, itemType, onError, path32)
        ];
    }
    if (isInputObjectType(type77)) {
        if (!isObjectLike(inputValue)) {
            onError(pathToArray(path32), inputValue, new GraphQLError(`Expected type "${type77.name}" to be an object.`));
            return;
        }
        const coercedValue = {};
        const fieldDefs = type77.getFields();
        for (const field of objectValues(fieldDefs)){
            const fieldValue = inputValue[field.name];
            if (fieldValue === undefined) {
                if (field.defaultValue !== undefined) {
                    coercedValue[field.name] = field.defaultValue;
                } else if (isNonNullType(field.type)) {
                    const typeStr = inspect(field.type);
                    onError(pathToArray(path32), inputValue, new GraphQLError(`Field "${field.name}" of required type "${typeStr}" was not provided.`));
                }
                continue;
            }
            coercedValue[field.name] = coerceInputValueImpl(fieldValue, field.type, onError, addPath(path32, field.name));
        }
        for (const fieldName of Object.keys(inputValue)){
            if (!fieldDefs[fieldName]) {
                const suggestions = suggestionList(fieldName, Object.keys(type77.getFields()));
                onError(pathToArray(path32), inputValue, new GraphQLError(`Field "${fieldName}" is not defined by type "${type77.name}".` + didYouMean(suggestions)));
            }
        }
        return coercedValue;
    }
    if (isLeafType(type77)) {
        let parseResult;
        try {
            parseResult = type77.parseValue(inputValue);
        } catch (error) {
            if (error instanceof GraphQLError) {
                onError(pathToArray(path32), inputValue, error);
            } else {
                onError(pathToArray(path32), inputValue, new GraphQLError(`Expected type "${type77.name}". ` + error.message, undefined, undefined, undefined, undefined, error));
            }
            return;
        }
        if (parseResult === undefined) {
            onError(pathToArray(path32), inputValue, new GraphQLError(`Expected type "${type77.name}".`));
        }
        return parseResult;
    }
    invariant(false, 'Unexpected input type: ' + inspect(type77));
}
function getVariableValues(schema, varDefNodes, inputs, options) {
    const errors = [];
    const maxErrors = options?.maxErrors;
    try {
        const coerced = coerceVariableValues(schema, varDefNodes, inputs, (error)=>{
            if (maxErrors != null && errors.length >= maxErrors) {
                throw new GraphQLError('Too many errors processing variables, error limit reached. Execution aborted.');
            }
            errors.push(error);
        });
        if (errors.length === 0) {
            return {
                coerced
            };
        }
    } catch (error) {
        errors.push(error);
    }
    return {
        errors
    };
}
function coerceVariableValues(schema, varDefNodes, inputs, onError) {
    const coercedValues = {};
    for (const varDefNode of varDefNodes){
        const varName = varDefNode.variable.name.value;
        const varType = typeFromAST(schema, varDefNode.type);
        if (!isInputType(varType)) {
            const varTypeStr = print(varDefNode.type);
            onError(new GraphQLError(`Variable "$${varName}" expected value of type "${varTypeStr}" which cannot be used as an input type.`, varDefNode.type));
            continue;
        }
        if (!hasOwnProperty(inputs, varName)) {
            if (varDefNode.defaultValue) {
                coercedValues[varName] = valueFromAST(varDefNode.defaultValue, varType);
            } else if (isNonNullType(varType)) {
                const varTypeStr = inspect(varType);
                onError(new GraphQLError(`Variable "$${varName}" of required type "${varTypeStr}" was not provided.`, varDefNode));
            }
            continue;
        }
        const value = inputs[varName];
        if (value === null && isNonNullType(varType)) {
            const varTypeStr = inspect(varType);
            onError(new GraphQLError(`Variable "$${varName}" of non-null type "${varTypeStr}" must not be null.`, varDefNode));
            continue;
        }
        coercedValues[varName] = coerceInputValue(value, varType, (path33, invalidValue, error)=>{
            let prefix = `Variable "$${varName}" got invalid value ` + inspect(invalidValue);
            if (path33.length > 0) {
                prefix += ` at "${varName}${printPathArray(path33)}"`;
            }
            onError(new GraphQLError(prefix + '; ' + error.message, varDefNode, undefined, undefined, undefined, error.originalError));
        });
    }
    return coercedValues;
}
function getArgumentValues(def, node, variableValues) {
    const coercedValues = {};
    const argumentNodes = node.arguments ?? [];
    const argNodeMap = keyMap(argumentNodes, (arg)=>arg.name.value
    );
    for (const argDef of def.args){
        const name = argDef.name;
        const argType = argDef.type;
        const argumentNode = argNodeMap[name];
        if (!argumentNode) {
            if (argDef.defaultValue !== undefined) {
                coercedValues[name] = argDef.defaultValue;
            } else if (isNonNullType(argType)) {
                throw new GraphQLError(`Argument "${name}" of required type "${inspect(argType)}" ` + 'was not provided.', node);
            }
            continue;
        }
        const valueNode = argumentNode.value;
        let isNull = valueNode.kind === Kind.NULL;
        if (valueNode.kind === Kind.VARIABLE) {
            const variableName = valueNode.name.value;
            if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
                if (argDef.defaultValue !== undefined) {
                    coercedValues[name] = argDef.defaultValue;
                } else if (isNonNullType(argType)) {
                    throw new GraphQLError(`Argument "${name}" of required type "${inspect(argType)}" ` + `was provided the variable "$${variableName}" which was not provided a runtime value.`, valueNode);
                }
                continue;
            }
            isNull = variableValues[variableName] == null;
        }
        if (isNull && isNonNullType(argType)) {
            throw new GraphQLError(`Argument "${name}" of non-null type "${inspect(argType)}" ` + 'must not be null.', valueNode);
        }
        const coercedValue = valueFromAST(valueNode, argType, variableValues);
        if (coercedValue === undefined) {
            throw new GraphQLError(`Argument "${name}" has invalid value ${print(valueNode)}.`, valueNode);
        }
        coercedValues[name] = coercedValue;
    }
    return coercedValues;
}
function getDirectiveValues(directiveDef, node, variableValues) {
    const directiveNode = node.directives && find(node.directives, (directive)=>directive.name.value === directiveDef.name
    );
    if (directiveNode) {
        return getArgumentValues(directiveDef, directiveNode, variableValues);
    }
}
function hasOwnProperty(obj, prop1) {
    return Object.prototype.hasOwnProperty.call(obj, prop1);
}
function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
    return arguments.length === 1 ? executeImpl(argsOrSchema) : executeImpl({
        schema: argsOrSchema,
        document,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        typeResolver
    });
}
function executeImpl(args) {
    const { schema , document , rootValue , contextValue , variableValues , operationName , fieldResolver , typeResolver  } = args;
    assertValidExecutionArguments(schema, document, variableValues);
    const exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver);
    if (Array.isArray(exeContext)) {
        return {
            errors: exeContext
        };
    }
    const data = executeOperation(exeContext, exeContext.operation, rootValue);
    return buildResponse(exeContext, data);
}
function buildResponse(exeContext, data) {
    if (isPromise(data)) {
        return data.then((resolved)=>buildResponse(exeContext, resolved)
        );
    }
    return exeContext.errors.length === 0 ? {
        data
    } : {
        errors: exeContext.errors,
        data
    };
}
function assertValidExecutionArguments(schema, document, rawVariableValues) {
    devAssert(document, 'Must provide document.');
    assertValidSchema(schema);
    devAssert(rawVariableValues == null || isObjectLike(rawVariableValues), 'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.');
}
function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver, typeResolver) {
    let operation;
    const fragments = Object.create(null);
    for (const definition of document.definitions){
        switch(definition.kind){
            case Kind.OPERATION_DEFINITION:
                if (operationName == null) {
                    if (operation !== undefined) {
                        return [
                            new GraphQLError('Must provide operation name if query contains multiple operations.')
                        ];
                    }
                    operation = definition;
                } else if (definition.name?.value === operationName) {
                    operation = definition;
                }
                break;
            case Kind.FRAGMENT_DEFINITION:
                fragments[definition.name.value] = definition;
                break;
        }
    }
    if (!operation) {
        if (operationName != null) {
            return [
                new GraphQLError(`Unknown operation named "${operationName}".`)
            ];
        }
        return [
            new GraphQLError('Must provide an operation.')
        ];
    }
    const variableDefinitions = operation.variableDefinitions ?? [];
    const coercedVariableValues = getVariableValues(schema, variableDefinitions, rawVariableValues ?? {}, {
        maxErrors: 50
    });
    if (coercedVariableValues.errors) {
        return coercedVariableValues.errors;
    }
    return {
        schema,
        fragments,
        rootValue,
        contextValue,
        operation,
        variableValues: coercedVariableValues.coerced,
        fieldResolver: fieldResolver ?? defaultFieldResolver,
        typeResolver: typeResolver ?? defaultTypeResolver,
        errors: []
    };
}
function executeOperation(exeContext, operation, rootValue) {
    const type78 = getOperationRootType(exeContext.schema, operation);
    const fields = collectFields(exeContext, type78, operation.selectionSet, Object.create(null), Object.create(null));
    const path34 = undefined;
    try {
        const result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type78, rootValue, path34, fields) : executeFields(exeContext, type78, rootValue, path34, fields);
        if (isPromise(result)) {
            return result.then(undefined, (error)=>{
                exeContext.errors.push(error);
                return Promise.resolve(null);
            });
        }
        return result;
    } catch (error) {
        exeContext.errors.push(error);
        return null;
    }
}
function executeFieldsSerially(exeContext, parentType, sourceValue, path35, fields) {
    return promiseReduce(Object.keys(fields), (results, responseName)=>{
        const fieldNodes = fields[responseName];
        const fieldPath = addPath(path35, responseName);
        const result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
        if (result === undefined) {
            return results;
        }
        if (isPromise(result)) {
            return result.then((resolvedResult)=>{
                results[responseName] = resolvedResult;
                return results;
            });
        }
        results[responseName] = result;
        return results;
    }, Object.create(null));
}
function executeFields(exeContext, parentType, sourceValue, path36, fields) {
    const results = Object.create(null);
    let containsPromise = false;
    for (const responseName of Object.keys(fields)){
        const fieldNodes = fields[responseName];
        const fieldPath = addPath(path36, responseName);
        const result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
        if (result !== undefined) {
            results[responseName] = result;
            if (!containsPromise && isPromise(result)) {
                containsPromise = true;
            }
        }
    }
    if (!containsPromise) {
        return results;
    }
    return promiseForObject(results);
}
function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
    for (const selection of selectionSet.selections){
        switch(selection.kind){
            case Kind.FIELD:
                {
                    if (!shouldIncludeNode(exeContext, selection)) {
                        continue;
                    }
                    const name = getFieldEntryKey(selection);
                    if (!fields[name]) {
                        fields[name] = [];
                    }
                    fields[name].push(selection);
                    break;
                }
            case Kind.INLINE_FRAGMENT:
                {
                    if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
                        continue;
                    }
                    collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
                    break;
                }
            case Kind.FRAGMENT_SPREAD:
                {
                    const fragName = selection.name.value;
                    if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
                        continue;
                    }
                    visitedFragmentNames[fragName] = true;
                    const fragment = exeContext.fragments[fragName];
                    if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
                        continue;
                    }
                    collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
                    break;
                }
        }
    }
    return fields;
}
function shouldIncludeNode(exeContext, node) {
    const skip = getDirectiveValues(GraphQLSkipDirective, node, exeContext.variableValues);
    if (skip?.if === true) {
        return false;
    }
    const include = getDirectiveValues(GraphQLIncludeDirective, node, exeContext.variableValues);
    if (include?.if === false) {
        return false;
    }
    return true;
}
function doesFragmentConditionMatch(exeContext, fragment, type79) {
    const typeConditionNode = fragment.typeCondition;
    if (!typeConditionNode) {
        return true;
    }
    const conditionalType = typeFromAST(exeContext.schema, typeConditionNode);
    if (conditionalType === type79) {
        return true;
    }
    if (isAbstractType(conditionalType)) {
        return exeContext.schema.isSubType(conditionalType, type79);
    }
    return false;
}
function getFieldEntryKey(node) {
    return node.alias ? node.alias.value : node.name.value;
}
function resolveField(exeContext, parentType, source, fieldNodes, path37) {
    const fieldNode = fieldNodes[0];
    const fieldName = fieldNode.name.value;
    const fieldDef = getFieldDef1(exeContext.schema, parentType, fieldName);
    if (!fieldDef) {
        return;
    }
    const resolveFn = fieldDef.resolve ?? exeContext.fieldResolver;
    const info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path37);
    const result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);
    return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path37, result);
}
function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path38) {
    return {
        fieldName: fieldDef.name,
        fieldNodes,
        returnType: fieldDef.type,
        parentType,
        path: path38,
        schema: exeContext.schema,
        fragments: exeContext.fragments,
        rootValue: exeContext.rootValue,
        operation: exeContext.operation,
        variableValues: exeContext.variableValues
    };
}
function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
    try {
        const args = getArgumentValues(fieldDef, fieldNodes[0], exeContext.variableValues);
        const contextValue = exeContext.contextValue;
        const result = resolveFn(source, args, contextValue, info);
        return isPromise(result) ? result.then(undefined, asErrorInstance) : result;
    } catch (error) {
        return asErrorInstance(error);
    }
}
function asErrorInstance(error) {
    if (error instanceof Error) {
        return error;
    }
    return new Error('Unexpected error value: ' + inspect(error));
}
function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path39, result) {
    try {
        let completed;
        if (isPromise(result)) {
            completed = result.then((resolved)=>completeValue(exeContext, returnType, fieldNodes, info, path39, resolved)
            );
        } else {
            completed = completeValue(exeContext, returnType, fieldNodes, info, path39, result);
        }
        if (isPromise(completed)) {
            return completed.then(undefined, (error)=>handleFieldError(error, fieldNodes, path39, returnType, exeContext)
            );
        }
        return completed;
    } catch (error) {
        return handleFieldError(error, fieldNodes, path39, returnType, exeContext);
    }
}
function handleFieldError(rawError, fieldNodes, path40, returnType, exeContext) {
    const error = locatedError(asErrorInstance(rawError), fieldNodes, pathToArray(path40));
    if (isNonNullType(returnType)) {
        throw error;
    }
    exeContext.errors.push(error);
    return null;
}
function completeValue(exeContext, returnType, fieldNodes, info, path41, result) {
    if (result instanceof Error) {
        throw result;
    }
    if (isNonNullType(returnType)) {
        const completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path41, result);
        if (completed === null) {
            throw new Error(`Cannot return null for non-nullable field ${info.parentType.name}.${info.fieldName}.`);
        }
        return completed;
    }
    if (result == null) {
        return null;
    }
    if (isListType(returnType)) {
        return completeListValue(exeContext, returnType, fieldNodes, info, path41, result);
    }
    if (isLeafType(returnType)) {
        return completeLeafValue(returnType, result);
    }
    if (isAbstractType(returnType)) {
        return completeAbstractValue(exeContext, returnType, fieldNodes, info, path41, result);
    }
    if (isObjectType(returnType)) {
        return completeObjectValue(exeContext, returnType, fieldNodes, info, path41, result);
    }
    invariant(false, 'Cannot complete value of unexpected output type: ' + inspect(returnType));
}
function completeListValue(exeContext, returnType, fieldNodes, info, path42, result) {
    if (!isCollection(result)) {
        throw new GraphQLError(`Expected Iterable, but did not find one for field "${info.parentType.name}.${info.fieldName}".`);
    }
    const itemType = returnType.ofType;
    let containsPromise = false;
    const completedResults = arrayFrom(result, (item, index3)=>{
        const fieldPath = addPath(path42, index3);
        const completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);
        if (!containsPromise && isPromise(completedItem)) {
            containsPromise = true;
        }
        return completedItem;
    });
    return containsPromise ? Promise.all(completedResults) : completedResults;
}
function completeLeafValue(returnType, result) {
    const serializedResult = returnType.serialize(result);
    if (serializedResult === undefined) {
        throw new Error(`Expected a value of type "${inspect(returnType)}" but ` + `received: ${inspect(result)}`);
    }
    return serializedResult;
}
function completeAbstractValue(exeContext, returnType, fieldNodes, info, path43, result) {
    const resolveTypeFn = returnType.resolveType ?? exeContext.typeResolver;
    const contextValue = exeContext.contextValue;
    const runtimeType = resolveTypeFn(result, contextValue, info, returnType);
    if (isPromise(runtimeType)) {
        return runtimeType.then((resolvedRuntimeType)=>completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path43, result)
        );
    }
    return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path43, result);
}
function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
    const runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;
    if (!isObjectType(runtimeType)) {
        throw new GraphQLError(`Abstract type "${returnType.name}" must resolve to an Object type at runtime for field "${info.parentType.name}.${info.fieldName}" with ` + `value ${inspect(result)}, received "${inspect(runtimeType)}". ` + `Either the "${returnType.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, fieldNodes);
    }
    if (!exeContext.schema.isSubType(returnType, runtimeType)) {
        throw new GraphQLError(`Runtime Object type "${runtimeType.name}" is not a possible type for "${returnType.name}".`, fieldNodes);
    }
    return runtimeType;
}
function completeObjectValue(exeContext, returnType, fieldNodes, info, path44, result) {
    if (returnType.isTypeOf) {
        const isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
        if (isPromise(isTypeOf)) {
            return isTypeOf.then((resolvedIsTypeOf)=>{
                if (!resolvedIsTypeOf) {
                    throw invalidReturnTypeError(returnType, result, fieldNodes);
                }
                return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path44, result);
            });
        }
        if (!isTypeOf) {
            throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
    }
    return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path44, result);
}
function invalidReturnTypeError(returnType, result, fieldNodes) {
    return new GraphQLError(`Expected value of type "${returnType.name}" but got: ${inspect(result)}.`, fieldNodes);
}
function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path45, result) {
    const subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
    return executeFields(exeContext, returnType, result, path45, subFieldNodes);
}
const collectSubfields = memoize3(_collectSubfields);
function _collectSubfields(exeContext, returnType, fieldNodes) {
    let subFieldNodes = Object.create(null);
    const visitedFragmentNames = Object.create(null);
    for (const node of fieldNodes){
        if (node.selectionSet) {
            subFieldNodes = collectFields(exeContext, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
        }
    }
    return subFieldNodes;
}
const defaultTypeResolver = function(value, contextValue, info, abstractType) {
    if (isObjectLike(value) && typeof value.__typename === 'string') {
        return value.__typename;
    }
    const possibleTypes = info.schema.getPossibleTypes(abstractType);
    const promisedIsTypeOfResults = [];
    for(let i110 = 0; i110 < possibleTypes.length; i110++){
        const type80 = possibleTypes[i110];
        if (type80.isTypeOf) {
            const isTypeOfResult = type80.isTypeOf(value, contextValue, info);
            if (isPromise(isTypeOfResult)) {
                promisedIsTypeOfResults[i110] = isTypeOfResult;
            } else if (isTypeOfResult) {
                return type80;
            }
        }
    }
    if (promisedIsTypeOfResults.length) {
        return Promise.all(promisedIsTypeOfResults).then((isTypeOfResults)=>{
            for(let i39 = 0; i39 < isTypeOfResults.length; i39++){
                if (isTypeOfResults[i39]) {
                    return possibleTypes[i39];
                }
            }
        });
    }
};
const defaultFieldResolver = function(source, args, contextValue, info) {
    if (isObjectLike(source) || typeof source === 'function') {
        const property = source[info.fieldName];
        if (typeof property === 'function') {
            return source[info.fieldName](args, contextValue, info);
        }
        return property;
    }
};
function getFieldDef1(schema, parentType, fieldName) {
    if (fieldName === SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
        return SchemaMetaFieldDef;
    } else if (fieldName === TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
        return TypeMetaFieldDef;
    } else if (fieldName === TypeNameMetaFieldDef.name) {
        return TypeNameMetaFieldDef;
    }
    return parentType.getFields()[fieldName];
}
function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
    return new Promise((resolve4)=>resolve4(arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
            schema: argsOrSchema,
            source,
            rootValue,
            contextValue,
            variableValues,
            operationName,
            fieldResolver,
            typeResolver
        }))
    );
}
function graphqlImpl(args) {
    const { schema , source , rootValue , contextValue , variableValues , operationName , fieldResolver , typeResolver  } = args;
    const schemaValidationErrors = validateSchema(schema);
    if (schemaValidationErrors.length > 0) {
        return {
            errors: schemaValidationErrors
        };
    }
    let document;
    try {
        document = parse4(source);
    } catch (syntaxError1) {
        return {
            errors: [
                syntaxError1
            ]
        };
    }
    const validationErrors = validate(schema, document);
    if (validationErrors.length > 0) {
        return {
            errors: validationErrors
        };
    }
    return execute({
        schema,
        document,
        rootValue,
        contextValue,
        variableValues,
        operationName,
        fieldResolver,
        typeResolver
    });
}
function extendSchema(schema, documentAST, options) {
    assertSchema(schema);
    devAssert(documentAST != null && documentAST.kind === Kind.DOCUMENT, 'Must provide valid Document AST.');
    if (options?.assumeValid !== true && options?.assumeValidSDL !== true) {
        assertValidSDLExtension(documentAST, schema);
    }
    const schemaConfig = schema.toConfig();
    const extendedConfig = extendSchemaImpl(schemaConfig, documentAST, options);
    return schemaConfig === extendedConfig ? schema : new GraphQLSchema(extendedConfig);
}
function extendSchemaImpl(schemaConfig, documentAST, options) {
    const typeDefs1 = [];
    const typeExtensionsMap = Object.create(null);
    const directiveDefs = [];
    let schemaDef;
    const schemaExtensions = [];
    for (const def of documentAST.definitions){
        if (def.kind === Kind.SCHEMA_DEFINITION) {
            schemaDef = def;
        } else if (def.kind === Kind.SCHEMA_EXTENSION) {
            schemaExtensions.push(def);
        } else if (isTypeDefinitionNode(def)) {
            typeDefs1.push(def);
        } else if (isTypeExtensionNode(def)) {
            const extendedTypeName = def.name.value;
            const existingTypeExtensions = typeExtensionsMap[extendedTypeName];
            typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([
                def
            ]) : [
                def
            ];
        } else if (def.kind === Kind.DIRECTIVE_DEFINITION) {
            directiveDefs.push(def);
        }
    }
    if (Object.keys(typeExtensionsMap).length === 0 && typeDefs1.length === 0 && directiveDefs.length === 0 && schemaExtensions.length === 0 && schemaDef == null) {
        return schemaConfig;
    }
    const typeMap = Object.create(null);
    for (const existingType of schemaConfig.types){
        typeMap[existingType.name] = extendNamedType(existingType);
    }
    for (const typeNode of typeDefs1){
        const name = typeNode.name.value;
        typeMap[name] = stdTypeMap[name] ?? buildType(typeNode);
    }
    const operationTypes = {
        query: schemaConfig.query && replaceNamedType(schemaConfig.query),
        mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
        subscription: schemaConfig.subscription && replaceNamedType(schemaConfig.subscription),
        ...schemaDef && getOperationTypes([
            schemaDef
        ]),
        ...getOperationTypes(schemaExtensions)
    };
    return {
        description: schemaDef?.description?.value,
        ...operationTypes,
        types: objectValues(typeMap),
        directives: [
            ...schemaConfig.directives.map(replaceDirective),
            ...directiveDefs.map(buildDirective)
        ],
        extensions: undefined,
        astNode: schemaDef ?? schemaConfig.astNode,
        extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
        assumeValid: options?.assumeValid ?? false
    };
    function replaceType(type81) {
        if (isListType(type81)) {
            return new GraphQLList(replaceType(type81.ofType));
        } else if (isNonNullType(type81)) {
            return new GraphQLNonNull(replaceType(type81.ofType));
        }
        return replaceNamedType(type81);
    }
    function replaceNamedType(type82) {
        return typeMap[type82.name];
    }
    function replaceDirective(directive) {
        const config = directive.toConfig();
        return new GraphQLDirective({
            ...config,
            args: mapValue(config.args, extendArg)
        });
    }
    function extendNamedType(type83) {
        if (isIntrospectionType(type83) || isSpecifiedScalarType(type83)) {
            return type83;
        }
        if (isScalarType(type83)) {
            return extendScalarType(type83);
        }
        if (isObjectType(type83)) {
            return extendObjectType(type83);
        }
        if (isInterfaceType(type83)) {
            return extendInterfaceType(type83);
        }
        if (isUnionType(type83)) {
            return extendUnionType(type83);
        }
        if (isEnumType(type83)) {
            return extendEnumType(type83);
        }
        if (isInputObjectType(type83)) {
            return extendInputObjectType(type83);
        }
        invariant(false, 'Unexpected type: ' + inspect(type83));
    }
    function extendInputObjectType(type84) {
        const config = type84.toConfig();
        const extensions2 = typeExtensionsMap[config.name] ?? [];
        return new GraphQLInputObjectType({
            ...config,
            fields: ()=>({
                    ...mapValue(config.fields, (field)=>({
                            ...field,
                            type: replaceType(field.type)
                        })
                    ),
                    ...buildInputFieldMap(extensions2)
                })
            ,
            extensionASTNodes: config.extensionASTNodes.concat(extensions2)
        });
    }
    function extendEnumType(type85) {
        const config = type85.toConfig();
        const extensions3 = typeExtensionsMap[type85.name] ?? [];
        return new GraphQLEnumType({
            ...config,
            values: {
                ...config.values,
                ...buildEnumValueMap(extensions3)
            },
            extensionASTNodes: config.extensionASTNodes.concat(extensions3)
        });
    }
    function extendScalarType(type86) {
        const config = type86.toConfig();
        const extensions4 = typeExtensionsMap[config.name] ?? [];
        return new GraphQLScalarType({
            ...config,
            extensionASTNodes: config.extensionASTNodes.concat(extensions4)
        });
    }
    function extendObjectType(type87) {
        const config = type87.toConfig();
        const extensions5 = typeExtensionsMap[config.name] ?? [];
        return new GraphQLObjectType({
            ...config,
            interfaces: ()=>[
                    ...type87.getInterfaces().map(replaceNamedType),
                    ...buildInterfaces(extensions5)
                ]
            ,
            fields: ()=>({
                    ...mapValue(config.fields, extendField),
                    ...buildFieldMap(extensions5)
                })
            ,
            extensionASTNodes: config.extensionASTNodes.concat(extensions5)
        });
    }
    function extendInterfaceType(type88) {
        const config = type88.toConfig();
        const extensions6 = typeExtensionsMap[config.name] ?? [];
        return new GraphQLInterfaceType({
            ...config,
            interfaces: ()=>[
                    ...type88.getInterfaces().map(replaceNamedType),
                    ...buildInterfaces(extensions6)
                ]
            ,
            fields: ()=>({
                    ...mapValue(config.fields, extendField),
                    ...buildFieldMap(extensions6)
                })
            ,
            extensionASTNodes: config.extensionASTNodes.concat(extensions6)
        });
    }
    function extendUnionType(type89) {
        const config = type89.toConfig();
        const extensions7 = typeExtensionsMap[config.name] ?? [];
        return new GraphQLUnionType({
            ...config,
            types: ()=>[
                    ...type89.getTypes().map(replaceNamedType),
                    ...buildUnionTypes(extensions7)
                ]
            ,
            extensionASTNodes: config.extensionASTNodes.concat(extensions7)
        });
    }
    function extendField(field) {
        return {
            ...field,
            type: replaceType(field.type),
            args: mapValue(field.args, extendArg)
        };
    }
    function extendArg(arg) {
        return {
            ...arg,
            type: replaceType(arg.type)
        };
    }
    function getOperationTypes(nodes) {
        const opTypes = {};
        for (const node of nodes){
            const operationTypesNodes = node.operationTypes ?? [];
            for (const operationType of operationTypesNodes){
                opTypes[operationType.operation] = getNamedType1(operationType.type);
            }
        }
        return opTypes;
    }
    function getNamedType1(node) {
        const name = node.name.value;
        const type90 = stdTypeMap[name] ?? typeMap[name];
        if (type90 === undefined) {
            throw new Error(`Unknown type: "${name}".`);
        }
        return type90;
    }
    function getWrappedType(node) {
        if (node.kind === Kind.LIST_TYPE) {
            return new GraphQLList(getWrappedType(node.type));
        }
        if (node.kind === Kind.NON_NULL_TYPE) {
            return new GraphQLNonNull(getWrappedType(node.type));
        }
        return getNamedType1(node);
    }
    function buildDirective(node) {
        const locations = node.locations.map(({ value  })=>value
        );
        return new GraphQLDirective({
            name: node.name.value,
            description: getDescription(node, options),
            locations,
            isRepeatable: node.repeatable,
            args: buildArgumentMap(node.arguments),
            astNode: node
        });
    }
    function buildFieldMap(nodes) {
        const fieldConfigMap = Object.create(null);
        for (const node of nodes){
            const nodeFields = node.fields ?? [];
            for (const field of nodeFields){
                fieldConfigMap[field.name.value] = {
                    type: getWrappedType(field.type),
                    description: getDescription(field, options),
                    args: buildArgumentMap(field.arguments),
                    deprecationReason: getDeprecationReason(field),
                    astNode: field
                };
            }
        }
        return fieldConfigMap;
    }
    function buildArgumentMap(args) {
        const argsNodes = args ?? [];
        const argConfigMap = Object.create(null);
        for (const arg of argsNodes){
            const type91 = getWrappedType(arg.type);
            argConfigMap[arg.name.value] = {
                type: type91,
                description: getDescription(arg, options),
                defaultValue: valueFromAST(arg.defaultValue, type91),
                astNode: arg
            };
        }
        return argConfigMap;
    }
    function buildInputFieldMap(nodes) {
        const inputFieldMap = Object.create(null);
        for (const node of nodes){
            const fieldsNodes = node.fields ?? [];
            for (const field of fieldsNodes){
                const type92 = getWrappedType(field.type);
                inputFieldMap[field.name.value] = {
                    type: type92,
                    description: getDescription(field, options),
                    defaultValue: valueFromAST(field.defaultValue, type92),
                    astNode: field
                };
            }
        }
        return inputFieldMap;
    }
    function buildEnumValueMap(nodes) {
        const enumValueMap = Object.create(null);
        for (const node of nodes){
            const valuesNodes = node.values ?? [];
            for (const value of valuesNodes){
                enumValueMap[value.name.value] = {
                    description: getDescription(value, options),
                    deprecationReason: getDeprecationReason(value),
                    astNode: value
                };
            }
        }
        return enumValueMap;
    }
    function buildInterfaces(nodes) {
        const interfaces = [];
        for (const node of nodes){
            const interfacesNodes = node.interfaces ?? [];
            for (const type93 of interfacesNodes){
                interfaces.push(getNamedType1(type93));
            }
        }
        return interfaces;
    }
    function buildUnionTypes(nodes) {
        const types8 = [];
        for (const node of nodes){
            const typeNodes = node.types ?? [];
            for (const type94 of typeNodes){
                types8.push(getNamedType1(type94));
            }
        }
        return types8;
    }
    function buildType(astNode) {
        const name = astNode.name.value;
        const description = getDescription(astNode, options);
        const extensionNodes = typeExtensionsMap[name] ?? [];
        switch(astNode.kind){
            case Kind.OBJECT_TYPE_DEFINITION:
                {
                    const extensionASTNodes = extensionNodes;
                    const allNodes = [
                        astNode,
                        ...extensionASTNodes
                    ];
                    return new GraphQLObjectType({
                        name,
                        description,
                        interfaces: ()=>buildInterfaces(allNodes)
                        ,
                        fields: ()=>buildFieldMap(allNodes)
                        ,
                        astNode,
                        extensionASTNodes
                    });
                }
            case Kind.INTERFACE_TYPE_DEFINITION:
                {
                    const extensionASTNodes = extensionNodes;
                    const allNodes = [
                        astNode,
                        ...extensionASTNodes
                    ];
                    return new GraphQLInterfaceType({
                        name,
                        description,
                        interfaces: ()=>buildInterfaces(allNodes)
                        ,
                        fields: ()=>buildFieldMap(allNodes)
                        ,
                        astNode,
                        extensionASTNodes
                    });
                }
            case Kind.ENUM_TYPE_DEFINITION:
                {
                    const extensionASTNodes = extensionNodes;
                    const allNodes = [
                        astNode,
                        ...extensionASTNodes
                    ];
                    return new GraphQLEnumType({
                        name,
                        description,
                        values: buildEnumValueMap(allNodes),
                        astNode,
                        extensionASTNodes
                    });
                }
            case Kind.UNION_TYPE_DEFINITION:
                {
                    const extensionASTNodes = extensionNodes;
                    const allNodes = [
                        astNode,
                        ...extensionASTNodes
                    ];
                    return new GraphQLUnionType({
                        name,
                        description,
                        types: ()=>buildUnionTypes(allNodes)
                        ,
                        astNode,
                        extensionASTNodes
                    });
                }
            case Kind.SCALAR_TYPE_DEFINITION:
                {
                    const extensionASTNodes = extensionNodes;
                    return new GraphQLScalarType({
                        name,
                        description,
                        astNode,
                        extensionASTNodes
                    });
                }
            case Kind.INPUT_OBJECT_TYPE_DEFINITION:
                {
                    const extensionASTNodes = extensionNodes;
                    const allNodes = [
                        astNode,
                        ...extensionASTNodes
                    ];
                    return new GraphQLInputObjectType({
                        name,
                        description,
                        fields: ()=>buildInputFieldMap(allNodes)
                        ,
                        astNode,
                        extensionASTNodes
                    });
                }
        }
        invariant(false, 'Unexpected type definition node: ' + inspect(astNode));
    }
}
const stdTypeMap = keyMap(specifiedScalarTypes.concat(introspectionTypes), (type95)=>type95.name
);
function getDeprecationReason(node) {
    const deprecated = getDirectiveValues(GraphQLDeprecatedDirective, node);
    return deprecated?.reason;
}
function getDescription(node, options) {
    if (node.description) {
        return node.description.value;
    }
    if (options?.commentDescriptions === true) {
        const rawValue = getLeadingCommentBlock(node);
        if (rawValue !== undefined) {
            return dedentBlockStringValue('\n' + rawValue);
        }
    }
}
function getLeadingCommentBlock(node) {
    const loc = node.loc;
    if (!loc) {
        return;
    }
    const comments = [];
    let token = loc.startToken.prev;
    while(token != null && token.kind === TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line){
        const value = String(token.value);
        comments.push(value);
        token = token.prev;
    }
    return comments.length > 0 ? comments.reverse().join('\n') : undefined;
}
function buildASTSchema(documentAST, options) {
    devAssert(documentAST != null && documentAST.kind === Kind.DOCUMENT, 'Must provide valid Document AST.');
    if (options?.assumeValid !== true && options?.assumeValidSDL !== true) {
        assertValidSDL(documentAST);
    }
    const config = extendSchemaImpl(emptySchemaConfig, documentAST, options);
    if (config.astNode == null) {
        for (const type96 of config.types){
            switch(type96.name){
                case 'Query':
                    config.query = type96;
                    break;
                case 'Mutation':
                    config.mutation = type96;
                    break;
                case 'Subscription':
                    config.subscription = type96;
                    break;
            }
        }
    }
    const { directives  } = config;
    if (!directives.some((directive)=>directive.name === 'skip'
    )) {
        directives.push(GraphQLSkipDirective);
    }
    if (!directives.some((directive)=>directive.name === 'include'
    )) {
        directives.push(GraphQLIncludeDirective);
    }
    if (!directives.some((directive)=>directive.name === 'deprecated'
    )) {
        directives.push(GraphQLDeprecatedDirective);
    }
    return new GraphQLSchema(config);
}
const emptySchemaConfig = new GraphQLSchema({
    directives: []
}).toConfig();
Object.freeze({
    TYPE_REMOVED: 'TYPE_REMOVED',
    TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
    TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
    VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
    REQUIRED_INPUT_FIELD_ADDED: 'REQUIRED_INPUT_FIELD_ADDED',
    IMPLEMENTED_INTERFACE_REMOVED: 'IMPLEMENTED_INTERFACE_REMOVED',
    FIELD_REMOVED: 'FIELD_REMOVED',
    FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
    REQUIRED_ARG_ADDED: 'REQUIRED_ARG_ADDED',
    ARG_REMOVED: 'ARG_REMOVED',
    ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
    DIRECTIVE_REMOVED: 'DIRECTIVE_REMOVED',
    DIRECTIVE_ARG_REMOVED: 'DIRECTIVE_ARG_REMOVED',
    REQUIRED_DIRECTIVE_ARG_ADDED: 'REQUIRED_DIRECTIVE_ARG_ADDED',
    DIRECTIVE_REPEATABLE_REMOVED: 'DIRECTIVE_REPEATABLE_REMOVED',
    DIRECTIVE_LOCATION_REMOVED: 'DIRECTIVE_LOCATION_REMOVED'
});
Object.freeze({
    VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
    TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION',
    OPTIONAL_INPUT_FIELD_ADDED: 'OPTIONAL_INPUT_FIELD_ADDED',
    OPTIONAL_ARG_ADDED: 'OPTIONAL_ARG_ADDED',
    IMPLEMENTED_INTERFACE_ADDED: 'IMPLEMENTED_INTERFACE_ADDED',
    ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE'
});
async function runHttpQuery(params, options, context) {
    const contextValue = options.context && context?.request ? await options.context?.(context?.request) : context;
    const source = params.query || params.mutation;
    return await graphql({
        source,
        ...options,
        contextValue,
        variableValues: params.variables,
        operationName: params.operationName
    });
}
new TextDecoder();
function GraphQLHTTP({ playgroundOptions ={} , headers ={} , ...options }) {
    return async (request)=>{
        if (options.graphiql && request.method === 'GET') {
            if (request.headers.get('Accept')?.includes('text/html')) {
                const { renderPlaygroundPage  } = await import('./graphiql/render.ts');
                const playground = renderPlaygroundPage({
                    ...playgroundOptions,
                    endpoint: '/graphql'
                });
                return new Response(playground, {
                    headers: new Headers({
                        'Content-Type': 'text/html',
                        ...headers
                    })
                });
            } else {
                return new Response('"Accept" header value must include text/html', {
                    status: 400,
                    headers: new Headers(headers)
                });
            }
        } else {
            if (![
                'PUT',
                'POST',
                'PATCH'
            ].includes(request.method)) {
                return new Response('Method Not Allowed', {
                    status: 405,
                    headers: new Headers(headers)
                });
            } else {
                try {
                    const result = await runHttpQuery(await request.json(), options, {
                        request
                    });
                    return new Response(JSON.stringify(result, null, 2), {
                        status: 200,
                        headers: new Headers({
                            'Content-Type': 'application/json',
                            ...headers
                        })
                    });
                } catch (e11) {
                    console.error(e11);
                    return new Response('Malformed request body', {
                        status: 400,
                        headers: new Headers(headers)
                    });
                }
            }
        }
    };
}
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
function mergeDeep(target, ...sources) {
    const output = {
        ...target
    };
    sources.forEach((source)=>{
        if (isObject(target) && isObject(source)) {
            Object.keys(source).forEach((key)=>{
                if (isObject(source[key])) {
                    if (!(key in target)) {
                        Object.assign(output, {
                            [key]: source[key]
                        });
                    } else {
                        output[key] = mergeDeep(target[key], source[key]);
                    }
                } else {
                    Object.assign(output, {
                        [key]: source[key]
                    });
                }
            });
        }
    });
    return output;
}
var VisitSchemaKind;
(function(VisitSchemaKind1) {
    VisitSchemaKind1["TYPE"] = 'VisitSchemaKind.TYPE';
    VisitSchemaKind1["SCALAR_TYPE"] = 'VisitSchemaKind.SCALAR_TYPE';
    VisitSchemaKind1["ENUM_TYPE"] = 'VisitSchemaKind.ENUM_TYPE';
    VisitSchemaKind1["COMPOSITE_TYPE"] = 'VisitSchemaKind.COMPOSITE_TYPE';
    VisitSchemaKind1["OBJECT_TYPE"] = 'VisitSchemaKind.OBJECT_TYPE';
    VisitSchemaKind1["INPUT_OBJECT_TYPE"] = 'VisitSchemaKind.INPUT_OBJECT_TYPE';
    VisitSchemaKind1["ABSTRACT_TYPE"] = 'VisitSchemaKind.ABSTRACT_TYPE';
    VisitSchemaKind1["UNION_TYPE"] = 'VisitSchemaKind.UNION_TYPE';
    VisitSchemaKind1["INTERFACE_TYPE"] = 'VisitSchemaKind.INTERFACE_TYPE';
    VisitSchemaKind1["ROOT_OBJECT"] = 'VisitSchemaKind.ROOT_OBJECT';
    VisitSchemaKind1["QUERY"] = 'VisitSchemaKind.QUERY';
    VisitSchemaKind1["MUTATION"] = 'VisitSchemaKind.MUTATION';
    VisitSchemaKind1["SUBSCRIPTION"] = 'VisitSchemaKind.SUBSCRIPTION';
})(VisitSchemaKind || (VisitSchemaKind = {}));
var MapperKind;
(function(MapperKind1) {
    MapperKind1["TYPE"] = 'MapperKind.TYPE';
    MapperKind1["SCALAR_TYPE"] = 'MapperKind.SCALAR_TYPE';
    MapperKind1["ENUM_TYPE"] = 'MapperKind.ENUM_TYPE';
    MapperKind1["COMPOSITE_TYPE"] = 'MapperKind.COMPOSITE_TYPE';
    MapperKind1["OBJECT_TYPE"] = 'MapperKind.OBJECT_TYPE';
    MapperKind1["INPUT_OBJECT_TYPE"] = 'MapperKind.INPUT_OBJECT_TYPE';
    MapperKind1["ABSTRACT_TYPE"] = 'MapperKind.ABSTRACT_TYPE';
    MapperKind1["UNION_TYPE"] = 'MapperKind.UNION_TYPE';
    MapperKind1["INTERFACE_TYPE"] = 'MapperKind.INTERFACE_TYPE';
    MapperKind1["ROOT_OBJECT"] = 'MapperKind.ROOT_OBJECT';
    MapperKind1["QUERY"] = 'MapperKind.QUERY';
    MapperKind1["MUTATION"] = 'MapperKind.MUTATION';
    MapperKind1["SUBSCRIPTION"] = 'MapperKind.SUBSCRIPTION';
    MapperKind1["DIRECTIVE"] = 'MapperKind.DIRECTIVE';
    MapperKind1["FIELD"] = 'MapperKind.FIELD';
    MapperKind1["COMPOSITE_FIELD"] = 'MapperKind.COMPOSITE_FIELD';
    MapperKind1["OBJECT_FIELD"] = 'MapperKind.OBJECT_FIELD';
    MapperKind1["ROOT_FIELD"] = 'MapperKind.ROOT_FIELD';
    MapperKind1["QUERY_ROOT_FIELD"] = 'MapperKind.QUERY_ROOT_FIELD';
    MapperKind1["MUTATION_ROOT_FIELD"] = 'MapperKind.MUTATION_ROOT_FIELD';
    MapperKind1["SUBSCRIPTION_ROOT_FIELD"] = 'MapperKind.SUBSCRIPTION_ROOT_FIELD';
    MapperKind1["INTERFACE_FIELD"] = 'MapperKind.INTERFACE_FIELD';
    MapperKind1["INPUT_OBJECT_FIELD"] = 'MapperKind.INPUT_OBJECT_FIELD';
    MapperKind1["ARGUMENT"] = 'MapperKind.ARGUMENT';
    MapperKind1["ENUM_VALUE"] = 'MapperKind.ENUM_VALUE';
})(MapperKind || (MapperKind = {}));
class SchemaVisitor {
    schema;
    static implementsVisitorMethod(methodName) {
        if (!methodName.startsWith('visit')) {
            return false;
        }
        const method = this.prototype[methodName];
        if (typeof method !== 'function') {
            return false;
        }
        if (this.name === 'SchemaVisitor') {
            return true;
        }
        const stub = SchemaVisitor.prototype[methodName];
        if (method === stub) {
            return false;
        }
        return true;
    }
    visitSchema(_schema) {}
    visitScalar(_scalar) {}
    visitObject(_object) {}
    visitFieldDefinition(_field, _details) {}
    visitArgumentDefinition(_argument, _details) {}
    visitInterface(_iface) {}
    visitUnion(_union) {}
    visitEnum(_type) {}
    visitEnumValue(_value, _details) {}
    visitInputObject(_object) {}
    visitInputFieldDefinition(_field, _details) {}
}
function isNamedStub(type97) {
    if (isObjectType(type97) || isInterfaceType(type97) || isInputObjectType(type97)) {
        const fields = type97.getFields();
        const fieldNames = Object.keys(fields);
        return fieldNames.length === 1 && fields[fieldNames[0]].name === '__fake';
    }
    return false;
}
function getBuiltInForStub(type98) {
    switch(type98.name){
        case GraphQLInt.name:
            return GraphQLInt;
        case GraphQLFloat.name:
            return GraphQLFloat;
        case GraphQLString.name:
            return GraphQLString;
        case GraphQLBoolean.name:
            return GraphQLBoolean;
        case GraphQLID.name:
            return GraphQLID;
        default:
            return type98;
    }
}
function rewireTypes(originalTypeMap, directives, options = {
    skipPruning: false
}) {
    const newTypeMap = Object.create(null);
    Object.keys(originalTypeMap).forEach((typeName)=>{
        const namedType = originalTypeMap[typeName];
        if (namedType == null || typeName.startsWith('__')) {
            return;
        }
        const newName = namedType.name;
        if (newName.startsWith('__')) {
            return;
        }
        if (newTypeMap[newName] != null) {
            throw new Error(`Duplicate schema type name ${newName}`);
        }
        newTypeMap[newName] = namedType;
    });
    Object.keys(newTypeMap).forEach((typeName)=>{
        newTypeMap[typeName] = rewireNamedType(newTypeMap[typeName]);
    });
    const newDirectives = directives.map((directive)=>rewireDirective(directive)
    );
    return options.skipPruning ? {
        typeMap: newTypeMap,
        directives: newDirectives
    } : pruneTypes(newTypeMap, newDirectives);
    function rewireDirective(directive) {
        const directiveConfig = directive.toConfig();
        directiveConfig.args = rewireArgs(directiveConfig.args);
        return new GraphQLDirective(directiveConfig);
    }
    function rewireArgs(args) {
        const rewiredArgs = {};
        Object.keys(args).forEach((argName)=>{
            const arg = args[argName];
            const rewiredArgType = rewireType(arg.type);
            if (rewiredArgType != null) {
                arg.type = rewiredArgType;
                rewiredArgs[argName] = arg;
            }
        });
        return rewiredArgs;
    }
    function rewireNamedType(type99) {
        if (isObjectType(type99)) {
            const config = type99.toConfig();
            const newConfig = {
                ...config,
                fields: ()=>rewireFields(config.fields)
                ,
                interfaces: ()=>rewireNamedTypes(config.interfaces)
            };
            return new GraphQLObjectType(newConfig);
        } else if (isInterfaceType(type99)) {
            const config = type99.toConfig();
            const newConfig = {
                ...config,
                fields: ()=>rewireFields(config.fields)
            };
            if ('interfaces' in newConfig) {
                newConfig.interfaces = ()=>rewireNamedTypes(config.interfaces)
                ;
            }
            return new GraphQLInterfaceType(newConfig);
        } else if (isUnionType(type99)) {
            const config = type99.toConfig();
            const newConfig = {
                ...config,
                types: ()=>rewireNamedTypes(config.types)
            };
            return new GraphQLUnionType(newConfig);
        } else if (isInputObjectType(type99)) {
            const config = type99.toConfig();
            const newConfig = {
                ...config,
                fields: ()=>rewireInputFields(config.fields)
            };
            return new GraphQLInputObjectType(newConfig);
        } else if (isEnumType(type99)) {
            const enumConfig = type99.toConfig();
            return new GraphQLEnumType(enumConfig);
        } else if (isScalarType(type99)) {
            if (isSpecifiedScalarType(type99)) {
                return type99;
            }
            const scalarConfig = type99.toConfig();
            return new GraphQLScalarType(scalarConfig);
        }
        throw new Error(`Unexpected schema type: ${type99}`);
    }
    function rewireFields(fields) {
        const rewiredFields = {};
        Object.keys(fields).forEach((fieldName)=>{
            const field = fields[fieldName];
            const rewiredFieldType = rewireType(field.type);
            if (rewiredFieldType != null) {
                field.type = rewiredFieldType;
                field.args = rewireArgs(field.args);
                rewiredFields[fieldName] = field;
            }
        });
        return rewiredFields;
    }
    function rewireInputFields(fields) {
        const rewiredFields = {};
        Object.keys(fields).forEach((fieldName)=>{
            const field = fields[fieldName];
            const rewiredFieldType = rewireType(field.type);
            if (rewiredFieldType != null) {
                field.type = rewiredFieldType;
                rewiredFields[fieldName] = field;
            }
        });
        return rewiredFields;
    }
    function rewireNamedTypes(namedTypes) {
        const rewiredTypes = [];
        namedTypes.forEach((namedType)=>{
            const rewiredType = rewireType(namedType);
            if (rewiredType != null) {
                rewiredTypes.push(rewiredType);
            }
        });
        return rewiredTypes;
    }
    function rewireType(type100) {
        if (isListType(type100)) {
            const rewiredType = rewireType(type100.ofType);
            return rewiredType != null ? new GraphQLList(rewiredType) : null;
        } else if (isNonNullType(type100)) {
            const rewiredType = rewireType(type100.ofType);
            return rewiredType != null ? new GraphQLNonNull(rewiredType) : null;
        } else if (isNamedType(type100)) {
            let rewiredType = originalTypeMap[type100.name];
            if (rewiredType === undefined) {
                rewiredType = isNamedStub(type100) ? getBuiltInForStub(type100) : type100;
                newTypeMap[rewiredType.name] = rewiredType;
            }
            return rewiredType != null ? newTypeMap[rewiredType.name] : null;
        }
        return null;
    }
}
function pruneTypes(typeMap, directives) {
    const newTypeMap = {};
    const implementedInterfaces = {};
    Object.keys(typeMap).forEach((typeName)=>{
        const namedType = typeMap[typeName];
        if ('getInterfaces' in namedType) {
            namedType.getInterfaces().forEach((iface)=>{
                implementedInterfaces[iface.name] = true;
            });
        }
    });
    let prunedTypeMap = false;
    const typeNames = Object.keys(typeMap);
    for(let i40 = 0; i40 < typeNames.length; i40++){
        const typeName = typeNames[i40];
        const type101 = typeMap[typeName];
        if (isObjectType(type101) || isInputObjectType(type101)) {
            if (Object.keys(type101.getFields()).length) {
                newTypeMap[typeName] = type101;
            } else {
                prunedTypeMap = true;
            }
        } else if (isUnionType(type101)) {
            if (type101.getTypes().length) {
                newTypeMap[typeName] = type101;
            } else {
                prunedTypeMap = true;
            }
        } else if (isInterfaceType(type101)) {
            if (Object.keys(type101.getFields()).length && implementedInterfaces[type101.name]) {
                newTypeMap[typeName] = type101;
            } else {
                prunedTypeMap = true;
            }
        } else {
            newTypeMap[typeName] = type101;
        }
    }
    return prunedTypeMap ? rewireTypes(newTypeMap, directives) : {
        typeMap,
        directives
    };
}
function transformInputValue(type102, value, transformer) {
    if (value == null) {
        return value;
    }
    const nullableType = getNullableType(type102);
    if (isLeafType(nullableType)) {
        return transformer(nullableType, value);
    } else if (isListType(nullableType)) {
        return value.map((listMember)=>transformInputValue(nullableType.ofType, listMember, transformer)
        );
    } else if (isInputObjectType(nullableType)) {
        const fields = nullableType.getFields();
        const newValue = {};
        Object.keys(value).forEach((key)=>{
            newValue[key] = transformInputValue(fields[key].type, value[key], transformer);
        });
        return newValue;
    }
}
function serializeInputValue(type103, value) {
    return transformInputValue(type103, value, (t9, v4)=>t9.serialize(v4)
    );
}
function parseInputValue(type104, value) {
    return transformInputValue(type104, value, (t10, v5)=>t10.parseValue(v5)
    );
}
function healSchema(schema) {
    healTypes(schema.getTypeMap(), schema.getDirectives());
    return schema;
}
function healTypes(originalTypeMap, directives, config = {
    skipPruning: false
}) {
    const actualNamedTypeMap = Object.create(null);
    Object.entries(originalTypeMap).forEach(([typeName, namedType])=>{
        if (namedType == null || typeName.startsWith('__')) {
            return;
        }
        const actualName = namedType.name;
        if (actualName.startsWith('__')) {
            return;
        }
        if (actualName in actualNamedTypeMap) {
            throw new Error(`Duplicate schema type name ${actualName}`);
        }
        actualNamedTypeMap[actualName] = namedType;
    });
    Object.entries(actualNamedTypeMap).forEach(([typeName, namedType])=>{
        originalTypeMap[typeName] = namedType;
    });
    directives.forEach((decl)=>{
        decl.args = decl.args.filter((arg)=>{
            arg.type = healType(arg.type);
            return arg.type !== null;
        });
    });
    Object.entries(originalTypeMap).forEach(([typeName, namedType])=>{
        if (!typeName.startsWith('__') && typeName in actualNamedTypeMap) {
            if (namedType != null) {
                healNamedType(namedType);
            }
        }
    });
    for (const typeName1 of Object.keys(originalTypeMap)){
        if (!typeName1.startsWith('__') && !(typeName1 in actualNamedTypeMap)) {
            delete originalTypeMap[typeName1];
        }
    }
    if (!config.skipPruning) {
        pruneTypes1(originalTypeMap, directives);
    }
    function healNamedType(type105) {
        if (isObjectType(type105)) {
            healFields(type105);
            healInterfaces(type105);
            return;
        } else if (isInterfaceType(type105)) {
            healFields(type105);
            if ('getInterfaces' in type105) {
                healInterfaces(type105);
            }
            return;
        } else if (isUnionType(type105)) {
            healUnderlyingTypes(type105);
            return;
        } else if (isInputObjectType(type105)) {
            healInputFields(type105);
            return;
        } else if (isLeafType(type105)) {
            return;
        }
        throw new Error(`Unexpected schema type: ${type105}`);
    }
    function healFields(type106) {
        const fieldMap = type106.getFields();
        for (const [key, field] of Object.entries(fieldMap)){
            field.args.map((arg)=>{
                arg.type = healType(arg.type);
                return arg.type === null ? null : arg;
            }).filter(Boolean);
            field.type = healType(field.type);
            if (field.type === null) {
                delete fieldMap[key];
            }
        }
    }
    function healInterfaces(type107) {
        if ('getInterfaces' in type107) {
            const interfaces = type107.getInterfaces();
            interfaces.push(...interfaces.splice(0).map((iface)=>healType(iface)
            ).filter(Boolean));
        }
    }
    function healInputFields(type108) {
        const fieldMap = type108.getFields();
        for (const [key, field] of Object.entries(fieldMap)){
            field.type = healType(field.type);
            if (field.type === null) {
                delete fieldMap[key];
            }
        }
    }
    function healUnderlyingTypes(type109) {
        const types9 = type109.getTypes();
        types9.push(...types9.splice(0).map((t11)=>healType(t11)
        ).filter(Boolean));
    }
    function healType(type110) {
        if (isListType(type110)) {
            const healedType = healType(type110.ofType);
            return healedType != null ? new GraphQLList(healedType) : null;
        } else if (isNonNullType(type110)) {
            const healedType = healType(type110.ofType);
            return healedType != null ? new GraphQLNonNull(healedType) : null;
        } else if (isNamedType(type110)) {
            const officialType = originalTypeMap[type110.name];
            if (officialType && type110 !== officialType) {
                return officialType;
            }
        }
        return type110;
    }
}
function pruneTypes1(typeMap, directives) {
    const implementedInterfaces = {};
    Object.values(typeMap).forEach((namedType)=>{
        if ('getInterfaces' in namedType) {
            namedType.getInterfaces().forEach((iface)=>{
                implementedInterfaces[iface.name] = true;
            });
        }
    });
    let prunedTypeMap = false;
    const typeNames = Object.keys(typeMap);
    for(let i41 = 0; i41 < typeNames.length; i41++){
        const typeName = typeNames[i41];
        const type111 = typeMap[typeName];
        if (isObjectType(type111) || isInputObjectType(type111)) {
            if (!Object.keys(type111.getFields()).length) {
                typeMap[typeName] = null;
                prunedTypeMap = true;
            }
        } else if (isUnionType(type111)) {
            if (!type111.getTypes().length) {
                typeMap[typeName] = null;
                prunedTypeMap = true;
            }
        } else if (isInterfaceType(type111)) {
            if (!Object.keys(type111.getFields()).length || !(type111.name in implementedInterfaces)) {
                typeMap[typeName] = null;
                prunedTypeMap = true;
            }
        }
    }
    if (prunedTypeMap) {
        healTypes(typeMap, directives);
    }
}
function inspect1(value) {
    return formatValue1(value, []);
}
function formatValue1(value, seenValues) {
    switch(typeof value){
        case 'string':
            return JSON.stringify(value);
        case 'function':
            return value.name ? `[function ${value.name}]` : '[function]';
        case 'object':
            if (value === null) {
                return 'null';
            }
            return formatObjectValue1(value, seenValues);
        default:
            return String(value);
    }
}
function formatObjectValue1(value, previouslySeenValues) {
    if (previouslySeenValues.indexOf(value) !== -1) {
        return '[Circular]';
    }
    const seenValues = [
        ...previouslySeenValues,
        value
    ];
    const customInspectFn = getCustomFn1(value);
    if (customInspectFn !== undefined) {
        const customValue = customInspectFn.call(value);
        if (customValue !== value) {
            return typeof customValue === 'string' ? customValue : formatValue1(customValue, seenValues);
        }
    } else if (Array.isArray(value)) {
        return formatArray1(value, seenValues);
    }
    return formatObject1(value, seenValues);
}
function formatObject1(object, seenValues) {
    const keys4 = Object.keys(object);
    if (keys4.length === 0) {
        return '{}';
    }
    if (seenValues.length > 2) {
        return '[' + getObjectTag1(object) + ']';
    }
    const properties = keys4.map((key)=>{
        const value = formatValue1(object[key], seenValues);
        return key + ': ' + value;
    });
    return '{ ' + properties.join(', ') + ' }';
}
function formatArray1(array, seenValues) {
    if (array.length === 0) {
        return '[]';
    }
    if (seenValues.length > 2) {
        return '[Array]';
    }
    const len = Math.min(10, array.length);
    const remaining = array.length - len;
    const items = [];
    for(let i42 = 0; i42 < len; ++i42){
        items.push(formatValue1(array[i42], seenValues));
    }
    if (remaining === 1) {
        items.push('... 1 more item');
    } else if (remaining > 1) {
        items.push(`... ${remaining.toString(10)} more items`);
    }
    return '[' + items.join(', ') + ']';
}
function getCustomFn1(obj) {
    if (typeof obj.inspect === 'function') {
        return obj.inspect;
    }
}
function getObjectTag1(obj) {
    const tag = Object.prototype.toString.call(obj).replace(/^\[object /, '').replace(/]$/, '');
    if (tag === 'Object' && typeof obj.constructor === 'function') {
        const name = obj.constructor.name;
        if (typeof name === 'string' && name !== '') {
            return name;
        }
    }
    return tag;
}
function mapSchema(schema, schemaMapper = {}) {
    const originalTypeMap = schema.getTypeMap();
    let newTypeMap = mapDefaultValues(originalTypeMap, schema, serializeInputValue);
    newTypeMap = mapTypes(newTypeMap, schema, schemaMapper, (type112)=>isLeafType(type112)
    );
    newTypeMap = mapEnumValues(newTypeMap, schema, schemaMapper);
    newTypeMap = mapDefaultValues(newTypeMap, schema, parseInputValue);
    newTypeMap = mapTypes(newTypeMap, schema, schemaMapper, (type113)=>!isLeafType(type113)
    );
    newTypeMap = mapFields(newTypeMap, schema, schemaMapper);
    newTypeMap = mapArguments(newTypeMap, schema, schemaMapper);
    const originalDirectives = schema.getDirectives();
    const newDirectives = mapDirectives(originalDirectives, schema, schemaMapper);
    const queryType = schema.getQueryType();
    const mutationType = schema.getMutationType();
    const subscriptionType = schema.getSubscriptionType();
    const newQueryTypeName = queryType != null ? newTypeMap[queryType.name] != null ? newTypeMap[queryType.name].name : undefined : undefined;
    const newMutationTypeName = mutationType != null ? newTypeMap[mutationType.name] != null ? newTypeMap[mutationType.name].name : undefined : undefined;
    const newSubscriptionTypeName = subscriptionType != null ? newTypeMap[subscriptionType.name] != null ? newTypeMap[subscriptionType.name].name : undefined : undefined;
    const { typeMap , directives  } = rewireTypes(newTypeMap, newDirectives);
    return new GraphQLSchema({
        ...schema.toConfig(),
        query: newQueryTypeName ? typeMap[newQueryTypeName] : undefined,
        mutation: newMutationTypeName ? typeMap[newMutationTypeName] : undefined,
        subscription: newSubscriptionTypeName != null ? typeMap[newSubscriptionTypeName] : undefined,
        types: Object.keys(typeMap).map((typeName)=>typeMap[typeName]
        ),
        directives
    });
}
function mapTypes(originalTypeMap, schema, schemaMapper, testFn = ()=>true
) {
    const newTypeMap = {};
    Object.keys(originalTypeMap).forEach((typeName)=>{
        if (!typeName.startsWith('__')) {
            const originalType = originalTypeMap[typeName];
            if (originalType == null || !testFn(originalType)) {
                newTypeMap[typeName] = originalType;
                return;
            }
            const typeMapper = getTypeMapper(schema, schemaMapper, typeName);
            if (typeMapper == null) {
                newTypeMap[typeName] = originalType;
                return;
            }
            const maybeNewType = typeMapper(originalType, schema);
            if (maybeNewType === undefined) {
                newTypeMap[typeName] = originalType;
                return;
            }
            newTypeMap[typeName] = maybeNewType;
        }
    });
    return newTypeMap;
}
function mapEnumValues(originalTypeMap, schema, schemaMapper) {
    const enumValueMapper = getEnumValueMapper(schemaMapper);
    if (!enumValueMapper) {
        return originalTypeMap;
    }
    return mapTypes(originalTypeMap, schema, {
        [MapperKind.ENUM_TYPE]: (type114)=>{
            const config = type114.toConfig();
            const originalEnumValueConfigMap = config.values;
            const newEnumValueConfigMap = {};
            Object.keys(originalEnumValueConfigMap).forEach((enumValueName)=>{
                const originalEnumValueConfig = originalEnumValueConfigMap[enumValueName];
                const mappedEnumValue = enumValueMapper(originalEnumValueConfig, type114.name, schema);
                if (mappedEnumValue === undefined) {
                    newEnumValueConfigMap[enumValueName] = originalEnumValueConfig;
                } else if (Array.isArray(mappedEnumValue)) {
                    const [newEnumValueName, newEnumValueConfig] = mappedEnumValue;
                    newEnumValueConfigMap[newEnumValueName] = newEnumValueConfig;
                } else if (mappedEnumValue !== null) {
                    newEnumValueConfigMap[enumValueName] = mappedEnumValue;
                }
            });
            return new GraphQLEnumType({
                ...config,
                values: newEnumValueConfigMap
            });
        }
    }, (type115)=>isEnumType(type115)
    );
}
function mapDefaultValues(originalTypeMap, schema, fn) {
    const newTypeMap = mapArguments(originalTypeMap, schema, {
        [MapperKind.ARGUMENT]: (argumentConfig)=>{
            if (argumentConfig.defaultValue === undefined) {
                return argumentConfig;
            }
            const maybeNewType = getNewType(originalTypeMap, argumentConfig.type);
            if (maybeNewType != null) {
                return {
                    ...argumentConfig,
                    defaultValue: fn(maybeNewType, argumentConfig.defaultValue)
                };
            }
        }
    });
    return mapFields(newTypeMap, schema, {
        [MapperKind.INPUT_OBJECT_FIELD]: (inputFieldConfig)=>{
            if (inputFieldConfig.defaultValue === undefined) {
                return inputFieldConfig;
            }
            const maybeNewType = getNewType(newTypeMap, inputFieldConfig.type);
            if (maybeNewType != null) {
                return {
                    ...inputFieldConfig,
                    defaultValue: fn(maybeNewType, inputFieldConfig.defaultValue)
                };
            }
        }
    });
}
function getNewType(newTypeMap, type116) {
    if (isListType(type116)) {
        const newType = getNewType(newTypeMap, type116.ofType);
        return newType != null ? new GraphQLList(newType) : null;
    } else if (isNonNullType(type116)) {
        const newType = getNewType(newTypeMap, type116.ofType);
        return newType != null ? new GraphQLNonNull(newType) : null;
    } else if (isNamedType(type116)) {
        const newType = newTypeMap[type116.name];
        return newType != null ? newType : null;
    }
    return null;
}
function mapFields(originalTypeMap, schema, schemaMapper) {
    const newTypeMap = {};
    Object.keys(originalTypeMap).forEach((typeName)=>{
        if (!typeName.startsWith('__')) {
            const originalType = originalTypeMap[typeName];
            if (!isObjectType(originalType) && !isInterfaceType(originalType) && !isInputObjectType(originalType)) {
                newTypeMap[typeName] = originalType;
                return;
            }
            const fieldMapper = getFieldMapper(schema, schemaMapper, typeName);
            if (fieldMapper == null) {
                newTypeMap[typeName] = originalType;
                return;
            }
            const config = originalType.toConfig();
            const originalFieldConfigMap = config.fields;
            const newFieldConfigMap = {};
            Object.keys(originalFieldConfigMap).forEach((fieldName)=>{
                const originalFieldConfig = originalFieldConfigMap[fieldName];
                const mappedField = fieldMapper(originalFieldConfig, fieldName, typeName, schema);
                if (mappedField === undefined) {
                    newFieldConfigMap[fieldName] = originalFieldConfig;
                } else if (Array.isArray(mappedField)) {
                    const [newFieldName, newFieldConfig] = mappedField;
                    newFieldConfigMap[newFieldName] = newFieldConfig;
                } else if (mappedField !== null) {
                    newFieldConfigMap[fieldName] = mappedField;
                }
            });
            if (isObjectType(originalType)) {
                newTypeMap[typeName] = new GraphQLObjectType({
                    ...config,
                    fields: newFieldConfigMap
                });
            } else if (isInterfaceType(originalType)) {
                newTypeMap[typeName] = new GraphQLInterfaceType({
                    ...config,
                    fields: newFieldConfigMap
                });
            } else {
                newTypeMap[typeName] = new GraphQLInputObjectType({
                    ...config,
                    fields: newFieldConfigMap
                });
            }
        }
    });
    return newTypeMap;
}
function mapArguments(originalTypeMap, schema, schemaMapper) {
    const newTypeMap = {};
    Object.keys(originalTypeMap).forEach((typeName)=>{
        if (!typeName.startsWith('__')) {
            const originalType = originalTypeMap[typeName];
            if (!isObjectType(originalType) && !isInterfaceType(originalType)) {
                newTypeMap[typeName] = originalType;
                return;
            }
            const argumentMapper = getArgumentMapper(schemaMapper);
            if (argumentMapper == null) {
                newTypeMap[typeName] = originalType;
                return;
            }
            const config = originalType.toConfig();
            const originalFieldConfigMap = config.fields;
            const newFieldConfigMap = {};
            Object.keys(originalFieldConfigMap).forEach((fieldName)=>{
                const originalFieldConfig = originalFieldConfigMap[fieldName];
                const originalArgumentConfigMap = originalFieldConfig.args;
                if (originalArgumentConfigMap == null) {
                    newFieldConfigMap[fieldName] = originalFieldConfig;
                    return;
                }
                const argumentNames = Object.keys(originalArgumentConfigMap);
                if (!argumentNames.length) {
                    newFieldConfigMap[fieldName] = originalFieldConfig;
                    return;
                }
                const newArgumentConfigMap = {};
                argumentNames.forEach((argumentName)=>{
                    const originalArgumentConfig = originalArgumentConfigMap[argumentName];
                    const mappedArgument = argumentMapper(originalArgumentConfig, fieldName, typeName, schema);
                    if (mappedArgument === undefined) {
                        newArgumentConfigMap[argumentName] = originalArgumentConfig;
                    } else if (Array.isArray(mappedArgument)) {
                        const [newArgumentName, newArgumentConfig] = mappedArgument;
                        newArgumentConfigMap[newArgumentName] = newArgumentConfig;
                    } else if (mappedArgument !== null) {
                        newArgumentConfigMap[argumentName] = mappedArgument;
                    }
                });
                newFieldConfigMap[fieldName] = {
                    ...originalFieldConfig,
                    args: newArgumentConfigMap
                };
            });
            if (isObjectType(originalType)) {
                newTypeMap[typeName] = new GraphQLObjectType({
                    ...config,
                    fields: newFieldConfigMap
                });
            } else if (isInterfaceType(originalType)) {
                newTypeMap[typeName] = new GraphQLInterfaceType({
                    ...config,
                    fields: newFieldConfigMap
                });
            } else {
                newTypeMap[typeName] = new GraphQLInputObjectType({
                    ...config,
                    fields: newFieldConfigMap
                });
            }
        }
    });
    return newTypeMap;
}
function mapDirectives(originalDirectives, schema, schemaMapper) {
    const directiveMapper = getDirectiveMapper(schemaMapper);
    if (directiveMapper == null) {
        return originalDirectives.slice();
    }
    const newDirectives = [];
    originalDirectives.forEach((directive)=>{
        const mappedDirective = directiveMapper(directive, schema);
        if (mappedDirective === undefined) {
            newDirectives.push(directive);
        } else if (mappedDirective !== null) {
            newDirectives.push(mappedDirective);
        }
    });
    return newDirectives;
}
function getTypeSpecifiers(schema, typeName) {
    const type117 = schema.getType(typeName);
    const specifiers = [
        MapperKind.TYPE
    ];
    if (isObjectType(type117)) {
        specifiers.push(MapperKind.COMPOSITE_TYPE, MapperKind.OBJECT_TYPE);
        const query3 = schema.getQueryType();
        const mutation = schema.getMutationType();
        const subscription = schema.getSubscriptionType();
        if (query3 != null && typeName === query3.name) {
            specifiers.push(MapperKind.ROOT_OBJECT, MapperKind.QUERY);
        } else if (mutation != null && typeName === mutation.name) {
            specifiers.push(MapperKind.ROOT_OBJECT, MapperKind.MUTATION);
        } else if (subscription != null && typeName === subscription.name) {
            specifiers.push(MapperKind.ROOT_OBJECT, MapperKind.SUBSCRIPTION);
        }
    } else if (isInputObjectType(type117)) {
        specifiers.push(MapperKind.INPUT_OBJECT_TYPE);
    } else if (isInterfaceType(type117)) {
        specifiers.push(MapperKind.COMPOSITE_TYPE, MapperKind.ABSTRACT_TYPE, MapperKind.INTERFACE_TYPE);
    } else if (isUnionType(type117)) {
        specifiers.push(MapperKind.COMPOSITE_TYPE, MapperKind.ABSTRACT_TYPE, MapperKind.UNION_TYPE);
    } else if (isEnumType(type117)) {
        specifiers.push(MapperKind.ENUM_TYPE);
    } else if (isScalarType(type117)) {
        specifiers.push(MapperKind.SCALAR_TYPE);
    }
    return specifiers;
}
function getTypeMapper(schema, schemaMapper, typeName) {
    const specifiers = getTypeSpecifiers(schema, typeName);
    let typeMapper;
    const stack = [
        ...specifiers
    ];
    while(!typeMapper && stack.length > 0){
        const next = stack.pop();
        typeMapper = next && schemaMapper[next];
    }
    return typeMapper != null ? typeMapper : null;
}
function getFieldSpecifiers(schema, typeName) {
    const type118 = schema.getType(typeName);
    const specifiers = [
        MapperKind.FIELD
    ];
    if (isObjectType(type118)) {
        specifiers.push(MapperKind.COMPOSITE_FIELD, MapperKind.OBJECT_FIELD);
        const query4 = schema.getQueryType();
        const mutation = schema.getMutationType();
        const subscription = schema.getSubscriptionType();
        if (query4 != null && typeName === query4.name) {
            specifiers.push(MapperKind.ROOT_FIELD, MapperKind.QUERY_ROOT_FIELD);
        } else if (mutation != null && typeName === mutation.name) {
            specifiers.push(MapperKind.ROOT_FIELD, MapperKind.MUTATION_ROOT_FIELD);
        } else if (subscription != null && typeName === subscription.name) {
            specifiers.push(MapperKind.ROOT_FIELD, MapperKind.SUBSCRIPTION_ROOT_FIELD);
        }
    } else if (isInterfaceType(type118)) {
        specifiers.push(MapperKind.COMPOSITE_FIELD, MapperKind.INTERFACE_FIELD);
    } else if (isInputObjectType(type118)) {
        specifiers.push(MapperKind.INPUT_OBJECT_FIELD);
    }
    return specifiers;
}
function getFieldMapper(schema, schemaMapper, typeName) {
    const specifiers = getFieldSpecifiers(schema, typeName);
    let fieldMapper;
    const stack = [
        ...specifiers
    ];
    while(!fieldMapper && stack.length > 0){
        const next = stack.pop();
        fieldMapper = next && schemaMapper[next];
    }
    return fieldMapper != null ? fieldMapper : null;
}
function getArgumentMapper(schemaMapper) {
    const argumentMapper = schemaMapper[MapperKind.ARGUMENT];
    return argumentMapper != null ? argumentMapper : null;
}
function getDirectiveMapper(schemaMapper) {
    const directiveMapper = schemaMapper[MapperKind.DIRECTIVE];
    return directiveMapper != null ? directiveMapper : null;
}
function getEnumValueMapper(schemaMapper) {
    const enumValueMapper = schemaMapper[MapperKind.ENUM_VALUE];
    return enumValueMapper != null ? enumValueMapper : null;
}
function forEachField(schema, fn) {
    const typeMap = schema.getTypeMap();
    Object.keys(typeMap).forEach((typeName)=>{
        const type119 = typeMap[typeName];
        if (!getNamedType(type119).name.startsWith('__') && isObjectType(type119)) {
            const fields = type119.getFields();
            Object.keys(fields).forEach((fieldName)=>{
                const field = fields[fieldName];
                fn(field, typeName, fieldName);
            });
        }
    });
}
function forEachDefaultValue(schema, fn) {
    const typeMap = schema.getTypeMap();
    Object.keys(typeMap).forEach((typeName)=>{
        const type120 = typeMap[typeName];
        if (!getNamedType(type120).name.startsWith('__')) {
            if (isObjectType(type120)) {
                const fields = type120.getFields();
                Object.keys(fields).forEach((fieldName)=>{
                    const field = fields[fieldName];
                    field.args.forEach((arg)=>{
                        arg.defaultValue = fn(arg.type, arg.defaultValue);
                    });
                });
            } else if (isInputObjectType(type120)) {
                const fields = type120.getFields();
                Object.keys(fields).forEach((fieldName)=>{
                    const field = fields[fieldName];
                    field.defaultValue = fn(field.type, field.defaultValue);
                });
            }
        }
    });
}
function getArgumentValues1(def, node, variableValues = {}) {
    const variableMap = Object.entries(variableValues).reduce((prev, [key, value])=>({
            ...prev,
            [key]: value
        })
    , {});
    const coercedValues = {};
    const argumentNodes = node.arguments ?? [];
    const argNodeMap = argumentNodes.reduce((prev, arg)=>({
            ...prev,
            [arg.name.value]: arg
        })
    , {});
    for (const argDef of def.args){
        const name = argDef.name;
        const argType = argDef.type;
        const argumentNode = argNodeMap[name];
        if (!argumentNode) {
            if (argDef.defaultValue !== undefined) {
                coercedValues[name] = argDef.defaultValue;
            } else if (isNonNullType(argType)) {
                throw new GraphQLError(`Argument "${name}" of required type "${inspect1(argType)}" ` + 'was not provided.', node);
            }
            continue;
        }
        const valueNode = argumentNode.value;
        let isNull = valueNode.kind === Kind.NULL;
        if (valueNode.kind === Kind.VARIABLE) {
            const variableName = valueNode.name.value;
            if (variableValues == null || !(variableName in variableMap)) {
                if (argDef.defaultValue !== undefined) {
                    coercedValues[name] = argDef.defaultValue;
                } else if (isNonNullType(argType)) {
                    throw new GraphQLError(`Argument "${name}" of required type "${inspect1(argType)}" ` + `was provided the variable "$${variableName}" which was not provided a runtime value.`, valueNode);
                }
                continue;
            }
            isNull = variableValues[variableName] == null;
        }
        if (isNull && isNonNullType(argType)) {
            throw new GraphQLError(`Argument "${name}" of non-null type "${inspect1(argType)}" ` + 'must not be null.', valueNode);
        }
        const coercedValue = valueFromAST(valueNode, argType, variableValues);
        if (coercedValue === undefined) {
            throw new GraphQLError(`Argument "${name}" has invalid value ${print(valueNode)}.`, valueNode);
        }
        coercedValues[name] = coercedValue;
    }
    return coercedValues;
}
function isSchemaVisitor(obj) {
    if ('schema' in obj && isSchema(obj.schema)) {
        if ('visitSchema' in obj && typeof obj.visitSchema === 'function') {
            return true;
        }
    }
    return false;
}
function visitSchema(schema, visitorOrVisitorSelector) {
    const visitorSelector = typeof visitorOrVisitorSelector === 'function' ? visitorOrVisitorSelector : ()=>visitorOrVisitorSelector
    ;
    function callMethod(methodName, type121, ...args) {
        let visitors = visitorSelector(type121, methodName);
        visitors = Array.isArray(visitors) ? visitors : [
            visitors
        ];
        let finalType = type121;
        visitors.every((visitorOrVisitorDef)=>{
            let newType;
            if (isSchemaVisitor(visitorOrVisitorDef)) {
                newType = visitorOrVisitorDef[methodName](finalType, ...args);
            } else if (isNamedType(finalType) && (methodName === 'visitScalar' || methodName === 'visitEnum' || methodName === 'visitObject' || methodName === 'visitInputObject' || methodName === 'visitUnion' || methodName === 'visitInterface')) {
                const specifiers = getTypeSpecifiers1(finalType, schema);
                const typeVisitor = getVisitor(visitorOrVisitorDef, specifiers);
                newType = typeVisitor != null ? typeVisitor(finalType, schema) : undefined;
            }
            if (typeof newType === 'undefined') {
                return true;
            }
            if (methodName === 'visitSchema' || isSchema(finalType)) {
                throw new Error(`Method ${methodName} cannot replace schema with ${newType}`);
            }
            if (newType === null) {
                finalType = null;
                return false;
            }
            finalType = newType;
            return true;
        });
        return finalType;
    }
    function visit1(type122) {
        if (isSchema(type122)) {
            callMethod('visitSchema', type122);
            const typeMap = type122.getTypeMap();
            Object.entries(typeMap).forEach(([typeName, namedType])=>{
                if (!typeName.startsWith('__') && namedType != null) {
                    typeMap[typeName] = visit1(namedType);
                }
            });
            return type122;
        }
        if (isObjectType(type122)) {
            const newObject = callMethod('visitObject', type122);
            if (newObject != null) {
                visitFields(newObject);
            }
            return newObject;
        }
        if (isInterfaceType(type122)) {
            const newInterface = callMethod('visitInterface', type122);
            if (newInterface != null) {
                visitFields(newInterface);
            }
            return newInterface;
        }
        if (isInputObjectType(type122)) {
            const newInputObject = callMethod('visitInputObject', type122);
            if (newInputObject != null) {
                const fieldMap = newInputObject.getFields();
                for (const key of Object.keys(fieldMap)){
                    fieldMap[key] = callMethod('visitInputFieldDefinition', fieldMap[key], {
                        objectType: newInputObject
                    });
                    if (!fieldMap[key]) {
                        delete fieldMap[key];
                    }
                }
            }
            return newInputObject;
        }
        if (isScalarType(type122)) {
            return callMethod('visitScalar', type122);
        }
        if (isUnionType(type122)) {
            return callMethod('visitUnion', type122);
        }
        if (isEnumType(type122)) {
            let newEnum = callMethod('visitEnum', type122);
            if (newEnum != null) {
                const newValues = newEnum.getValues().map((value)=>callMethod('visitEnumValue', value, {
                        enumType: newEnum
                    })
                ).filter(Boolean);
                const valuesUpdated = newValues.some((value, index4)=>value !== newEnum.getValues()[index4]
                );
                if (valuesUpdated) {
                    newEnum = new GraphQLEnumType({
                        ...newEnum.toConfig(),
                        values: newValues.reduce((prev, value)=>({
                                ...prev,
                                [value.name]: {
                                    value: value.value,
                                    deprecationReason: value.deprecationReason,
                                    description: value.description,
                                    astNode: value.astNode
                                }
                            })
                        , {})
                    });
                }
            }
            return newEnum;
        }
        throw new Error(`Unexpected schema type: ${type122}`);
    }
    function visitFields(type123) {
        const fieldMap = type123.getFields();
        for (const [key, field] of Object.entries(fieldMap)){
            const newField = callMethod('visitFieldDefinition', field, {
                objectType: type123
            });
            if (newField.args != null) {
                newField.args = newField.args.map((arg)=>callMethod('visitArgumentDefinition', arg, {
                        field: newField,
                        objectType: type123
                    })
                ).filter(Boolean);
            }
            if (newField) {
                fieldMap[key] = newField;
            } else {
                delete fieldMap[key];
            }
        }
    }
    visit1(schema);
    healSchema(schema);
    return schema;
}
class SchemaDirectiveVisitor extends SchemaVisitor {
    name;
    args;
    visitedType;
    context;
    static getDirectiveDeclaration(directiveName, schema) {
        return schema.getDirective(directiveName);
    }
    static visitSchemaDirectives(schema, directiveVisitors, context = Object.create(null)) {
        const declaredDirectives = this.getDeclaredDirectives(schema, directiveVisitors);
        const createdVisitors = Object.keys(directiveVisitors).reduce((prev, item)=>({
                ...prev,
                [item]: []
            })
        , {});
        const directiveVisitorMap = Object.entries(directiveVisitors).reduce((prev, [key, value])=>({
                ...prev,
                [key]: value
            })
        , {});
        function visitorSelector(type124, methodName) {
            let directiveNodes = type124?.astNode?.directives ?? [];
            const extensionASTNodes = type124.extensionASTNodes;
            if (extensionASTNodes != null) {
                extensionASTNodes.forEach((extensionASTNode)=>{
                    if (extensionASTNode.directives != null) {
                        directiveNodes = directiveNodes.concat(extensionASTNode.directives);
                    }
                });
            }
            const visitors = [];
            directiveNodes.forEach((directiveNode)=>{
                const directiveName = directiveNode.name.value;
                if (!(directiveName in directiveVisitorMap)) {
                    return;
                }
                const VisitorClass = directiveVisitorMap[directiveName];
                if (!VisitorClass.implementsVisitorMethod(methodName)) {
                    return;
                }
                const decl = declaredDirectives[directiveName];
                let args;
                if (decl != null) {
                    args = getArgumentValues1(decl, directiveNode);
                } else {
                    args = Object.create(null);
                    if (directiveNode.arguments != null) {
                        directiveNode.arguments.forEach((arg)=>{
                            args[arg.name.value] = valueFromASTUntyped(arg.value);
                        });
                    }
                }
                visitors.push(new VisitorClass({
                    name: directiveName,
                    args,
                    visitedType: type124,
                    schema,
                    context
                }));
            });
            if (visitors.length > 0) {
                visitors.forEach((visitor)=>{
                    createdVisitors[visitor.name].push(visitor);
                });
            }
            return visitors;
        }
        visitSchema(schema, visitorSelector);
        return createdVisitors;
    }
    static getDeclaredDirectives(schema, directiveVisitors) {
        const declaredDirectives = schema.getDirectives().reduce((prev, curr)=>({
                ...prev,
                [curr.name]: curr
            })
        , {});
        Object.entries(directiveVisitors).forEach(([directiveName, visitorClass])=>{
            const decl = visitorClass.getDirectiveDeclaration(directiveName, schema);
            if (decl != null) {
                declaredDirectives[directiveName] = decl;
            }
        });
        Object.entries(declaredDirectives).forEach(([name, decl])=>{
            if (!(name in directiveVisitors)) {
                return;
            }
            const visitorClass = directiveVisitors[name];
            decl.locations.forEach((loc)=>{
                const visitorMethodName = directiveLocationToVisitorMethodName(loc);
                if (SchemaVisitor.implementsVisitorMethod(visitorMethodName) && !visitorClass.implementsVisitorMethod(visitorMethodName)) {
                    throw new Error(`SchemaDirectiveVisitor for @${name} must implement ${visitorMethodName} method`);
                }
            });
        });
        return declaredDirectives;
    }
    constructor(config){
        super();
        this.name = config.name;
        this.args = config.args;
        this.visitedType = config.visitedType;
        this.schema = config.schema;
        this.context = config.context;
    }
}
function getDirectives(schema, node) {
    const schemaDirectives = schema && schema.getDirectives ? schema.getDirectives() : [];
    const schemaDirectiveMap1 = schemaDirectives.reduce((schemaDirectiveMap, schemaDirective)=>{
        schemaDirectiveMap[schemaDirective.name] = schemaDirective;
        return schemaDirectiveMap;
    }, {});
    let astNodes = [];
    if (node.astNode) {
        astNodes.push(node.astNode);
    }
    if ('extensionASTNodes' in node && node.extensionASTNodes) {
        astNodes = [
            ...astNodes,
            ...node.extensionASTNodes
        ];
    }
    const result = {};
    astNodes.forEach((astNode)=>{
        if (astNode.directives) {
            astNode.directives.forEach((directive)=>{
                const schemaDirective = schemaDirectiveMap1[directive.name.value];
                if (schemaDirective) {
                    const directiveValue = getDirectiveValues1(schemaDirective, astNode);
                    if (schemaDirective.isRepeatable) {
                        if (result[schemaDirective.name]) {
                            result[schemaDirective.name] = result[schemaDirective.name].concat([
                                directiveValue
                            ]);
                        } else {
                            result[schemaDirective.name] = [
                                directiveValue
                            ];
                        }
                    } else {
                        result[schemaDirective.name] = directiveValue;
                    }
                }
            });
        }
    });
    return result;
}
function directiveLocationToVisitorMethodName(loc) {
    return 'visit' + loc.replace(/([^_]*)_?/g, (_wholeMatch, part)=>part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    );
}
function getTypeSpecifiers1(type125, schema) {
    const specifiers = [
        VisitSchemaKind.TYPE
    ];
    if (isObjectType(type125)) {
        specifiers.push(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.OBJECT_TYPE);
        const query5 = schema.getQueryType();
        const mutation = schema.getMutationType();
        const subscription = schema.getSubscriptionType();
        if (type125 === query5) {
            specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.QUERY);
        } else if (type125 === mutation) {
            specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.MUTATION);
        } else if (type125 === subscription) {
            specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.SUBSCRIPTION);
        }
    } else if (isInputType(type125)) {
        specifiers.push(VisitSchemaKind.INPUT_OBJECT_TYPE);
    } else if (isInterfaceType(type125)) {
        specifiers.push(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.ABSTRACT_TYPE, VisitSchemaKind.INTERFACE_TYPE);
    } else if (isUnionType(type125)) {
        specifiers.push(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.ABSTRACT_TYPE, VisitSchemaKind.UNION_TYPE);
    } else if (isEnumType(type125)) {
        specifiers.push(VisitSchemaKind.ENUM_TYPE);
    } else if (isScalarType(type125)) {
        specifiers.push(VisitSchemaKind.SCALAR_TYPE);
    }
    return specifiers;
}
function getVisitor(visitorDef, specifiers) {
    let typeVisitor;
    const stack = [
        ...specifiers
    ];
    while(!typeVisitor && stack.length > 0){
        const next = stack.pop();
        typeVisitor = next && visitorDef[next];
    }
    return typeVisitor != null ? typeVisitor : null;
}
function getDirectiveValues1(directiveDef, node) {
    if (node.directives) {
        if (directiveDef.isRepeatable) {
            const directiveNodes = node.directives.filter((directive)=>directive.name.value === directiveDef.name
            );
            return directiveNodes.map((directiveNode)=>getArgumentValues1(directiveDef, directiveNode)
            );
        }
        const directiveNode1 = node.directives.find((directive)=>directive.name.value === directiveDef.name
        );
        return getArgumentValues1(directiveDef, directiveNode1);
    }
}
function checkForResolveTypeResolver(schema, requireResolversForResolveType) {
    Object.keys(schema.getTypeMap()).map((typeName)=>schema.getType(typeName)
    ).forEach((type126)=>{
        if (!isAbstractType(type126)) return;
        if (!type126.resolveType) {
            if (!requireResolversForResolveType) {
                return;
            }
            throw new Error(`Type "${type126.name}" is missing a "__resolveType" resolver. Pass false into ` + '"resolverValidationOptions.requireResolversForResolveType" to disable this error.');
        }
    });
}
function extendResolversFromInterfaces(schema, resolvers1) {
    const typeNames = Object.keys({
        ...schema.getTypeMap(),
        ...resolvers1
    });
    const extendedResolvers = {};
    typeNames.forEach((typeName)=>{
        const type127 = schema.getType(typeName);
        if ('getInterfaces' in type127) {
            const allInterfaceResolvers = type127.getInterfaces().map((iFace)=>resolvers1[iFace.name]
            ).filter((interfaceResolvers)=>interfaceResolvers != null
            );
            extendedResolvers[typeName] = {};
            allInterfaceResolvers.forEach((interfaceResolvers)=>{
                Object.keys(interfaceResolvers).forEach((fieldName)=>{
                    if (fieldName === '__isTypeOf' || !fieldName.startsWith('__')) {
                        extendedResolvers[typeName][fieldName] = interfaceResolvers[fieldName];
                    }
                });
            });
            const typeResolvers = resolvers1[typeName];
            extendedResolvers[typeName] = {
                ...extendedResolvers[typeName],
                ...typeResolvers
            };
        } else {
            const typeResolvers = resolvers1[typeName];
            if (typeResolvers != null) {
                extendedResolvers[typeName] = typeResolvers;
            }
        }
    });
    return extendedResolvers;
}
function addResolversToSchema(schemaOrOptions, legacyInputResolvers, legacyInputValidationOptions) {
    const options = isSchema(schemaOrOptions) ? {
        schema: schemaOrOptions,
        resolvers: legacyInputResolvers,
        resolverValidationOptions: legacyInputValidationOptions
    } : schemaOrOptions;
    let { schema , resolvers: inputResolvers , defaultFieldResolver: defaultFieldResolver1 , resolverValidationOptions ={} , inheritResolversFromInterfaces =false , updateResolversInPlace =false  } = options;
    const { allowResolversNotInSchema =false , requireResolversForResolveType  } = resolverValidationOptions;
    const resolvers2 = inheritResolversFromInterfaces ? extendResolversFromInterfaces(schema, inputResolvers) : inputResolvers;
    Object.keys(resolvers2).forEach((typeName)=>{
        const resolverValue = resolvers2[typeName];
        const resolverType = typeof resolverValue;
        if (typeName === '__schema') {
            if (resolverType !== 'function') {
                throw new Error(`"${typeName}" defined in resolvers, but has invalid value "${resolverValue}". A schema resolver's value must be of type object or function.`);
            }
        } else {
            if (resolverType !== 'object') {
                throw new Error(`"${typeName}" defined in resolvers, but has invalid value "${resolverValue}". The resolver's value must be of type object.`);
            }
            const type128 = schema.getType(typeName);
            if (type128 == null) {
                if (allowResolversNotInSchema) {
                    return;
                }
                throw new Error(`"${typeName}" defined in resolvers, but not in schema`);
            } else if (isSpecifiedScalarType(type128)) {
                Object.keys(resolverValue).forEach((fieldName)=>{
                    if (fieldName.startsWith('__')) {
                        type128[fieldName.substring(2)] = resolverValue[fieldName];
                    } else {
                        type128[fieldName] = resolverValue[fieldName];
                    }
                });
            }
        }
    });
    schema = updateResolversInPlace ? addResolversToExistingSchema({
        schema,
        resolvers: resolvers2,
        defaultFieldResolver: defaultFieldResolver1,
        allowResolversNotInSchema
    }) : createNewSchemaWithResolvers({
        schema,
        resolvers: resolvers2,
        defaultFieldResolver: defaultFieldResolver1,
        allowResolversNotInSchema
    });
    checkForResolveTypeResolver(schema, requireResolversForResolveType);
    return schema;
}
function addResolversToExistingSchema({ schema , resolvers: resolvers3 , defaultFieldResolver: defaultFieldResolver2 , allowResolversNotInSchema  }) {
    const typeMap = schema.getTypeMap();
    Object.keys(resolvers3).forEach((typeName)=>{
        if (typeName !== '__schema') {
            const type129 = schema.getType(typeName);
            const resolverValue = resolvers3[typeName];
            if (isScalarType(type129)) {
                Object.keys(resolverValue).forEach((fieldName)=>{
                    if (fieldName.startsWith('__')) {
                        type129[fieldName.substring(2)] = resolverValue[fieldName];
                    } else {
                        type129[fieldName] = resolverValue[fieldName];
                    }
                });
            } else if (isEnumType(type129)) {
                const config = type129.toConfig();
                const enumValueConfigMap = config.values;
                Object.keys(resolverValue).forEach((fieldName)=>{
                    if (fieldName.startsWith('__')) {
                        config[fieldName.substring(2)] = resolverValue[fieldName];
                    } else if (!enumValueConfigMap[fieldName]) {
                        if (allowResolversNotInSchema) {
                            return;
                        }
                        throw new Error(`${type129.name}.${fieldName} was defined in resolvers, but not present within ${type129.name}`);
                    } else {
                        enumValueConfigMap[fieldName].value = resolverValue[fieldName];
                    }
                });
                typeMap[typeName] = new GraphQLEnumType(config);
            } else if (isUnionType(type129)) {
                Object.keys(resolverValue).forEach((fieldName)=>{
                    if (fieldName.startsWith('__')) {
                        type129[fieldName.substring(2)] = resolverValue[fieldName];
                        return;
                    }
                    if (allowResolversNotInSchema) {
                        return;
                    }
                    throw new Error(`${type129.name}.${fieldName} was defined in resolvers, but ${type129.name} is not an object or interface type`);
                });
            } else if (isObjectType(type129) || isInterfaceType(type129)) {
                Object.keys(resolverValue).forEach((fieldName)=>{
                    if (fieldName.startsWith('__')) {
                        type129[fieldName.substring(2)] = resolverValue[fieldName];
                        return;
                    }
                    const fields = type129.getFields();
                    const field = fields[fieldName];
                    if (field == null) {
                        if (allowResolversNotInSchema) {
                            return;
                        }
                        throw new Error(`${typeName}.${fieldName} defined in resolvers, but not in schema`);
                    }
                    const fieldResolve = resolverValue[fieldName];
                    if (typeof fieldResolve === 'function') {
                        field.resolve = fieldResolve;
                    } else {
                        if (typeof fieldResolve !== 'object') {
                            throw new Error(`Resolver ${typeName}.${fieldName} must be object or function`);
                        }
                        setFieldProperties(field, fieldResolve);
                    }
                });
            }
        }
    });
    forEachDefaultValue(schema, serializeInputValue);
    healSchema(schema);
    forEachDefaultValue(schema, parseInputValue);
    if (defaultFieldResolver2 != null) {
        forEachField(schema, (field)=>{
            if (!field.resolve) {
                field.resolve = defaultFieldResolver2;
            }
        });
    }
    return schema;
}
function createNewSchemaWithResolvers({ schema , resolvers: resolvers4 , defaultFieldResolver: defaultFieldResolver3 , allowResolversNotInSchema  }) {
    schema = mapSchema(schema, {
        [MapperKind.SCALAR_TYPE]: (type130)=>{
            const config = type130.toConfig();
            const resolverValue = resolvers4[type130.name];
            if (!isSpecifiedScalarType(type130) && resolverValue != null) {
                Object.keys(resolverValue).forEach((fieldName)=>{
                    if (fieldName.startsWith('__')) {
                        config[fieldName.substring(2)] = resolverValue[fieldName];
                    } else {
                        config[fieldName] = resolverValue[fieldName];
                    }
                });
                return new GraphQLScalarType(config);
            }
        },
        [MapperKind.ENUM_TYPE]: (type131)=>{
            const resolverValue = resolvers4[type131.name];
            const config = type131.toConfig();
            const enumValueConfigMap = config.values;
            if (resolverValue != null) {
                Object.keys(resolverValue).forEach((fieldName)=>{
                    if (fieldName.startsWith('__')) {
                        config[fieldName.substring(2)] = resolverValue[fieldName];
                    } else if (!enumValueConfigMap[fieldName]) {
                        if (allowResolversNotInSchema) {
                            return;
                        }
                        throw new Error(`${type131.name}.${fieldName} was defined in resolvers, but not present within ${type131.name}`);
                    } else {
                        enumValueConfigMap[fieldName].value = resolverValue[fieldName];
                    }
                });
                return new GraphQLEnumType(config);
            }
        },
        [MapperKind.UNION_TYPE]: (type132)=>{
            const resolverValue = resolvers4[type132.name];
            if (resolverValue != null) {
                const config = type132.toConfig();
                Object.keys(resolverValue).forEach((fieldName)=>{
                    if (fieldName.startsWith('__')) {
                        config[fieldName.substring(2)] = resolverValue[fieldName];
                        return;
                    }
                    if (allowResolversNotInSchema) {
                        return;
                    }
                    throw new Error(`${type132.name}.${fieldName} was defined in resolvers, but ${type132.name} is not an object or interface type`);
                });
                return new GraphQLUnionType(config);
            }
        },
        [MapperKind.OBJECT_TYPE]: (type133)=>{
            const resolverValue = resolvers4[type133.name];
            if (resolverValue != null) {
                const config = type133.toConfig();
                const fields = config.fields;
                Object.keys(resolverValue).forEach((fieldName)=>{
                    if (fieldName.startsWith('__')) {
                        config[fieldName.substring(2)] = resolverValue[fieldName];
                        return;
                    }
                    const field = fields[fieldName];
                    if (field == null) {
                        if (allowResolversNotInSchema) {
                            return;
                        }
                        throw new Error(`${type133.name}.${fieldName} defined in resolvers, but not in schema`);
                    }
                });
                return new GraphQLObjectType(config);
            }
        },
        [MapperKind.INTERFACE_TYPE]: (type134)=>{
            const resolverValue = resolvers4[type134.name];
            if (resolverValue != null) {
                const config = type134.toConfig();
                const fields = config.fields;
                Object.keys(resolverValue).forEach((fieldName)=>{
                    if (fieldName.startsWith('__')) {
                        config[fieldName.substring(2)] = resolverValue[fieldName];
                        return;
                    }
                    const field = fields[fieldName];
                    if (field == null) {
                        if (allowResolversNotInSchema) {
                            return;
                        }
                        throw new Error(`${type134.name}.${fieldName} defined in resolvers, but not in schema`);
                    }
                });
                return new GraphQLInterfaceType(config);
            }
        },
        [MapperKind.COMPOSITE_FIELD]: (fieldConfig, fieldName, typeName)=>{
            const resolverValue = resolvers4[typeName];
            if (resolverValue != null) {
                const fieldResolve = resolverValue[fieldName];
                if (fieldResolve != null) {
                    const newFieldConfig = {
                        ...fieldConfig
                    };
                    if (typeof fieldResolve === 'function') {
                        newFieldConfig.resolve = fieldResolve;
                    } else {
                        if (typeof fieldResolve !== 'object') {
                            throw new Error(`Resolver ${typeName}.${fieldName} must be object or function`);
                        }
                        setFieldProperties(newFieldConfig, fieldResolve);
                    }
                    return newFieldConfig;
                }
            }
        }
    });
    if (defaultFieldResolver3 != null) {
        schema = mapSchema(schema, {
            [MapperKind.OBJECT_FIELD]: (fieldConfig)=>({
                    ...fieldConfig,
                    resolve: fieldConfig.resolve != null ? fieldConfig.resolve : defaultFieldResolver3
                })
        });
    }
    return schema;
}
function setFieldProperties(field, propertiesObj) {
    Object.keys(propertiesObj).forEach((propertyName)=>{
        field[propertyName] = propertiesObj[propertyName];
    });
}
function attachDirectiveResolvers(schema, directiveResolvers) {
    if (typeof directiveResolvers !== 'object') {
        throw new Error(`Expected directiveResolvers to be of type object, got ${typeof directiveResolvers}`);
    }
    if (Array.isArray(directiveResolvers)) {
        throw new Error('Expected directiveResolvers to be of type object, got Array');
    }
    return mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: (fieldConfig)=>{
            const newFieldConfig = {
                ...fieldConfig
            };
            const directives = getDirectives(schema, fieldConfig);
            Object.keys(directives).forEach((directiveName)=>{
                if (directiveResolvers[directiveName]) {
                    const resolver = directiveResolvers[directiveName];
                    const originalResolver = newFieldConfig.resolve != null ? newFieldConfig.resolve : defaultFieldResolver;
                    const directiveArgs = directives[directiveName];
                    newFieldConfig.resolve = (source, originalArgs, context, info)=>{
                        return resolver(()=>new Promise((resolve5, reject2)=>{
                                const result = originalResolver(source, originalArgs, context, info);
                                if (result instanceof Error) {
                                    reject2(result);
                                }
                                resolve5(result);
                            })
                        , source, directiveArgs, context, info);
                    };
                }
            });
            return newFieldConfig;
        }
    });
}
function assertResolversPresent(schema, resolverValidationOptions = {}) {
    const { requireResolversForArgs =false , requireResolversForNonScalar =false , requireResolversForAllFields =false  } = resolverValidationOptions;
    if (requireResolversForAllFields && (requireResolversForArgs || requireResolversForNonScalar)) {
        throw new TypeError('requireResolversForAllFields takes precedence over the more specific assertions. ' + 'Please configure either requireResolversForAllFields or requireResolversForArgs / ' + 'requireResolversForNonScalar, but not a combination of them.');
    }
    forEachField(schema, (field, typeName, fieldName)=>{
        if (requireResolversForAllFields) {
            expectResolver(field, typeName, fieldName);
        }
        if (requireResolversForArgs && field.args.length > 0) {
            expectResolver(field, typeName, fieldName);
        }
        if (requireResolversForNonScalar && !isScalarType(getNamedType(field.type))) {
            expectResolver(field, typeName, fieldName);
        }
    });
}
function expectResolver(field, typeName, fieldName) {
    if (!field.resolve) {
        console.warn(`Resolver missing for "${typeName}.${fieldName}".
To disable this warning check pass;
resolverValidationOptions: {
  requireResolversForNonScalar: false
}
      `);
        return;
    }
    if (typeof field.resolve !== 'function') {
        throw new Error(`Resolver "${typeName}.${fieldName}" must be a function`);
    }
}
function addSchemaLevelResolver(schema1, fn) {
    const fnToRunOnlyOnce = runAtMostOncePerRequest(fn);
    return mapSchema(schema1, {
        [MapperKind.ROOT_FIELD]: (fieldConfig, _fieldName, typeName, schema)=>{
            const subscription = schema.getSubscriptionType();
            if (subscription != null && subscription.name === typeName) {
                return {
                    ...fieldConfig,
                    resolve: wrapResolver(fieldConfig.resolve, fn)
                };
            }
            return {
                ...fieldConfig,
                resolve: wrapResolver(fieldConfig.resolve, fnToRunOnlyOnce)
            };
        }
    });
}
function wrapResolver(innerResolver, outerResolver) {
    return (obj, args, ctx, info)=>resolveMaybePromise(outerResolver(obj, args, ctx, info), (root)=>{
            if (innerResolver != null) {
                return innerResolver(root, args, ctx, info);
            }
            return defaultFieldResolver(root, args, ctx, info);
        })
    ;
}
function isPromise1(maybePromise) {
    return maybePromise && typeof maybePromise.then === 'function';
}
function resolveMaybePromise(maybePromise, fulfillmentCallback) {
    if (isPromise1(maybePromise)) {
        return maybePromise.then(fulfillmentCallback);
    }
    return fulfillmentCallback(maybePromise);
}
function runAtMostOncePerRequest(fn) {
    let value;
    const randomNumber = Math.random();
    return (root, args, ctx, info)=>{
        if (!info.operation['__runAtMostOnce']) {
            info.operation['__runAtMostOnce'] = {};
        }
        if (!info.operation['__runAtMostOnce'][randomNumber]) {
            info.operation['__runAtMostOnce'][randomNumber] = true;
            value = fn(root, args, ctx, info);
        }
        return value;
    };
}
function extractExtensionDefinitions(ast) {
    const extensionDefs = ast.definitions.filter((def)=>def.kind === Kind.OBJECT_TYPE_EXTENSION || def.kind === Kind.INTERFACE_TYPE_EXTENSION || def.kind === Kind.INPUT_OBJECT_TYPE_EXTENSION || def.kind === Kind.UNION_TYPE_EXTENSION || def.kind === Kind.ENUM_TYPE_EXTENSION || def.kind === Kind.SCALAR_TYPE_EXTENSION || def.kind === Kind.SCHEMA_EXTENSION
    );
    return {
        ...ast,
        definitions: extensionDefs
    };
}
function filterExtensionDefinitions(ast) {
    const extensionDefs = ast.definitions.filter((def)=>def.kind !== Kind.OBJECT_TYPE_EXTENSION && def.kind !== Kind.INTERFACE_TYPE_EXTENSION && def.kind !== Kind.INPUT_OBJECT_TYPE_EXTENSION && def.kind !== Kind.UNION_TYPE_EXTENSION && def.kind !== Kind.ENUM_TYPE_EXTENSION && def.kind !== Kind.SCALAR_TYPE_EXTENSION && def.kind !== Kind.SCHEMA_EXTENSION
    );
    return {
        ...ast,
        definitions: extensionDefs
    };
}
function concatenateTypeDefs(typeDefinitionsAry, calledFunctionRefs = []) {
    let resolvedTypeDefinitions = [];
    typeDefinitionsAry.forEach((typeDef)=>{
        if (typeof typeDef === 'function') {
            if (calledFunctionRefs.indexOf(typeDef) === -1) {
                calledFunctionRefs.push(typeDef);
                resolvedTypeDefinitions = resolvedTypeDefinitions.concat(concatenateTypeDefs(typeDef(), calledFunctionRefs));
            }
        } else if (typeof typeDef === 'string') {
            resolvedTypeDefinitions.push(typeDef.trim());
        } else if (typeDef.kind !== undefined) {
            resolvedTypeDefinitions.push(print(typeDef).trim());
        } else {
            const type135 = typeof typeDef;
            throw new Error(`typeDef array must contain only strings, documents, or functions, got ${type135}`);
        }
    });
    return uniq(resolvedTypeDefinitions.map((x6)=>x6.trim()
    )).join('\n');
}
function uniq(array) {
    return array.reduce((accumulator, currentValue)=>accumulator.indexOf(currentValue) === -1 ? [
            ...accumulator,
            currentValue
        ] : accumulator
    , []);
}
function buildSchemaFromTypeDefinitions(typeDefinitions, parseOptions) {
    const document = buildDocumentFromTypeDefinitions(typeDefinitions, parseOptions);
    const typesAst = filterExtensionDefinitions(document);
    const backcompatOptions = {
        commentDescriptions: true
    };
    let schema = buildASTSchema(typesAst, backcompatOptions);
    const extensionsAst = extractExtensionDefinitions(document);
    if (extensionsAst.definitions.length > 0) {
        schema = extendSchema(schema, extensionsAst, backcompatOptions);
    }
    return schema;
}
function isDocumentNode(typeDefinitions) {
    return typeDefinitions.kind !== undefined;
}
function buildDocumentFromTypeDefinitions(typeDefinitions, parseOptions) {
    let document;
    if (typeof typeDefinitions === 'string') {
        document = parse4(typeDefinitions, parseOptions);
    } else if (Array.isArray(typeDefinitions)) {
        document = parse4(concatenateTypeDefs(typeDefinitions), parseOptions);
    } else if (isDocumentNode(typeDefinitions)) {
        document = typeDefinitions;
    } else {
        const type136 = typeof typeDefinitions;
        throw new Error(`typeDefs must be a string, array or schema AST, got ${type136}`);
    }
    return document;
}
function decorateWithLogger(fn, logger, hint) {
    const resolver = fn != null ? fn : defaultFieldResolver;
    const logError = (e12)=>{
        const newE = new Error();
        newE.stack = e12.stack;
        if (hint) {
            newE['originalMessage'] = e12.message;
            newE.message = `Error in resolver ${hint}\n${e12.message}`;
        }
        logger.log(newE);
    };
    return (root, args, ctx, info)=>{
        try {
            const result = resolver(root, args, ctx, info);
            if (result && typeof result.then === 'function' && typeof result.catch === 'function') {
                result.catch((reason)=>{
                    const error = reason instanceof Error ? reason : new Error(reason);
                    logError(error);
                    return reason;
                });
            }
            return result;
        } catch (e13) {
            logError(e13);
            throw e13;
        }
    };
}
function addErrorLoggingToSchema(schema, logger) {
    if (!logger) {
        throw new Error('Must provide a logger');
    }
    if (typeof logger.log !== 'function') {
        throw new Error('Logger.log must be a function');
    }
    return mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: (fieldConfig, fieldName, typeName)=>({
                ...fieldConfig,
                resolve: decorateWithLogger(fieldConfig.resolve, logger, `${typeName}.${fieldName}`)
            })
    });
}
function decorateToCatchUndefined(fn, hint) {
    const resolve6 = fn == null ? defaultFieldResolver : fn;
    return (root, args, ctx, info)=>{
        const result = resolve6(root, args, ctx, info);
        if (typeof result === 'undefined') {
            throw new Error(`Resolver for "${hint}" returned undefined`);
        }
        return result;
    };
}
function addCatchUndefinedToSchema(schema) {
    return mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: (fieldConfig, fieldName, typeName)=>({
                ...fieldConfig,
                resolve: decorateToCatchUndefined(fieldConfig.resolve, `${typeName}.${fieldName}`)
            })
    });
}
function makeExecutableSchema({ typeDefs: typeDefs2 , resolvers: resolvers5 = {} , logger , allowUndefinedInResolve =true , resolverValidationOptions ={} , directiveResolvers , schemaDirectives , schemaTransforms =[] , parseOptions ={} , inheritResolversFromInterfaces =false  }) {
    if (typeof resolverValidationOptions !== 'object') {
        throw new Error('Expected `resolverValidationOptions` to be an object');
    }
    if (!typeDefs2) {
        throw new Error('Must provide typeDefs');
    }
    const resolverMap = Array.isArray(resolvers5) ? resolvers5.reduce(mergeDeep, {}) : resolvers5;
    let schema = buildSchemaFromTypeDefinitions(typeDefs2, parseOptions);
    schema = addResolversToSchema({
        schema,
        resolvers: resolverMap,
        resolverValidationOptions,
        inheritResolversFromInterfaces
    });
    assertResolversPresent(schema, resolverValidationOptions);
    if (!allowUndefinedInResolve) {
        schema = addCatchUndefinedToSchema(schema);
    }
    if (logger != null) {
        schema = addErrorLoggingToSchema(schema, logger);
    }
    if (typeof resolvers5['__schema'] === 'function') {
        schema = addSchemaLevelResolver(schema, resolvers5['__schema']);
    }
    schemaTransforms.forEach((schemaTransform)=>{
        schema = schemaTransform(schema);
    });
    if (directiveResolvers != null) {
        schema = attachDirectiveResolvers(schema, directiveResolvers);
    }
    if (schemaDirectives != null) {
        SchemaDirectiveVisitor.visitSchemaDirectives(schema, schemaDirectives);
    }
    return schema;
}
const docCache = new Map();
const fragmentSourceMap = new Map();
let printFragmentWarnings = true;
let experimentalFragmentVariables = false;
function normalize4(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize4(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    const seenKeys = new Set();
    const definitions = [];
    ast.definitions.forEach((fragmentDefinition)=>{
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            const fragmentName = fragmentDefinition.name.value;
            const sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            let sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) {
                    console.warn('Warning: fragment with name ' + fragmentName + ' already exists.\n' + 'graphql-tag enforces all fragment names across your application to be unique; read more about\n' + 'this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names');
                }
            } else if (!sourceKeySet) {
                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set());
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        } else {
            definitions.push(fragmentDefinition);
        }
    });
    return {
        ...ast,
        definitions
    };
}
function stripLoc(doc) {
    const workSet = new Set(doc.definitions);
    workSet.forEach((node)=>{
        if (node.loc) delete node.loc;
        Object.keys(node).forEach((key)=>{
            const value = node[key];
            if (value && typeof value === 'object') {
                workSet.add(value);
            }
        });
    });
    const loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize4(source);
    if (!docCache.has(cacheKey)) {
        const parsed = parse4(source, {
            experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') {
            throw new Error('Not a valid GraphQL document.');
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals, ...args) {
    if (typeof literals === 'string') {
        literals = [
            literals
        ];
    }
    let result = literals[0];
    args.forEach((arg, i43)=>{
        if (arg && arg.kind === 'Document') {
            result += arg.loc.source.body;
        } else {
            result += arg;
        }
        result += literals[i43 + 1];
    });
    return parseDocument(result);
}
var SortOptions;
(function(SortOptions1) {
    SortOptions1["DESC"] = "DESC";
    SortOptions1["ASC"] = "ASC";
})(SortOptions || (SortOptions = {}));
var Method;
(function(Method1) {
    Method1["GET"] = "GET";
    Method1["POST"] = "POST";
    Method1["PUT"] = "PUT";
    Method1["DELETE"] = "DELETE";
    Method1["PATCH"] = "PATCH";
})(Method || (Method = {}));
var Action;
(function(Action1) {
    Action1["QUERY"] = "_query";
    Action1["BULK"] = "_bulk";
    Action1["INDEX"] = "_index";
})(Action || (Action = {}));
const service = "data";
const add = (body)=>(hyper2)=>hyper2({
            service,
            method: Method.POST,
            body
        })
;
const get = (id)=>(hyper3)=>hyper3({
            service,
            method: Method.GET,
            resource: id
        })
;
const list = (options = {})=>(hyper4)=>hyper4({
            service,
            method: Method.GET,
            params: options
        })
;
const update = (id, doc)=>(hyper5)=>hyper5({
            service,
            method: Method.PUT,
            resource: id,
            body: doc
        })
;
const remove = (id)=>(hyper6)=>hyper6({
            service,
            method: Method.DELETE,
            resource: id
        })
;
const query = (selector, options)=>(hyper7)=>hyper7({
            service,
            method: Method.POST,
            action: Action.QUERY,
            body: {
                selector,
                ...options
            }
        })
;
const bulk = (docs)=>(hyper8)=>hyper8({
            service,
            method: Method.POST,
            action: Action.BULK,
            body: docs
        })
;
const index = (indexName, fields)=>(hyper9)=>hyper9({
            service,
            method: Method.POST,
            action: Action.INDEX,
            body: {
                fields,
                name: indexName,
                type: "JSON"
            }
        })
;
const create = ()=>(hyper10)=>hyper10({
            service,
            method: Method.PUT
        })
;
const destroy = (confirm = true)=>(hyper11)=>confirm ? hyper11({
            service,
            method: Method.DELETE
        }) : Promise.reject({
            ok: false,
            msg: "request not confirmed!"
        })
;
const service1 = "cache";
const includeTTL = (ttl)=>(o4)=>ttl ? {
            ...o4,
            params: {
                ttl
            }
        } : o4
;
const add1 = (key, value, ttl)=>(h1)=>h1({
            service: service1,
            method: Method.POST,
            body: {
                key,
                value,
                ttl
            }
        })
;
const get1 = (key)=>(h2)=>h2({
            service: service1,
            method: Method.GET,
            resource: key
        })
;
const remove1 = (key)=>(h3)=>h3({
            service: service1,
            method: Method.DELETE,
            resource: key
        })
;
const set = (key, value, ttl)=>(h4)=>h4([
            {
                service: service1,
                method: Method.PUT,
                resource: key,
                body: value
            }
        ].map(includeTTL(ttl))[0])
;
const query1 = (pattern = "*")=>(h5)=>h5({
            service: service1,
            method: Method.POST,
            action: Action.QUERY,
            params: {
                pattern
            }
        })
;
const create1 = ()=>(hyper12)=>hyper12({
            service: service1,
            method: Method.PUT
        })
;
const destroy1 = (confirm = true)=>(hyper13)=>confirm ? hyper13({
            service: service1,
            method: Method.DELETE
        }) : Promise.reject({
            ok: false,
            msg: "request not confirmed!"
        })
;
var F = function() {
    return false;
};
var T1 = function() {
    return true;
};
var __ = {
    "@@functional/placeholder": true
};
function _isPlaceholder(a10) {
    return a10 != null && typeof a10 === "object" && a10["@@functional/placeholder"] === true;
}
function _curry1(fn) {
    return function f11(a12) {
        if (arguments.length === 0 || _isPlaceholder(a12)) {
            return f11;
        } else {
            return fn.apply(this, arguments);
        }
    };
}
function _curry2(fn) {
    return function f2(a13, b8) {
        switch(arguments.length){
            case 0:
                return f2;
            case 1:
                return _isPlaceholder(a13) ? f2 : _curry1(function(_b) {
                    return fn(a13, _b);
                });
            default:
                return _isPlaceholder(a13) && _isPlaceholder(b8) ? f2 : _isPlaceholder(a13) ? _curry1(function(_a) {
                    return fn(_a, b8);
                }) : _isPlaceholder(b8) ? _curry1(function(_b) {
                    return fn(a13, _b);
                }) : fn(a13, b8);
        }
    };
}
var add2 = _curry2(function add2(a14, b9) {
    return Number(a14) + Number(b9);
});
function _concat(set1, set22) {
    set1 = set1 || [];
    set22 = set22 || [];
    var idx;
    var len1 = set1.length;
    var len2 = set22.length;
    var result = [];
    idx = 0;
    while(idx < len1){
        result[result.length] = set1[idx];
        idx += 1;
    }
    idx = 0;
    while(idx < len2){
        result[result.length] = set22[idx];
        idx += 1;
    }
    return result;
}
function _arity(n3, fn) {
    switch(n3){
        case 0:
            return function() {
                return fn.apply(this, arguments);
            };
        case 1:
            return function(a0) {
                return fn.apply(this, arguments);
            };
        case 2:
            return function(a0, a1) {
                return fn.apply(this, arguments);
            };
        case 3:
            return function(a0, a1, a2) {
                return fn.apply(this, arguments);
            };
        case 4:
            return function(a0, a1, a2, a3) {
                return fn.apply(this, arguments);
            };
        case 5:
            return function(a0, a1, a2, a3, a4) {
                return fn.apply(this, arguments);
            };
        case 6:
            return function(a0, a1, a2, a3, a4, a5) {
                return fn.apply(this, arguments);
            };
        case 7:
            return function(a0, a1, a2, a3, a4, a5, a6) {
                return fn.apply(this, arguments);
            };
        case 8:
            return function(a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.apply(this, arguments);
            };
        case 9:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.apply(this, arguments);
            };
        case 10:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.apply(this, arguments);
            };
        default:
            throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
}
function _curryN(length3, received, fn) {
    return function() {
        var combined = [];
        var argsIdx = 0;
        var left = length3;
        var combinedIdx = 0;
        while(combinedIdx < received.length || argsIdx < arguments.length){
            var result;
            if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
                result = received[combinedIdx];
            } else {
                result = arguments[argsIdx];
                argsIdx += 1;
            }
            combined[combinedIdx] = result;
            if (!_isPlaceholder(result)) {
                left -= 1;
            }
            combinedIdx += 1;
        }
        return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length3, combined, fn));
    };
}
var curryN = _curry2(function curryN2(length3, fn) {
    if (length3 === 1) {
        return _curry1(fn);
    }
    return _arity(length3, _curryN(length3, [], fn));
});
var addIndex = _curry1(function addIndex2(fn) {
    return curryN(fn.length, function() {
        var idx = 0;
        var origFn = arguments[0];
        var list9 = arguments[arguments.length - 1];
        var args = Array.prototype.slice.call(arguments, 0);
        args[0] = function() {
            var result = origFn.apply(this, _concat(arguments, [
                idx,
                list9
            ]));
            idx += 1;
            return result;
        };
        return fn.apply(this, args);
    });
});
function _curry3(fn) {
    return function f3(a15, b10, c4) {
        switch(arguments.length){
            case 0:
                return f3;
            case 1:
                return _isPlaceholder(a15) ? f3 : _curry2(function(_b, _c) {
                    return fn(a15, _b, _c);
                });
            case 2:
                return _isPlaceholder(a15) && _isPlaceholder(b10) ? f3 : _isPlaceholder(a15) ? _curry2(function(_a, _c) {
                    return fn(_a, b10, _c);
                }) : _isPlaceholder(b10) ? _curry2(function(_b, _c) {
                    return fn(a15, _b, _c);
                }) : _curry1(function(_c) {
                    return fn(a15, b10, _c);
                });
            default:
                return _isPlaceholder(a15) && _isPlaceholder(b10) && _isPlaceholder(c4) ? f3 : _isPlaceholder(a15) && _isPlaceholder(b10) ? _curry2(function(_a, _b) {
                    return fn(_a, _b, c4);
                }) : _isPlaceholder(a15) && _isPlaceholder(c4) ? _curry2(function(_a, _c) {
                    return fn(_a, b10, _c);
                }) : _isPlaceholder(b10) && _isPlaceholder(c4) ? _curry2(function(_b, _c) {
                    return fn(a15, _b, _c);
                }) : _isPlaceholder(a15) ? _curry1(function(_a) {
                    return fn(_a, b10, c4);
                }) : _isPlaceholder(b10) ? _curry1(function(_b) {
                    return fn(a15, _b, c4);
                }) : _isPlaceholder(c4) ? _curry1(function(_c) {
                    return fn(a15, b10, _c);
                }) : fn(a15, b10, c4);
        }
    };
}
var adjust = _curry3(function adjust2(idx, fn, list10) {
    if (idx >= list10.length || idx < -list10.length) {
        return list10;
    }
    var start = idx < 0 ? list10.length : 0;
    var _idx = start + idx;
    var _list = _concat(list10);
    _list[_idx] = fn(list10[_idx]);
    return _list;
});
var _isArray = Array.isArray || function _isArray2(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};
function _isTransformer(obj) {
    return obj != null && typeof obj["@@transducer/step"] === "function";
}
function _dispatchable(methodNames, xf, fn) {
    return function() {
        if (arguments.length === 0) {
            return fn();
        }
        var args = Array.prototype.slice.call(arguments, 0);
        var obj = args.pop();
        if (!_isArray(obj)) {
            var idx = 0;
            while(idx < methodNames.length){
                if (typeof obj[methodNames[idx]] === "function") {
                    return obj[methodNames[idx]].apply(obj, args);
                }
                idx += 1;
            }
            if (_isTransformer(obj)) {
                var transducer = xf.apply(null, args);
                return transducer(obj);
            }
        }
        return fn.apply(this, arguments);
    };
}
function _reduced(x7) {
    return x7 && x7["@@transducer/reduced"] ? x7 : {
        "@@transducer/value": x7,
        "@@transducer/reduced": true
    };
}
var _xfBase = {
    init: function() {
        return this.xf["@@transducer/init"]();
    },
    result: function(result) {
        return this.xf["@@transducer/result"](result);
    }
};
var XAll = function() {
    function XAll2(f2, xf) {
        this.xf = xf;
        this.f = f2;
        this.all = true;
    }
    XAll2.prototype["@@transducer/init"] = _xfBase.init;
    XAll2.prototype["@@transducer/result"] = function(result) {
        if (this.all) {
            result = this.xf["@@transducer/step"](result, true);
        }
        return this.xf["@@transducer/result"](result);
    };
    XAll2.prototype["@@transducer/step"] = function(result, input) {
        if (!this.f(input)) {
            this.all = false;
            result = _reduced(this.xf["@@transducer/step"](result, false));
        }
        return result;
    };
    return XAll2;
}();
var _xall = _curry2(function _xall2(f3, xf) {
    return new XAll(f3, xf);
});
var all = _curry2(_dispatchable([
    "all"
], _xall, function all2(fn, list11) {
    var idx = 0;
    while(idx < list11.length){
        if (!fn(list11[idx])) {
            return false;
        }
        idx += 1;
    }
    return true;
}));
var max = _curry2(function max2(a16, b11) {
    return b11 > a16 ? b11 : a16;
});
function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while(idx < len){
        result[idx] = fn(functor[idx]);
        idx += 1;
    }
    return result;
}
function _isString(x8) {
    return Object.prototype.toString.call(x8) === "[object String]";
}
var _isArrayLike = _curry1(function isArrayLike(x9) {
    if (_isArray(x9)) {
        return true;
    }
    if (!x9) {
        return false;
    }
    if (typeof x9 !== "object") {
        return false;
    }
    if (_isString(x9)) {
        return false;
    }
    if (x9.nodeType === 1) {
        return !!x9.length;
    }
    if (x9.length === 0) {
        return true;
    }
    if (x9.length > 0) {
        return x9.hasOwnProperty(0) && x9.hasOwnProperty(x9.length - 1);
    }
    return false;
});
var XWrap = function() {
    function XWrap2(fn) {
        this.f = fn;
    }
    XWrap2.prototype["@@transducer/init"] = function() {
        throw new Error("init not implemented on XWrap");
    };
    XWrap2.prototype["@@transducer/result"] = function(acc) {
        return acc;
    };
    XWrap2.prototype["@@transducer/step"] = function(acc, x10) {
        return this.f(acc, x10);
    };
    return XWrap2;
}();
function _xwrap(fn) {
    return new XWrap(fn);
}
var bind = _curry2(function bind2(fn, thisObj) {
    return _arity(fn.length, function() {
        return fn.apply(thisObj, arguments);
    });
});
function _arrayReduce(xf, acc, list12) {
    var idx = 0;
    var len = list12.length;
    while(idx < len){
        acc = xf["@@transducer/step"](acc, list12[idx]);
        if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
        }
        idx += 1;
    }
    return xf["@@transducer/result"](acc);
}
function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while(!step.done){
        acc = xf["@@transducer/step"](acc, step.value);
        if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
        }
        step = iter.next();
    }
    return xf["@@transducer/result"](acc);
}
function _methodReduce(xf, acc, obj, methodName) {
    return xf["@@transducer/result"](obj[methodName](bind(xf["@@transducer/step"], xf), acc));
}
var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
function _reduce(fn, acc, list13) {
    if (typeof fn === "function") {
        fn = _xwrap(fn);
    }
    if (_isArrayLike(list13)) {
        return _arrayReduce(fn, acc, list13);
    }
    if (typeof list13["fantasy-land/reduce"] === "function") {
        return _methodReduce(fn, acc, list13, "fantasy-land/reduce");
    }
    if (list13[symIterator] != null) {
        return _iterableReduce(fn, acc, list13[symIterator]());
    }
    if (typeof list13.next === "function") {
        return _iterableReduce(fn, acc, list13);
    }
    if (typeof list13.reduce === "function") {
        return _methodReduce(fn, acc, list13, "reduce");
    }
    throw new TypeError("reduce: list must be array or iterable");
}
var XMap = function() {
    function XMap2(f4, xf) {
        this.xf = xf;
        this.f = f4;
    }
    XMap2.prototype["@@transducer/init"] = _xfBase.init;
    XMap2.prototype["@@transducer/result"] = _xfBase.result;
    XMap2.prototype["@@transducer/step"] = function(result, input) {
        return this.xf["@@transducer/step"](result, this.f(input));
    };
    return XMap2;
}();
var _xmap = _curry2(function _xmap2(f5, xf) {
    return new XMap(f5, xf);
});
function _has(prop3, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop3);
}
var toString = Object.prototype.toString;
var _isArguments = function() {
    return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x11) {
        return toString.call(x11) === "[object Arguments]";
    } : function _isArguments2(x12) {
        return _has("callee", x12);
    };
}();
var hasEnumBug = !({
    toString: null
}).propertyIsEnumerable("toString");
var nonEnumerableProps = [
    "constructor",
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString"
];
var hasArgsEnumBug = function() {
    return arguments.propertyIsEnumerable("length");
}();
var contains = function contains2(list14, item) {
    var idx = 0;
    while(idx < list14.length){
        if (list14[idx] === item) {
            return true;
        }
        idx += 1;
    }
    return false;
};
var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? _curry1(function keys2(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
}) : _curry1(function keys3(obj) {
    if (Object(obj) !== obj) {
        return [];
    }
    var prop3, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
    for(prop3 in obj){
        if (_has(prop3, obj) && (!checkArgsLength || prop3 !== "length")) {
            ks[ks.length] = prop3;
        }
    }
    if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while(nIdx >= 0){
            prop3 = nonEnumerableProps[nIdx];
            if (_has(prop3, obj) && !contains(ks, prop3)) {
                ks[ks.length] = prop3;
            }
            nIdx -= 1;
        }
    }
    return ks;
});
var map = _curry2(_dispatchable([
    "fantasy-land/map",
    "map"
], _xmap, function map2(fn, functor) {
    switch(Object.prototype.toString.call(functor)){
        case "[object Function]":
            return curryN(functor.length, function() {
                return fn.call(this, functor.apply(this, arguments));
            });
        case "[object Object]":
            return _reduce(function(acc, key) {
                acc[key] = fn(functor[key]);
                return acc;
            }, {}, keys(functor));
        default:
            return _map(fn, functor);
    }
}));
var _isInteger = Number.isInteger || function _isInteger2(n4) {
    return n4 << 0 === n4;
};
var nth = _curry2(function nth2(offset, list15) {
    var idx = offset < 0 ? list15.length + offset : offset;
    return _isString(list15) ? list15.charAt(idx) : list15[idx];
});
var paths = _curry2(function paths2(pathsArray, obj) {
    return pathsArray.map(function(paths3) {
        var val = obj;
        var idx = 0;
        var p2;
        while(idx < paths3.length){
            if (val == null) {
                return;
            }
            p2 = paths3[idx];
            val = _isInteger(p2) ? nth(p2, val) : val[p2];
            idx += 1;
        }
        return val;
    });
});
var path2 = _curry2(function path2(pathAr, obj) {
    return paths([
        pathAr
    ], obj)[0];
});
var prop = _curry2(function prop2(p3, obj) {
    return path2([
        p3
    ], obj);
});
var pluck = _curry2(function pluck2(p4, list16) {
    return map(prop(p4), list16);
});
var reduce = _curry3(_reduce);
var allPass = _curry1(function allPass2(preds) {
    return curryN(reduce(max, 0, pluck("length", preds)), function() {
        var idx = 0;
        var len = preds.length;
        while(idx < len){
            if (!preds[idx].apply(this, arguments)) {
                return false;
            }
            idx += 1;
        }
        return true;
    });
});
var always = _curry1(function always2(val) {
    return function() {
        return val;
    };
});
var and = _curry2(function and2(a17, b12) {
    return a17 && b12;
});
var XAny = function() {
    function XAny2(f6, xf) {
        this.xf = xf;
        this.f = f6;
        this.any = false;
    }
    XAny2.prototype["@@transducer/init"] = _xfBase.init;
    XAny2.prototype["@@transducer/result"] = function(result) {
        if (!this.any) {
            result = this.xf["@@transducer/step"](result, false);
        }
        return this.xf["@@transducer/result"](result);
    };
    XAny2.prototype["@@transducer/step"] = function(result, input) {
        if (this.f(input)) {
            this.any = true;
            result = _reduced(this.xf["@@transducer/step"](result, true));
        }
        return result;
    };
    return XAny2;
}();
var _xany = _curry2(function _xany2(f7, xf) {
    return new XAny(f7, xf);
});
var any = _curry2(_dispatchable([
    "any"
], _xany, function any2(fn, list17) {
    var idx = 0;
    while(idx < list17.length){
        if (fn(list17[idx])) {
            return true;
        }
        idx += 1;
    }
    return false;
}));
var anyPass = _curry1(function anyPass2(preds) {
    return curryN(reduce(max, 0, pluck("length", preds)), function() {
        var idx = 0;
        var len = preds.length;
        while(idx < len){
            if (preds[idx].apply(this, arguments)) {
                return true;
            }
            idx += 1;
        }
        return false;
    });
});
var ap = _curry2(function ap2(applyF, applyX) {
    return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x13) {
        return applyF(x13)(applyX(x13));
    } : _reduce(function(acc, f8) {
        return _concat(acc, map(f8, applyX));
    }, [], applyF);
});
function _aperture(n5, list18) {
    var idx = 0;
    var limit = list18.length - (n5 - 1);
    var acc = new Array(limit >= 0 ? limit : 0);
    while(idx < limit){
        acc[idx] = Array.prototype.slice.call(list18, idx, idx + n5);
        idx += 1;
    }
    return acc;
}
var XAperture = function() {
    function XAperture2(n6, xf) {
        this.xf = xf;
        this.pos = 0;
        this.full = false;
        this.acc = new Array(n6);
    }
    XAperture2.prototype["@@transducer/init"] = _xfBase.init;
    XAperture2.prototype["@@transducer/result"] = function(result) {
        this.acc = null;
        return this.xf["@@transducer/result"](result);
    };
    XAperture2.prototype["@@transducer/step"] = function(result, input) {
        this.store(input);
        return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
    };
    XAperture2.prototype.store = function(input) {
        this.acc[this.pos] = input;
        this.pos += 1;
        if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
        }
    };
    XAperture2.prototype.getCopy = function() {
        return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
    };
    return XAperture2;
}();
var _xaperture = _curry2(function _xaperture2(n7, xf) {
    return new XAperture(n7, xf);
});
var aperture = _curry2(_dispatchable([], _xaperture, _aperture));
var append = _curry2(function append2(el, list19) {
    return _concat(list19, [
        el
    ]);
});
var apply = _curry2(function apply2(fn, args) {
    return fn.apply(this, args);
});
var values = _curry1(function values2(obj) {
    var props3 = keys(obj);
    var len = props3.length;
    var vals = [];
    var idx = 0;
    while(idx < len){
        vals[idx] = obj[props3[idx]];
        idx += 1;
    }
    return vals;
});
function mapValues(fn, obj) {
    return keys(obj).reduce(function(acc, key) {
        acc[key] = fn(obj[key]);
        return acc;
    }, {});
}
var applySpec = _curry1(function applySpec2(spec) {
    spec = mapValues(function(v6) {
        return typeof v6 == "function" ? v6 : applySpec2(v6);
    }, spec);
    return curryN(reduce(max, 0, pluck("length", values(spec))), function() {
        var args = arguments;
        return mapValues(function(f9) {
            return apply(f9, args);
        }, spec);
    });
});
var applyTo = _curry2(function applyTo2(x14, f10) {
    return f10(x14);
});
var ascend = _curry3(function ascend2(fn, a18, b13) {
    var aa = fn(a18);
    var bb = fn(b13);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
});
var assoc = _curry3(function assoc2(prop3, val, obj) {
    var result = {};
    for(var p5 in obj){
        result[p5] = obj[p5];
    }
    result[prop3] = val;
    return result;
});
var isNil = _curry1(function isNil2(x15) {
    return x15 == null;
});
var assocPath = _curry3(function assocPath2(path3, val, obj) {
    if (path3.length === 0) {
        return val;
    }
    var idx = path3[0];
    if (path3.length > 1) {
        var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path3[1]) ? [] : {};
        val = assocPath2(Array.prototype.slice.call(path3, 1), val, nextObj);
    }
    if (_isInteger(idx) && _isArray(obj)) {
        var arr = [].concat(obj);
        arr[idx] = val;
        return arr;
    } else {
        return assoc(idx, val, obj);
    }
});
var nAry = _curry2(function nAry2(n8, fn) {
    switch(n8){
        case 0:
            return function() {
                return fn.call(this);
            };
        case 1:
            return function(a0) {
                return fn.call(this, a0);
            };
        case 2:
            return function(a0, a19) {
                return fn.call(this, a0, a19);
            };
        case 3:
            return function(a0, a110, a2) {
                return fn.call(this, a0, a110, a2);
            };
        case 4:
            return function(a0, a111, a2, a3) {
                return fn.call(this, a0, a111, a2, a3);
            };
        case 5:
            return function(a0, a112, a2, a3, a4) {
                return fn.call(this, a0, a112, a2, a3, a4);
            };
        case 6:
            return function(a0, a113, a2, a3, a4, a5) {
                return fn.call(this, a0, a113, a2, a3, a4, a5);
            };
        case 7:
            return function(a0, a114, a2, a3, a4, a5, a6) {
                return fn.call(this, a0, a114, a2, a3, a4, a5, a6);
            };
        case 8:
            return function(a0, a115, a2, a3, a4, a5, a6, a7) {
                return fn.call(this, a0, a115, a2, a3, a4, a5, a6, a7);
            };
        case 9:
            return function(a0, a116, a2, a3, a4, a5, a6, a7, a8) {
                return fn.call(this, a0, a116, a2, a3, a4, a5, a6, a7, a8);
            };
        case 10:
            return function(a0, a117, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.call(this, a0, a117, a2, a3, a4, a5, a6, a7, a8, a9);
            };
        default:
            throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
    }
});
var binary = _curry1(function binary2(fn) {
    return nAry(2, fn);
});
function _isFunction(x16) {
    var type3 = Object.prototype.toString.call(x16);
    return type3 === "[object Function]" || type3 === "[object AsyncFunction]" || type3 === "[object GeneratorFunction]" || type3 === "[object AsyncGeneratorFunction]";
}
var liftN = _curry2(function liftN2(arity, fn) {
    var lifted = curryN(arity, fn);
    return curryN(arity, function() {
        return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
    });
});
var lift = _curry1(function lift2(fn) {
    return liftN(fn.length, fn);
});
var both = _curry2(function both2(f12, g2) {
    return _isFunction(f12) ? function _both() {
        return f12.apply(this, arguments) && g2.apply(this, arguments);
    } : lift(and)(f12, g2);
});
var curry = _curry1(function curry2(fn) {
    return curryN(fn.length, fn);
});
var call = curry(function call2(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
function _makeFlat(recursive) {
    return function flatt(list20) {
        var value, jlen, j14;
        var result = [];
        var idx = 0;
        var ilen = list20.length;
        while(idx < ilen){
            if (_isArrayLike(list20[idx])) {
                value = recursive ? flatt(list20[idx]) : list20[idx];
                j14 = 0;
                jlen = value.length;
                while(j14 < jlen){
                    result[result.length] = value[j14];
                    j14 += 1;
                }
            } else {
                result[result.length] = list20[idx];
            }
            idx += 1;
        }
        return result;
    };
}
function _forceReduced(x17) {
    return {
        "@@transducer/value": x17,
        "@@transducer/reduced": true
    };
}
var preservingReduced = function(xf) {
    return {
        "@@transducer/init": _xfBase.init,
        "@@transducer/result": function(result) {
            return xf["@@transducer/result"](result);
        },
        "@@transducer/step": function(result, input) {
            var ret = xf["@@transducer/step"](result, input);
            return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
        }
    };
};
var _flatCat = function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
        "@@transducer/init": _xfBase.init,
        "@@transducer/result": function(result) {
            return rxf["@@transducer/result"](result);
        },
        "@@transducer/step": function(result, input) {
            return !_isArrayLike(input) ? _reduce(rxf, result, [
                input
            ]) : _reduce(rxf, result, input);
        }
    };
};
var _xchain = _curry2(function _xchain2(f13, xf) {
    return map(f13, _flatCat(xf));
});
var chain = _curry2(_dispatchable([
    "fantasy-land/chain",
    "chain"
], _xchain, function chain2(fn, monad) {
    if (typeof monad === "function") {
        return function(x18) {
            return fn(monad(x18))(x18);
        };
    }
    return _makeFlat(false)(map(fn, monad));
}));
var clamp = _curry3(function clamp2(min3, max3, value) {
    if (min3 > max3) {
        throw new Error("min must not be greater than max in clamp(min, max, value)");
    }
    return value < min3 ? min3 : value > max3 ? max3 : value;
});
function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
}
var type = _curry1(function type2(val) {
    return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
function _clone(value, refFrom, refTo, deep) {
    var copy = function copy2(copiedValue) {
        var len = refFrom.length;
        var idx = 0;
        while(idx < len){
            if (value === refFrom[idx]) {
                return refTo[idx];
            }
            idx += 1;
        }
        refFrom[idx + 1] = value;
        refTo[idx + 1] = copiedValue;
        for(var key in value){
            copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
        }
        return copiedValue;
    };
    switch(type(value)){
        case "Object":
            return copy({});
        case "Array":
            return copy([]);
        case "Date":
            return new Date(value.valueOf());
        case "RegExp":
            return _cloneRegExp(value);
        default:
            return value;
    }
}
var clone = _curry1(function clone2(value) {
    return value != null && typeof value.clone === "function" ? value.clone() : _clone(value, [], [], true);
});
var comparator = _curry1(function comparator2(pred) {
    return function(a20, b14) {
        return pred(a20, b14) ? -1 : pred(b14, a20) ? 1 : 0;
    };
});
var not = _curry1(function not2(a21) {
    return !a21;
});
var complement = lift(not);
function _pipe(f14, g3) {
    return function() {
        return g3.call(this, f14.apply(this, arguments));
    };
}
function _checkForMethod(methodname, fn) {
    return function() {
        var length3 = arguments.length;
        if (length3 === 0) {
            return fn();
        }
        var obj = arguments[length3 - 1];
        return _isArray(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length3 - 1));
    };
}
var slice = _curry3(_checkForMethod("slice", function slice2(fromIndex, toIndex, list21) {
    return Array.prototype.slice.call(list21, fromIndex, toIndex);
}));
var tail = _curry1(_checkForMethod("tail", slice(1, Infinity)));
function pipe() {
    if (arguments.length === 0) {
        throw new Error("pipe requires at least one argument");
    }
    return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
}
var reverse = _curry1(function reverse2(list22) {
    return _isString(list22) ? list22.split("").reverse().join("") : Array.prototype.slice.call(list22, 0).reverse();
});
function compose() {
    if (arguments.length === 0) {
        throw new Error("compose requires at least one argument");
    }
    return pipe.apply(this, reverse(arguments));
}
function composeK() {
    if (arguments.length === 0) {
        throw new Error("composeK requires at least one argument");
    }
    var init2 = Array.prototype.slice.call(arguments);
    var last2 = init2.pop();
    return compose(compose.apply(this, map(chain, init2)), last2);
}
function _pipeP(f15, g4) {
    return function() {
        var ctx = this;
        return f15.apply(ctx, arguments).then(function(x19) {
            return g4.call(ctx, x19);
        });
    };
}
function pipeP() {
    if (arguments.length === 0) {
        throw new Error("pipeP requires at least one argument");
    }
    return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)));
}
function composeP() {
    if (arguments.length === 0) {
        throw new Error("composeP requires at least one argument");
    }
    return pipeP.apply(this, reverse(arguments));
}
var head = nth(0);
function _identity(x20) {
    return x20;
}
var identity = _curry1(_identity);
var pipeWith = _curry2(function pipeWith2(xf, list23) {
    if (list23.length <= 0) {
        return identity;
    }
    var headList = head(list23);
    var tailList = tail(list23);
    return _arity(headList.length, function() {
        return _reduce(function(result, f16) {
            return xf.call(this, f16, result);
        }, headList.apply(this, arguments), tailList);
    });
});
var composeWith = _curry2(function composeWith2(xf, list24) {
    return pipeWith.apply(this, [
        xf,
        reverse(list24)
    ]);
});
function _arrayFromIterator(iter) {
    var list25 = [];
    var next;
    while(!(next = iter.next()).done){
        list25.push(next.value);
    }
    return list25;
}
function _includesWith(pred, x21, list26) {
    var idx = 0;
    var len = list26.length;
    while(idx < len){
        if (pred(x21, list26[idx])) {
            return true;
        }
        idx += 1;
    }
    return false;
}
function _functionName(f17) {
    var match3 = String(f17).match(/^function (\w*)/);
    return match3 == null ? "" : match3[1];
}
function _objectIs(a22, b15) {
    if (a22 === b15) {
        return a22 !== 0 || 1 / a22 === 1 / b15;
    } else {
        return a22 !== a22 && b15 !== b15;
    }
}
var _objectIs$1 = typeof Object.is === "function" ? Object.is : _objectIs;
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a23 = _arrayFromIterator(aIterator);
    var b16 = _arrayFromIterator(bIterator);
    function eq(_a, _b) {
        return _equals(_a, _b, stackA.slice(), stackB.slice());
    }
    return !_includesWith(function(b2, aItem) {
        return !_includesWith(eq, aItem, b2);
    }, b16, a23);
}
function _equals(a24, b17, stackA, stackB) {
    if (_objectIs$1(a24, b17)) {
        return true;
    }
    var typeA = type(a24);
    if (typeA !== type(b17)) {
        return false;
    }
    if (a24 == null || b17 == null) {
        return false;
    }
    if (typeof a24["fantasy-land/equals"] === "function" || typeof b17["fantasy-land/equals"] === "function") {
        return typeof a24["fantasy-land/equals"] === "function" && a24["fantasy-land/equals"](b17) && typeof b17["fantasy-land/equals"] === "function" && b17["fantasy-land/equals"](a24);
    }
    if (typeof a24.equals === "function" || typeof b17.equals === "function") {
        return typeof a24.equals === "function" && a24.equals(b17) && typeof b17.equals === "function" && b17.equals(a24);
    }
    switch(typeA){
        case "Arguments":
        case "Array":
        case "Object":
            if (typeof a24.constructor === "function" && _functionName(a24.constructor) === "Promise") {
                return a24 === b17;
            }
            break;
        case "Boolean":
        case "Number":
        case "String":
            if (!(typeof a24 === typeof b17 && _objectIs$1(a24.valueOf(), b17.valueOf()))) {
                return false;
            }
            break;
        case "Date":
            if (!_objectIs$1(a24.valueOf(), b17.valueOf())) {
                return false;
            }
            break;
        case "Error":
            return a24.name === b17.name && a24.message === b17.message;
        case "RegExp":
            if (!(a24.source === b17.source && a24.global === b17.global && a24.ignoreCase === b17.ignoreCase && a24.multiline === b17.multiline && a24.sticky === b17.sticky && a24.unicode === b17.unicode)) {
                return false;
            }
            break;
    }
    var idx = stackA.length - 1;
    while(idx >= 0){
        if (stackA[idx] === a24) {
            return stackB[idx] === b17;
        }
        idx -= 1;
    }
    switch(typeA){
        case "Map":
            if (a24.size !== b17.size) {
                return false;
            }
            return _uniqContentEquals(a24.entries(), b17.entries(), stackA.concat([
                a24
            ]), stackB.concat([
                b17
            ]));
        case "Set":
            if (a24.size !== b17.size) {
                return false;
            }
            return _uniqContentEquals(a24.values(), b17.values(), stackA.concat([
                a24
            ]), stackB.concat([
                b17
            ]));
        case "Arguments":
        case "Array":
        case "Object":
        case "Boolean":
        case "Number":
        case "String":
        case "Date":
        case "Error":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
            break;
        default:
            return false;
    }
    var keysA = keys(a24);
    if (keysA.length !== keys(b17).length) {
        return false;
    }
    var extendedStackA = stackA.concat([
        a24
    ]);
    var extendedStackB = stackB.concat([
        b17
    ]);
    idx = keysA.length - 1;
    while(idx >= 0){
        var key = keysA[idx];
        if (!(_has(key, b17) && _equals(b17[key], a24[key], extendedStackA, extendedStackB))) {
            return false;
        }
        idx -= 1;
    }
    return true;
}
var equals = _curry2(function equals2(a25, b18) {
    return _equals(a25, b18, [], []);
});
function _indexOf(list27, a26, idx) {
    var inf, item;
    if (typeof list27.indexOf === "function") {
        switch(typeof a26){
            case "number":
                if (a26 === 0) {
                    inf = 1 / a26;
                    while(idx < list27.length){
                        item = list27[idx];
                        if (item === 0 && 1 / item === inf) {
                            return idx;
                        }
                        idx += 1;
                    }
                    return -1;
                } else if (a26 !== a26) {
                    while(idx < list27.length){
                        item = list27[idx];
                        if (typeof item === "number" && item !== item) {
                            return idx;
                        }
                        idx += 1;
                    }
                    return -1;
                }
                return list27.indexOf(a26, idx);
            case "string":
            case "boolean":
            case "function":
            case "undefined":
                return list27.indexOf(a26, idx);
            case "object":
                if (a26 === null) {
                    return list27.indexOf(a26, idx);
                }
        }
    }
    while(idx < list27.length){
        if (equals(list27[idx], a26)) {
            return idx;
        }
        idx += 1;
    }
    return -1;
}
function _includes(a27, list28) {
    return _indexOf(list28, a27, 0) >= 0;
}
function _quote(s4) {
    var escaped = s4.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + escaped.replace(/"/g, '\\"') + '"';
}
var pad = function pad2(n9) {
    return (n9 < 10 ? "0" : "") + n9;
};
var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d3) {
    return d3.toISOString();
} : function _toISOString3(d4) {
    return d4.getUTCFullYear() + "-" + pad(d4.getUTCMonth() + 1) + "-" + pad(d4.getUTCDate()) + "T" + pad(d4.getUTCHours()) + ":" + pad(d4.getUTCMinutes()) + ":" + pad(d4.getUTCSeconds()) + "." + (d4.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + "Z";
};
function _complement(f18) {
    return function() {
        return !f18.apply(this, arguments);
    };
}
function _filter(fn, list29) {
    var idx = 0;
    var len = list29.length;
    var result = [];
    while(idx < len){
        if (fn(list29[idx])) {
            result[result.length] = list29[idx];
        }
        idx += 1;
    }
    return result;
}
function _isObject(x22) {
    return Object.prototype.toString.call(x22) === "[object Object]";
}
var XFilter = function() {
    function XFilter2(f19, xf) {
        this.xf = xf;
        this.f = f19;
    }
    XFilter2.prototype["@@transducer/init"] = _xfBase.init;
    XFilter2.prototype["@@transducer/result"] = _xfBase.result;
    XFilter2.prototype["@@transducer/step"] = function(result, input) {
        return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
    };
    return XFilter2;
}();
var _xfilter = _curry2(function _xfilter2(f20, xf) {
    return new XFilter(f20, xf);
});
var filter = _curry2(_dispatchable([
    "filter"
], _xfilter, function(pred, filterable) {
    return _isObject(filterable) ? _reduce(function(acc, key) {
        if (pred(filterable[key])) {
            acc[key] = filterable[key];
        }
        return acc;
    }, {}, keys(filterable)) : _filter(pred, filterable);
}));
var reject = _curry2(function reject2(pred, filterable) {
    return filter(_complement(pred), filterable);
});
function _toString(x23, seen) {
    var recur = function recur2(y2) {
        var xs = seen.concat([
            x23
        ]);
        return _includes(y2, xs) ? "<Circular>" : _toString(y2, xs);
    };
    var mapPairs = function(obj, keys4) {
        return _map(function(k6) {
            return _quote(k6) + ": " + recur(obj[k6]);
        }, keys4.slice().sort());
    };
    switch(Object.prototype.toString.call(x23)){
        case "[object Arguments]":
            return "(function() { return arguments; }(" + _map(recur, x23).join(", ") + "))";
        case "[object Array]":
            return "[" + _map(recur, x23).concat(mapPairs(x23, reject(function(k7) {
                return /^\d+$/.test(k7);
            }, keys(x23)))).join(", ") + "]";
        case "[object Boolean]":
            return typeof x23 === "object" ? "new Boolean(" + recur(x23.valueOf()) + ")" : x23.toString();
        case "[object Date]":
            return "new Date(" + (isNaN(x23.valueOf()) ? recur(NaN) : _quote(_toISOString(x23))) + ")";
        case "[object Null]":
            return "null";
        case "[object Number]":
            return typeof x23 === "object" ? "new Number(" + recur(x23.valueOf()) + ")" : 1 / x23 === -Infinity ? "-0" : x23.toString(10);
        case "[object String]":
            return typeof x23 === "object" ? "new String(" + recur(x23.valueOf()) + ")" : _quote(x23);
        case "[object Undefined]":
            return "undefined";
        default:
            if (typeof x23.toString === "function") {
                var repr = x23.toString();
                if (repr !== "[object Object]") {
                    return repr;
                }
            }
            return "{" + mapPairs(x23, keys(x23)).join(", ") + "}";
    }
}
var toString$1 = _curry1(function toString2(val) {
    return _toString(val, []);
});
var concat = _curry2(function concat2(a28, b19) {
    if (_isArray(a28)) {
        if (_isArray(b19)) {
            return a28.concat(b19);
        }
        throw new TypeError(toString$1(b19) + " is not an array");
    }
    if (_isString(a28)) {
        if (_isString(b19)) {
            return a28 + b19;
        }
        throw new TypeError(toString$1(b19) + " is not a string");
    }
    if (a28 != null && _isFunction(a28["fantasy-land/concat"])) {
        return a28["fantasy-land/concat"](b19);
    }
    if (a28 != null && _isFunction(a28.concat)) {
        return a28.concat(b19);
    }
    throw new TypeError(toString$1(a28) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
var cond = _curry1(function cond2(pairs) {
    var arity = reduce(max, 0, map(function(pair3) {
        return pair3[0].length;
    }, pairs));
    return _arity(arity, function() {
        var idx = 0;
        while(idx < pairs.length){
            if (pairs[idx][0].apply(this, arguments)) {
                return pairs[idx][1].apply(this, arguments);
            }
            idx += 1;
        }
    });
});
var constructN = _curry2(function constructN2(n10, Fn) {
    if (n10 > 10) {
        throw new Error("Constructor with greater than ten arguments");
    }
    if (n10 === 0) {
        return function() {
            return new Fn();
        };
    }
    return curry(nAry(n10, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
        switch(arguments.length){
            case 1:
                return new Fn($0);
            case 2:
                return new Fn($0, $1);
            case 3:
                return new Fn($0, $1, $2);
            case 4:
                return new Fn($0, $1, $2, $3);
            case 5:
                return new Fn($0, $1, $2, $3, $4);
            case 6:
                return new Fn($0, $1, $2, $3, $4, $5);
            case 7:
                return new Fn($0, $1, $2, $3, $4, $5, $6);
            case 8:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
            case 9:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
            case 10:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
        }
    }));
});
var construct = _curry1(function construct2(Fn) {
    return constructN(Fn.length, Fn);
});
var contains$1 = _curry2(_includes);
var converge = _curry2(function converge2(after, fns) {
    return curryN(reduce(max, 0, pluck("length", fns)), function() {
        var args = arguments;
        var context = this;
        return after.apply(context, _map(function(fn) {
            return fn.apply(context, args);
        }, fns));
    });
});
var XReduceBy = function() {
    function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
        this.valueFn = valueFn;
        this.valueAcc = valueAcc;
        this.keyFn = keyFn;
        this.xf = xf;
        this.inputs = {};
    }
    XReduceBy2.prototype["@@transducer/init"] = _xfBase.init;
    XReduceBy2.prototype["@@transducer/result"] = function(result) {
        var key;
        for(key in this.inputs){
            if (_has(key, this.inputs)) {
                result = this.xf["@@transducer/step"](result, this.inputs[key]);
                if (result["@@transducer/reduced"]) {
                    result = result["@@transducer/value"];
                    break;
                }
            }
        }
        this.inputs = null;
        return this.xf["@@transducer/result"](result);
    };
    XReduceBy2.prototype["@@transducer/step"] = function(result, input) {
        var key = this.keyFn(input);
        this.inputs[key] = this.inputs[key] || [
            key,
            this.valueAcc
        ];
        this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
        return result;
    };
    return XReduceBy2;
}();
var _xreduceBy = _curryN(4, [], function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
var reduceBy = _curryN(4, [], _dispatchable([], _xreduceBy, function reduceBy2(valueFn, valueAcc, keyFn, list30) {
    return _reduce(function(acc, elt) {
        var key = keyFn(elt);
        acc[key] = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, [], [], false), elt);
        return acc;
    }, {}, list30);
}));
var countBy = reduceBy(function(acc, elem) {
    return acc + 1;
}, 0);
var dec = add2(-1);
var defaultTo = _curry2(function defaultTo2(d5, v7) {
    return v7 == null || v7 !== v7 ? d5 : v7;
});
var descend = _curry3(function descend2(fn, a29, b20) {
    var aa = fn(a29);
    var bb = fn(b20);
    return aa > bb ? -1 : aa < bb ? 1 : 0;
});
var _Set = function() {
    function _Set2() {
        this._nativeSet = typeof Set === "function" ? new Set() : null;
        this._items = {};
    }
    _Set2.prototype.add = function(item) {
        return !hasOrAdd(item, true, this);
    };
    _Set2.prototype.has = function(item) {
        return hasOrAdd(item, false, this);
    };
    return _Set2;
}();
function hasOrAdd(item, shouldAdd, set3) {
    var type3 = typeof item;
    var prevSize, newSize;
    switch(type3){
        case "string":
        case "number":
            if (item === 0 && 1 / item === -Infinity) {
                if (set3._items["-0"]) {
                    return true;
                } else {
                    if (shouldAdd) {
                        set3._items["-0"] = true;
                    }
                    return false;
                }
            }
            if (set3._nativeSet !== null) {
                if (shouldAdd) {
                    prevSize = set3._nativeSet.size;
                    set3._nativeSet.add(item);
                    newSize = set3._nativeSet.size;
                    return newSize === prevSize;
                } else {
                    return set3._nativeSet.has(item);
                }
            } else {
                if (!(type3 in set3._items)) {
                    if (shouldAdd) {
                        set3._items[type3] = {};
                        set3._items[type3][item] = true;
                    }
                    return false;
                } else if (item in set3._items[type3]) {
                    return true;
                } else {
                    if (shouldAdd) {
                        set3._items[type3][item] = true;
                    }
                    return false;
                }
            }
        case "boolean":
            if (type3 in set3._items) {
                var bIdx = item ? 1 : 0;
                if (set3._items[type3][bIdx]) {
                    return true;
                } else {
                    if (shouldAdd) {
                        set3._items[type3][bIdx] = true;
                    }
                    return false;
                }
            } else {
                if (shouldAdd) {
                    set3._items[type3] = item ? [
                        false,
                        true
                    ] : [
                        true,
                        false
                    ];
                }
                return false;
            }
        case "function":
            if (set3._nativeSet !== null) {
                if (shouldAdd) {
                    prevSize = set3._nativeSet.size;
                    set3._nativeSet.add(item);
                    newSize = set3._nativeSet.size;
                    return newSize === prevSize;
                } else {
                    return set3._nativeSet.has(item);
                }
            } else {
                if (!(type3 in set3._items)) {
                    if (shouldAdd) {
                        set3._items[type3] = [
                            item
                        ];
                    }
                    return false;
                }
                if (!_includes(item, set3._items[type3])) {
                    if (shouldAdd) {
                        set3._items[type3].push(item);
                    }
                    return false;
                }
                return true;
            }
        case "undefined":
            if (set3._items[type3]) {
                return true;
            } else {
                if (shouldAdd) {
                    set3._items[type3] = true;
                }
                return false;
            }
        case "object":
            if (item === null) {
                if (!set3._items["null"]) {
                    if (shouldAdd) {
                        set3._items["null"] = true;
                    }
                    return false;
                }
                return true;
            }
        default:
            type3 = Object.prototype.toString.call(item);
            if (!(type3 in set3._items)) {
                if (shouldAdd) {
                    set3._items[type3] = [
                        item
                    ];
                }
                return false;
            }
            if (!_includes(item, set3._items[type3])) {
                if (shouldAdd) {
                    set3._items[type3].push(item);
                }
                return false;
            }
            return true;
    }
}
var difference1 = _curry2(function difference2(first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    var secondLen = second.length;
    var toFilterOut = new _Set();
    for(var i44 = 0; i44 < secondLen; i44 += 1){
        toFilterOut.add(second[i44]);
    }
    while(idx < firstLen){
        if (toFilterOut.add(first[idx])) {
            out[out.length] = first[idx];
        }
        idx += 1;
    }
    return out;
});
var differenceWith = _curry3(function differenceWith2(pred, first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    while(idx < firstLen){
        if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
            out.push(first[idx]);
        }
        idx += 1;
    }
    return out;
});
var dissoc = _curry2(function dissoc2(prop3, obj) {
    var result = {};
    for(var p6 in obj){
        result[p6] = obj[p6];
    }
    delete result[prop3];
    return result;
});
var remove2 = _curry3(function remove2(start, count, list31) {
    var result = Array.prototype.slice.call(list31, 0);
    result.splice(start, count);
    return result;
});
var update1 = _curry3(function update2(idx, x24, list32) {
    return adjust(idx, always(x24), list32);
});
var dissocPath = _curry2(function dissocPath2(path3, obj) {
    switch(path3.length){
        case 0:
            return obj;
        case 1:
            return _isInteger(path3[0]) && _isArray(obj) ? remove2(path3[0], 1, obj) : dissoc(path3[0], obj);
        default:
            var head2 = path3[0];
            var tail2 = Array.prototype.slice.call(path3, 1);
            if (obj[head2] == null) {
                return obj;
            } else if (_isInteger(head2) && _isArray(obj)) {
                return update1(head2, dissocPath2(tail2, obj[head2]), obj);
            } else {
                return assoc(head2, dissocPath2(tail2, obj[head2]), obj);
            }
    }
});
var divide = _curry2(function divide2(a30, b21) {
    return a30 / b21;
});
var XDrop = function() {
    function XDrop2(n11, xf) {
        this.xf = xf;
        this.n = n11;
    }
    XDrop2.prototype["@@transducer/init"] = _xfBase.init;
    XDrop2.prototype["@@transducer/result"] = _xfBase.result;
    XDrop2.prototype["@@transducer/step"] = function(result, input) {
        if (this.n > 0) {
            this.n -= 1;
            return result;
        }
        return this.xf["@@transducer/step"](result, input);
    };
    return XDrop2;
}();
var _xdrop = _curry2(function _xdrop2(n12, xf) {
    return new XDrop(n12, xf);
});
var drop = _curry2(_dispatchable([
    "drop"
], _xdrop, function drop2(n13, xs) {
    return slice(Math.max(0, n13), Infinity, xs);
}));
var XTake = function() {
    function XTake2(n14, xf) {
        this.xf = xf;
        this.n = n14;
        this.i = 0;
    }
    XTake2.prototype["@@transducer/init"] = _xfBase.init;
    XTake2.prototype["@@transducer/result"] = _xfBase.result;
    XTake2.prototype["@@transducer/step"] = function(result, input) {
        this.i += 1;
        var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
        return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
    };
    return XTake2;
}();
var _xtake = _curry2(function _xtake2(n15, xf) {
    return new XTake(n15, xf);
});
var take = _curry2(_dispatchable([
    "take"
], _xtake, function take2(n16, xs) {
    return slice(0, n16 < 0 ? Infinity : n16, xs);
}));
function dropLast(n17, xs) {
    return take(n17 < xs.length ? xs.length - n17 : 0, xs);
}
var XDropLast = function() {
    function XDropLast2(n18, xf) {
        this.xf = xf;
        this.pos = 0;
        this.full = false;
        this.acc = new Array(n18);
    }
    XDropLast2.prototype["@@transducer/init"] = _xfBase.init;
    XDropLast2.prototype["@@transducer/result"] = function(result) {
        this.acc = null;
        return this.xf["@@transducer/result"](result);
    };
    XDropLast2.prototype["@@transducer/step"] = function(result, input) {
        if (this.full) {
            result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
        }
        this.store(input);
        return result;
    };
    XDropLast2.prototype.store = function(input) {
        this.acc[this.pos] = input;
        this.pos += 1;
        if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
        }
    };
    return XDropLast2;
}();
var _xdropLast = _curry2(function _xdropLast2(n19, xf) {
    return new XDropLast(n19, xf);
});
var dropLast$1 = _curry2(_dispatchable([], _xdropLast, dropLast));
function dropLastWhile(pred, xs) {
    var idx = xs.length - 1;
    while(idx >= 0 && pred(xs[idx])){
        idx -= 1;
    }
    return slice(0, idx + 1, xs);
}
var XDropLastWhile = function() {
    function XDropLastWhile2(fn, xf) {
        this.f = fn;
        this.retained = [];
        this.xf = xf;
    }
    XDropLastWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XDropLastWhile2.prototype["@@transducer/result"] = function(result) {
        this.retained = null;
        return this.xf["@@transducer/result"](result);
    };
    XDropLastWhile2.prototype["@@transducer/step"] = function(result, input) {
        return this.f(input) ? this.retain(result, input) : this.flush(result, input);
    };
    XDropLastWhile2.prototype.flush = function(result, input) {
        result = _reduce(this.xf["@@transducer/step"], result, this.retained);
        this.retained = [];
        return this.xf["@@transducer/step"](result, input);
    };
    XDropLastWhile2.prototype.retain = function(result, input) {
        this.retained.push(input);
        return result;
    };
    return XDropLastWhile2;
}();
var _xdropLastWhile = _curry2(function _xdropLastWhile2(fn, xf) {
    return new XDropLastWhile(fn, xf);
});
var dropLastWhile$1 = _curry2(_dispatchable([], _xdropLastWhile, dropLastWhile));
var XDropRepeatsWith = function() {
    function XDropRepeatsWith2(pred, xf) {
        this.xf = xf;
        this.pred = pred;
        this.lastValue = void 0;
        this.seenFirstValue = false;
    }
    XDropRepeatsWith2.prototype["@@transducer/init"] = _xfBase.init;
    XDropRepeatsWith2.prototype["@@transducer/result"] = _xfBase.result;
    XDropRepeatsWith2.prototype["@@transducer/step"] = function(result, input) {
        var sameAsLast = false;
        if (!this.seenFirstValue) {
            this.seenFirstValue = true;
        } else if (this.pred(this.lastValue, input)) {
            sameAsLast = true;
        }
        this.lastValue = input;
        return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
    };
    return XDropRepeatsWith2;
}();
var _xdropRepeatsWith = _curry2(function _xdropRepeatsWith2(pred, xf) {
    return new XDropRepeatsWith(pred, xf);
});
var last = nth(-1);
var dropRepeatsWith = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith2(pred, list33) {
    var result = [];
    var idx = 1;
    var len = list33.length;
    if (len !== 0) {
        result[0] = list33[0];
        while(idx < len){
            if (!pred(last(result), list33[idx])) {
                result[result.length] = list33[idx];
            }
            idx += 1;
        }
    }
    return result;
}));
var dropRepeats = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals)));
var XDropWhile = function() {
    function XDropWhile2(f21, xf) {
        this.xf = xf;
        this.f = f21;
    }
    XDropWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XDropWhile2.prototype["@@transducer/result"] = _xfBase.result;
    XDropWhile2.prototype["@@transducer/step"] = function(result, input) {
        if (this.f) {
            if (this.f(input)) {
                return result;
            }
            this.f = null;
        }
        return this.xf["@@transducer/step"](result, input);
    };
    return XDropWhile2;
}();
var _xdropWhile = _curry2(function _xdropWhile2(f22, xf) {
    return new XDropWhile(f22, xf);
});
var dropWhile = _curry2(_dispatchable([
    "dropWhile"
], _xdropWhile, function dropWhile2(pred, xs) {
    var idx = 0;
    var len = xs.length;
    while(idx < len && pred(xs[idx])){
        idx += 1;
    }
    return slice(idx, Infinity, xs);
}));
var or = _curry2(function or2(a31, b22) {
    return a31 || b22;
});
var either = _curry2(function either2(f23, g5) {
    return _isFunction(f23) ? function _either() {
        return f23.apply(this, arguments) || g5.apply(this, arguments);
    } : lift(or)(f23, g5);
});
var empty = _curry1(function empty2(x25) {
    return x25 != null && typeof x25["fantasy-land/empty"] === "function" ? x25["fantasy-land/empty"]() : x25 != null && x25.constructor != null && typeof x25.constructor["fantasy-land/empty"] === "function" ? x25.constructor["fantasy-land/empty"]() : x25 != null && typeof x25.empty === "function" ? x25.empty() : x25 != null && x25.constructor != null && typeof x25.constructor.empty === "function" ? x25.constructor.empty() : _isArray(x25) ? [] : _isString(x25) ? "" : _isObject(x25) ? {} : _isArguments(x25) ? (function() {
        return arguments;
    })() : void 0;
});
var takeLast = _curry2(function takeLast2(n20, xs) {
    return drop(n20 >= 0 ? xs.length - n20 : 0, xs);
});
var endsWith = _curry2(function(suffix, list34) {
    return equals(takeLast(suffix.length, list34), suffix);
});
var eqBy = _curry3(function eqBy2(f24, x26, y3) {
    return equals(f24(x26), f24(y3));
});
var eqProps = _curry3(function eqProps2(prop3, obj1, obj2) {
    return equals(obj1[prop3], obj2[prop3]);
});
var evolve = _curry2(function evolve2(transformations, object) {
    var result = object instanceof Array ? [] : {};
    var transformation, key, type3;
    for(key in object){
        transformation = transformations[key];
        type3 = typeof transformation;
        result[key] = type3 === "function" ? transformation(object[key]) : transformation && type3 === "object" ? evolve2(transformation, object[key]) : object[key];
    }
    return result;
});
var XFind = function() {
    function XFind2(f25, xf) {
        this.xf = xf;
        this.f = f25;
        this.found = false;
    }
    XFind2.prototype["@@transducer/init"] = _xfBase.init;
    XFind2.prototype["@@transducer/result"] = function(result) {
        if (!this.found) {
            result = this.xf["@@transducer/step"](result, void 0);
        }
        return this.xf["@@transducer/result"](result);
    };
    XFind2.prototype["@@transducer/step"] = function(result, input) {
        if (this.f(input)) {
            this.found = true;
            result = _reduced(this.xf["@@transducer/step"](result, input));
        }
        return result;
    };
    return XFind2;
}();
var _xfind = _curry2(function _xfind2(f26, xf) {
    return new XFind(f26, xf);
});
var find1 = _curry2(_dispatchable([
    "find"
], _xfind, function find2(fn, list35) {
    var idx = 0;
    var len = list35.length;
    while(idx < len){
        if (fn(list35[idx])) {
            return list35[idx];
        }
        idx += 1;
    }
}));
var XFindIndex = function() {
    function XFindIndex2(f27, xf) {
        this.xf = xf;
        this.f = f27;
        this.idx = -1;
        this.found = false;
    }
    XFindIndex2.prototype["@@transducer/init"] = _xfBase.init;
    XFindIndex2.prototype["@@transducer/result"] = function(result) {
        if (!this.found) {
            result = this.xf["@@transducer/step"](result, -1);
        }
        return this.xf["@@transducer/result"](result);
    };
    XFindIndex2.prototype["@@transducer/step"] = function(result, input) {
        this.idx += 1;
        if (this.f(input)) {
            this.found = true;
            result = _reduced(this.xf["@@transducer/step"](result, this.idx));
        }
        return result;
    };
    return XFindIndex2;
}();
var _xfindIndex = _curry2(function _xfindIndex2(f28, xf) {
    return new XFindIndex(f28, xf);
});
var findIndex = _curry2(_dispatchable([], _xfindIndex, function findIndex2(fn, list36) {
    var idx = 0;
    var len = list36.length;
    while(idx < len){
        if (fn(list36[idx])) {
            return idx;
        }
        idx += 1;
    }
    return -1;
}));
var XFindLast = function() {
    function XFindLast2(f29, xf) {
        this.xf = xf;
        this.f = f29;
    }
    XFindLast2.prototype["@@transducer/init"] = _xfBase.init;
    XFindLast2.prototype["@@transducer/result"] = function(result) {
        return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
    };
    XFindLast2.prototype["@@transducer/step"] = function(result, input) {
        if (this.f(input)) {
            this.last = input;
        }
        return result;
    };
    return XFindLast2;
}();
var _xfindLast = _curry2(function _xfindLast2(f30, xf) {
    return new XFindLast(f30, xf);
});
var findLast = _curry2(_dispatchable([], _xfindLast, function findLast2(fn, list37) {
    var idx = list37.length - 1;
    while(idx >= 0){
        if (fn(list37[idx])) {
            return list37[idx];
        }
        idx -= 1;
    }
}));
var XFindLastIndex = function() {
    function XFindLastIndex2(f31, xf) {
        this.xf = xf;
        this.f = f31;
        this.idx = -1;
        this.lastIdx = -1;
    }
    XFindLastIndex2.prototype["@@transducer/init"] = _xfBase.init;
    XFindLastIndex2.prototype["@@transducer/result"] = function(result) {
        return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
    };
    XFindLastIndex2.prototype["@@transducer/step"] = function(result, input) {
        this.idx += 1;
        if (this.f(input)) {
            this.lastIdx = this.idx;
        }
        return result;
    };
    return XFindLastIndex2;
}();
var _xfindLastIndex = _curry2(function _xfindLastIndex2(f32, xf) {
    return new XFindLastIndex(f32, xf);
});
var findLastIndex = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex2(fn, list38) {
    var idx = list38.length - 1;
    while(idx >= 0){
        if (fn(list38[idx])) {
            return idx;
        }
        idx -= 1;
    }
    return -1;
}));
var flatten = _curry1(_makeFlat(true));
var flip = _curry1(function flip2(fn) {
    return curryN(fn.length, function(a32, b23) {
        var args = Array.prototype.slice.call(arguments, 0);
        args[0] = b23;
        args[1] = a32;
        return fn.apply(this, args);
    });
});
var forEach = _curry2(_checkForMethod("forEach", function forEach2(fn, list39) {
    var len = list39.length;
    var idx = 0;
    while(idx < len){
        fn(list39[idx]);
        idx += 1;
    }
    return list39;
}));
var forEachObjIndexed = _curry2(function forEachObjIndexed2(fn, obj) {
    var keyList = keys(obj);
    var idx = 0;
    while(idx < keyList.length){
        var key = keyList[idx];
        fn(obj[key], key, obj);
        idx += 1;
    }
    return obj;
});
var fromPairs = _curry1(function fromPairs2(pairs) {
    var result = {};
    var idx = 0;
    while(idx < pairs.length){
        result[pairs[idx][0]] = pairs[idx][1];
        idx += 1;
    }
    return result;
});
var groupBy = _curry2(_checkForMethod("groupBy", reduceBy(function(acc, item) {
    if (acc == null) {
        acc = [];
    }
    acc.push(item);
    return acc;
}, null)));
var groupWith = _curry2(function(fn, list40) {
    var res = [];
    var idx = 0;
    var len = list40.length;
    while(idx < len){
        var nextidx = idx + 1;
        while(nextidx < len && fn(list40[nextidx - 1], list40[nextidx])){
            nextidx += 1;
        }
        res.push(list40.slice(idx, nextidx));
        idx = nextidx;
    }
    return res;
});
var gt = _curry2(function gt2(a33, b24) {
    return a33 > b24;
});
var gte = _curry2(function gte2(a34, b25) {
    return a34 >= b25;
});
var hasPath = _curry2(function hasPath2(_path, obj) {
    if (_path.length === 0 || isNil(obj)) {
        return false;
    }
    var val = obj;
    var idx = 0;
    while(idx < _path.length){
        if (!isNil(val) && _has(_path[idx], val)) {
            val = val[_path[idx]];
            idx += 1;
        } else {
            return false;
        }
    }
    return true;
});
var has = _curry2(function has2(prop3, obj) {
    return hasPath([
        prop3
    ], obj);
});
var hasIn = _curry2(function hasIn2(prop3, obj) {
    return prop3 in obj;
});
var identical = _curry2(_objectIs$1);
var ifElse = _curry3(function ifElse2(condition, onTrue, onFalse) {
    return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
        return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    });
});
var inc = add2(1);
var includes = _curry2(_includes);
var indexBy = reduceBy(function(acc, elem) {
    return elem;
}, null);
var indexOf = _curry2(function indexOf2(target, xs) {
    return typeof xs.indexOf === "function" && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
});
var init = slice(0, -1);
var innerJoin = _curry3(function innerJoin2(pred, xs, ys) {
    return _filter(function(x27) {
        return _includesWith(pred, x27, ys);
    }, xs);
});
var insert = _curry3(function insert2(idx, elt, list41) {
    idx = idx < list41.length && idx >= 0 ? idx : list41.length;
    var result = Array.prototype.slice.call(list41, 0);
    result.splice(idx, 0, elt);
    return result;
});
var insertAll = _curry3(function insertAll2(idx, elts, list42) {
    idx = idx < list42.length && idx >= 0 ? idx : list42.length;
    return [].concat(Array.prototype.slice.call(list42, 0, idx), elts, Array.prototype.slice.call(list42, idx));
});
var uniqBy = _curry2(function uniqBy2(fn, list43) {
    var set3 = new _Set();
    var result = [];
    var idx = 0;
    var appliedItem, item;
    while(idx < list43.length){
        item = list43[idx];
        appliedItem = fn(item);
        if (set3.add(appliedItem)) {
            result.push(item);
        }
        idx += 1;
    }
    return result;
});
var uniq1 = uniqBy(identity);
var intersection = _curry2(function intersection2(list1, list2) {
    var lookupList, filteredList;
    if (list1.length > list2.length) {
        lookupList = list1;
        filteredList = list2;
    } else {
        lookupList = list2;
        filteredList = list1;
    }
    return uniq1(_filter(flip(_includes)(lookupList), filteredList));
});
var intersperse = _curry2(_checkForMethod("intersperse", function intersperse2(separator, list44) {
    var out = [];
    var idx = 0;
    var length3 = list44.length;
    while(idx < length3){
        if (idx === length3 - 1) {
            out.push(list44[idx]);
        } else {
            out.push(list44[idx], separator);
        }
        idx += 1;
    }
    return out;
}));
function _objectAssign(target) {
    if (target == null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    var idx = 1;
    var length3 = arguments.length;
    while(idx < length3){
        var source = arguments[idx];
        if (source != null) {
            for(var nextKey in source){
                if (_has(nextKey, source)) {
                    output[nextKey] = source[nextKey];
                }
            }
        }
        idx += 1;
    }
    return output;
}
var _objectAssign$1 = typeof Object.assign === "function" ? Object.assign : _objectAssign;
var objOf = _curry2(function objOf2(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
});
var _stepCatArray = {
    "@@transducer/init": Array,
    "@@transducer/step": function(xs, x28) {
        xs.push(x28);
        return xs;
    },
    "@@transducer/result": _identity
};
var _stepCatString = {
    "@@transducer/init": String,
    "@@transducer/step": function(a35, b26) {
        return a35 + b26;
    },
    "@@transducer/result": _identity
};
var _stepCatObject = {
    "@@transducer/init": Object,
    "@@transducer/step": function(result, input) {
        return _objectAssign$1(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
    },
    "@@transducer/result": _identity
};
function _stepCat(obj) {
    if (_isTransformer(obj)) {
        return obj;
    }
    if (_isArrayLike(obj)) {
        return _stepCatArray;
    }
    if (typeof obj === "string") {
        return _stepCatString;
    }
    if (typeof obj === "object") {
        return _stepCatObject;
    }
    throw new Error("Cannot create transformer for " + obj);
}
var into = _curry3(function into2(acc, xf, list45) {
    return _isTransformer(acc) ? _reduce(xf(acc), acc["@@transducer/init"](), list45) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list45);
});
var invert = _curry1(function invert2(obj) {
    var props3 = keys(obj);
    var len = props3.length;
    var idx = 0;
    var out = {};
    while(idx < len){
        var key = props3[idx];
        var val = obj[key];
        var list46 = _has(val, out) ? out[val] : out[val] = [];
        list46[list46.length] = key;
        idx += 1;
    }
    return out;
});
var invertObj = _curry1(function invertObj2(obj) {
    var props3 = keys(obj);
    var len = props3.length;
    var idx = 0;
    var out = {};
    while(idx < len){
        var key = props3[idx];
        out[obj[key]] = key;
        idx += 1;
    }
    return out;
});
var invoker = _curry2(function invoker2(arity, method) {
    return curryN(arity + 1, function() {
        var target = arguments[arity];
        if (target != null && _isFunction(target[method])) {
            return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
        }
        throw new TypeError(toString$1(target) + ' does not have a method named "' + method + '"');
    });
});
var is = _curry2(function is2(Ctor, val) {
    return val != null && val.constructor === Ctor || val instanceof Ctor;
});
var isEmpty = _curry1(function isEmpty2(x29) {
    return x29 != null && equals(x29, empty(x29));
});
var join5 = invoker(1, "join");
var juxt = _curry1(function juxt2(fns) {
    return converge(function() {
        return Array.prototype.slice.call(arguments, 0);
    }, fns);
});
var keysIn = _curry1(function keysIn2(obj) {
    var prop3;
    var ks = [];
    for(prop3 in obj){
        ks[ks.length] = prop3;
    }
    return ks;
});
var lastIndexOf = _curry2(function lastIndexOf2(target, xs) {
    if (typeof xs.lastIndexOf === "function" && !_isArray(xs)) {
        return xs.lastIndexOf(target);
    } else {
        var idx = xs.length - 1;
        while(idx >= 0){
            if (equals(xs[idx], target)) {
                return idx;
            }
            idx -= 1;
        }
        return -1;
    }
});
function _isNumber(x30) {
    return Object.prototype.toString.call(x30) === "[object Number]";
}
var length = _curry1(function length2(list47) {
    return list47 != null && _isNumber(list47.length) ? list47.length : NaN;
});
var lens = _curry2(function lens2(getter, setter) {
    return function(toFunctorFn) {
        return function(target) {
            return map(function(focus) {
                return setter(focus, target);
            }, toFunctorFn(getter(target)));
        };
    };
});
var lensIndex = _curry1(function lensIndex2(n21) {
    return lens(nth(n21), update1(n21));
});
var lensPath = _curry1(function lensPath2(p7) {
    return lens(path2(p7), assocPath(p7));
});
var lensProp = _curry1(function lensProp2(k8) {
    return lens(prop(k8), assoc(k8));
});
var lt = _curry2(function lt2(a36, b27) {
    return a36 < b27;
});
var lte = _curry2(function lte2(a37, b28) {
    return a37 <= b28;
});
var mapAccum = _curry3(function mapAccum2(fn, acc, list48) {
    var idx = 0;
    var len = list48.length;
    var result = [];
    var tuple = [
        acc
    ];
    while(idx < len){
        tuple = fn(tuple[0], list48[idx]);
        result[idx] = tuple[1];
        idx += 1;
    }
    return [
        tuple[0],
        result
    ];
});
var mapAccumRight = _curry3(function mapAccumRight2(fn, acc, list49) {
    var idx = list49.length - 1;
    var result = [];
    var tuple = [
        acc
    ];
    while(idx >= 0){
        tuple = fn(tuple[0], list49[idx]);
        result[idx] = tuple[1];
        idx -= 1;
    }
    return [
        tuple[0],
        result
    ];
});
var mapObjIndexed = _curry2(function mapObjIndexed2(fn, obj) {
    return _reduce(function(acc, key) {
        acc[key] = fn(obj[key], key, obj);
        return acc;
    }, {}, keys(obj));
});
var match = _curry2(function match2(rx, str) {
    return str.match(rx) || [];
});
var mathMod = _curry2(function mathMod2(m2, p8) {
    if (!_isInteger(m2)) {
        return NaN;
    }
    if (!_isInteger(p8) || p8 < 1) {
        return NaN;
    }
    return (m2 % p8 + p8) % p8;
});
var maxBy = _curry3(function maxBy2(f33, a38, b29) {
    return f33(b29) > f33(a38) ? b29 : a38;
});
var sum = reduce(add2, 0);
var mean = _curry1(function mean2(list50) {
    return sum(list50) / list50.length;
});
var median = _curry1(function median2(list51) {
    var len = list51.length;
    if (len === 0) {
        return NaN;
    }
    var width = 2 - len % 2;
    var idx = (len - width) / 2;
    return mean(Array.prototype.slice.call(list51, 0).sort(function(a39, b30) {
        return a39 < b30 ? -1 : a39 > b30 ? 1 : 0;
    }).slice(idx, idx + width));
});
var memoizeWith = _curry2(function memoizeWith2(mFn, fn) {
    var cache = {};
    return _arity(fn.length, function() {
        var key = mFn.apply(this, arguments);
        if (!_has(key, cache)) {
            cache[key] = fn.apply(this, arguments);
        }
        return cache[key];
    });
});
var merge = _curry2(function merge2(l3, r) {
    return _objectAssign$1({}, l3, r);
});
var mergeAll = _curry1(function mergeAll2(list52) {
    return _objectAssign$1.apply(null, [
        {}
    ].concat(list52));
});
var mergeWithKey = _curry3(function mergeWithKey2(fn, l4, r) {
    var result = {};
    var k9;
    for(k9 in l4){
        if (_has(k9, l4)) {
            result[k9] = _has(k9, r) ? fn(k9, l4[k9], r[k9]) : l4[k9];
        }
    }
    for(k9 in r){
        if (_has(k9, r) && !_has(k9, result)) {
            result[k9] = r[k9];
        }
    }
    return result;
});
var mergeDeepWithKey = _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
    return mergeWithKey(function(k10, lVal, rVal) {
        if (_isObject(lVal) && _isObject(rVal)) {
            return mergeDeepWithKey2(fn, lVal, rVal);
        } else {
            return fn(k10, lVal, rVal);
        }
    }, lObj, rObj);
});
var mergeDeepLeft = _curry2(function mergeDeepLeft2(lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
        return lVal;
    }, lObj, rObj);
});
var mergeDeepRight = _curry2(function mergeDeepRight2(lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
        return rVal;
    }, lObj, rObj);
});
var mergeDeepWith = _curry3(function mergeDeepWith2(fn, lObj, rObj) {
    return mergeDeepWithKey(function(k, lVal, rVal) {
        return fn(lVal, rVal);
    }, lObj, rObj);
});
var mergeLeft = _curry2(function mergeLeft2(l5, r) {
    return _objectAssign$1({}, r, l5);
});
var mergeRight = _curry2(function mergeRight2(l6, r) {
    return _objectAssign$1({}, l6, r);
});
var mergeWith = _curry3(function mergeWith2(fn, l7, r) {
    return mergeWithKey(function(_, _l, _r) {
        return fn(_l, _r);
    }, l7, r);
});
var min = _curry2(function min2(a40, b31) {
    return b31 < a40 ? b31 : a40;
});
var minBy = _curry3(function minBy2(f34, a41, b32) {
    return f34(b32) < f34(a41) ? b32 : a41;
});
var modulo = _curry2(function modulo2(a42, b33) {
    return a42 % b33;
});
var move = _curry3(function(from, to, list53) {
    var length3 = list53.length;
    var result = list53.slice();
    var positiveFrom = from < 0 ? length3 + from : from;
    var positiveTo = to < 0 ? length3 + to : to;
    var item = result.splice(positiveFrom, 1);
    return positiveFrom < 0 || positiveFrom >= list53.length || positiveTo < 0 || positiveTo >= list53.length ? list53 : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list53.length));
});
var multiply = _curry2(function multiply2(a43, b34) {
    return a43 * b34;
});
var negate = _curry1(function negate2(n22) {
    return -n22;
});
var none = _curry2(function none2(fn, input) {
    return all(_complement(fn), input);
});
var nthArg = _curry1(function nthArg2(n23) {
    var arity = n23 < 0 ? 1 : n23 + 1;
    return curryN(arity, function() {
        return nth(n23, arguments);
    });
});
var o2 = _curry3(function o2(f35, g6, x31) {
    return f35(g6(x31));
});
function _of(x32) {
    return [
        x32
    ];
}
var of = _curry1(_of);
var omit = _curry2(function omit2(names, obj) {
    var result = {};
    var index5 = {};
    var idx = 0;
    var len = names.length;
    while(idx < len){
        index5[names[idx]] = 1;
        idx += 1;
    }
    for(var prop3 in obj){
        if (!index5.hasOwnProperty(prop3)) {
            result[prop3] = obj[prop3];
        }
    }
    return result;
});
var once = _curry1(function once2(fn) {
    var called = false;
    var result;
    return _arity(fn.length, function() {
        if (called) {
            return result;
        }
        called = true;
        result = fn.apply(this, arguments);
        return result;
    });
});
function _assertPromise(name, p9) {
    if (p9 == null || !_isFunction(p9.then)) {
        throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p9, []));
    }
}
var otherwise = _curry2(function otherwise2(f36, p10) {
    _assertPromise("otherwise", p10);
    return p10.then(null, f36);
});
var Identity = function(x33) {
    return {
        value: x33,
        map: function(f37) {
            return Identity(f37(x33));
        }
    };
};
var over = _curry3(function over2(lens3, f38, x34) {
    return lens3(function(y4) {
        return Identity(f38(y4));
    })(x34).value;
});
var pair = _curry2(function pair2(fst, snd) {
    return [
        fst,
        snd
    ];
});
function _createPartialApplicator(concat3) {
    return _curry2(function(fn, args) {
        return _arity(Math.max(0, fn.length - args.length), function() {
            return fn.apply(this, concat3(args, arguments));
        });
    });
}
var partial = _createPartialApplicator(_concat);
var partialRight = _createPartialApplicator(flip(_concat));
var partition = juxt([
    filter,
    reject
]);
var pathEq = _curry3(function pathEq2(_path, val, obj) {
    return equals(path2(_path, obj), val);
});
var pathOr = _curry3(function pathOr2(d6, p11, obj) {
    return defaultTo(d6, path2(p11, obj));
});
var pathSatisfies = _curry3(function pathSatisfies2(pred, propPath, obj) {
    return pred(path2(propPath, obj));
});
var pick = _curry2(function pick2(names, obj) {
    var result = {};
    var idx = 0;
    while(idx < names.length){
        if (names[idx] in obj) {
            result[names[idx]] = obj[names[idx]];
        }
        idx += 1;
    }
    return result;
});
var pickAll = _curry2(function pickAll2(names, obj) {
    var result = {};
    var idx = 0;
    var len = names.length;
    while(idx < len){
        var name = names[idx];
        result[name] = obj[name];
        idx += 1;
    }
    return result;
});
var pickBy = _curry2(function pickBy2(test3, obj) {
    var result = {};
    for(var prop3 in obj){
        if (test3(obj[prop3], prop3, obj)) {
            result[prop3] = obj[prop3];
        }
    }
    return result;
});
function pipeK() {
    if (arguments.length === 0) {
        throw new Error("pipeK requires at least one argument");
    }
    return composeK.apply(this, reverse(arguments));
}
var prepend = _curry2(function prepend2(el, list54) {
    return _concat([
        el
    ], list54);
});
var product = reduce(multiply, 1);
var useWith = _curry2(function useWith2(fn, transformers) {
    return curryN(transformers.length, function() {
        var args = [];
        var idx = 0;
        while(idx < transformers.length){
            args.push(transformers[idx].call(this, arguments[idx]));
            idx += 1;
        }
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
    });
});
var project = useWith(_map, [
    pickAll,
    identity
]);
var propEq = _curry3(function propEq2(name, val, obj) {
    return equals(val, obj[name]);
});
var propIs = _curry3(function propIs2(type3, name, obj) {
    return is(type3, obj[name]);
});
var propOr = _curry3(function propOr2(val, p12, obj) {
    return pathOr(val, [
        p12
    ], obj);
});
var propSatisfies = _curry3(function propSatisfies2(pred, name, obj) {
    return pred(obj[name]);
});
var props = _curry2(function props2(ps, obj) {
    return ps.map(function(p13) {
        return path2([
            p13
        ], obj);
    });
});
var range = _curry2(function range2(from, to) {
    if (!(_isNumber(from) && _isNumber(to))) {
        throw new TypeError("Both arguments to range must be numbers");
    }
    var result = [];
    var n24 = from;
    while(n24 < to){
        result.push(n24);
        n24 += 1;
    }
    return result;
});
var reduceRight = _curry3(function reduceRight2(fn, acc, list55) {
    var idx = list55.length - 1;
    while(idx >= 0){
        acc = fn(list55[idx], acc);
        idx -= 1;
    }
    return acc;
});
var reduceWhile = _curryN(4, [], function _reduceWhile(pred, fn, a44, list56) {
    return _reduce(function(acc, x35) {
        return pred(acc, x35) ? fn(acc, x35) : _reduced(acc);
    }, a44, list56);
});
var reduced = _curry1(_reduced);
var times = _curry2(function times2(fn, n25) {
    var len = Number(n25);
    var idx = 0;
    var list57;
    if (len < 0 || isNaN(len)) {
        throw new RangeError("n must be a non-negative number");
    }
    list57 = new Array(len);
    while(idx < len){
        list57[idx] = fn(idx);
        idx += 1;
    }
    return list57;
});
var repeat = _curry2(function repeat2(value, n26) {
    return times(always(value), n26);
});
var replace = _curry3(function replace2(regex, replacement, str) {
    return str.replace(regex, replacement);
});
var scan = _curry3(function scan2(fn, acc, list58) {
    var idx = 0;
    var len = list58.length;
    var result = [
        acc
    ];
    while(idx < len){
        acc = fn(acc, list58[idx]);
        result[idx + 1] = acc;
        idx += 1;
    }
    return result;
});
var sequence = _curry2(function sequence2(of2, traversable) {
    return typeof traversable.sequence === "function" ? traversable.sequence(of2) : reduceRight(function(x36, acc) {
        return ap(map(prepend, x36), acc);
    }, of2([]), traversable);
});
var set1 = _curry3(function set2(lens3, v8, x37) {
    return over(lens3, always(v8), x37);
});
var sort = _curry2(function sort2(comparator3, list59) {
    return Array.prototype.slice.call(list59, 0).sort(comparator3);
});
var sortBy = _curry2(function sortBy2(fn, list60) {
    return Array.prototype.slice.call(list60, 0).sort(function(a45, b35) {
        var aa = fn(a45);
        var bb = fn(b35);
        return aa < bb ? -1 : aa > bb ? 1 : 0;
    });
});
var sortWith = _curry2(function sortWith2(fns, list61) {
    return Array.prototype.slice.call(list61, 0).sort(function(a46, b36) {
        var result = 0;
        var i45 = 0;
        while(result === 0 && i45 < fns.length){
            result = fns[i45](a46, b36);
            i45 += 1;
        }
        return result;
    });
});
var split = invoker(1, "split");
var splitAt = _curry2(function splitAt2(index6, array) {
    return [
        slice(0, index6, array),
        slice(index6, length(array), array)
    ];
});
var splitEvery = _curry2(function splitEvery2(n27, list62) {
    if (n27 <= 0) {
        throw new Error("First argument to splitEvery must be a positive integer");
    }
    var result = [];
    var idx = 0;
    while(idx < list62.length){
        result.push(slice(idx, idx += n27, list62));
    }
    return result;
});
var splitWhen = _curry2(function splitWhen2(pred, list63) {
    var idx = 0;
    var len = list63.length;
    var prefix = [];
    while(idx < len && !pred(list63[idx])){
        prefix.push(list63[idx]);
        idx += 1;
    }
    return [
        prefix,
        Array.prototype.slice.call(list63, idx)
    ];
});
var startsWith = _curry2(function(prefix, list64) {
    return equals(take(prefix.length, list64), prefix);
});
var subtract = _curry2(function subtract2(a47, b37) {
    return Number(a47) - Number(b37);
});
var symmetricDifference = _curry2(function symmetricDifference2(list1, list2) {
    return concat(difference1(list1, list2), difference1(list2, list1));
});
var symmetricDifferenceWith = _curry3(function symmetricDifferenceWith2(pred, list1, list2) {
    return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
});
var takeLastWhile = _curry2(function takeLastWhile2(fn, xs) {
    var idx = xs.length - 1;
    while(idx >= 0 && fn(xs[idx])){
        idx -= 1;
    }
    return slice(idx + 1, Infinity, xs);
});
var XTakeWhile = function() {
    function XTakeWhile2(f39, xf) {
        this.xf = xf;
        this.f = f39;
    }
    XTakeWhile2.prototype["@@transducer/init"] = _xfBase.init;
    XTakeWhile2.prototype["@@transducer/result"] = _xfBase.result;
    XTakeWhile2.prototype["@@transducer/step"] = function(result, input) {
        return this.f(input) ? this.xf["@@transducer/step"](result, input) : _reduced(result);
    };
    return XTakeWhile2;
}();
var _xtakeWhile = _curry2(function _xtakeWhile2(f40, xf) {
    return new XTakeWhile(f40, xf);
});
var takeWhile = _curry2(_dispatchable([
    "takeWhile"
], _xtakeWhile, function takeWhile2(fn, xs) {
    var idx = 0;
    var len = xs.length;
    while(idx < len && fn(xs[idx])){
        idx += 1;
    }
    return slice(0, idx, xs);
}));
var XTap = function() {
    function XTap2(f41, xf) {
        this.xf = xf;
        this.f = f41;
    }
    XTap2.prototype["@@transducer/init"] = _xfBase.init;
    XTap2.prototype["@@transducer/result"] = _xfBase.result;
    XTap2.prototype["@@transducer/step"] = function(result, input) {
        this.f(input);
        return this.xf["@@transducer/step"](result, input);
    };
    return XTap2;
}();
var _xtap = _curry2(function _xtap2(f42, xf) {
    return new XTap(f42, xf);
});
var tap = _curry2(_dispatchable([], _xtap, function tap2(fn, x38) {
    fn(x38);
    return x38;
}));
function _isRegExp(x39) {
    return Object.prototype.toString.call(x39) === "[object RegExp]";
}
var test = _curry2(function test2(pattern, str) {
    if (!_isRegExp(pattern)) {
        throw new TypeError("\u2018test\u2019 requires a value of type RegExp as its first argument; received " + toString$1(pattern));
    }
    return _cloneRegExp(pattern).test(str);
});
var andThen = _curry2(function andThen2(f43, p14) {
    _assertPromise("andThen", p14);
    return p14.then(f43);
});
var toLower = invoker(0, "toLowerCase");
var toPairs = _curry1(function toPairs2(obj) {
    var pairs = [];
    for(var prop3 in obj){
        if (_has(prop3, obj)) {
            pairs[pairs.length] = [
                prop3,
                obj[prop3]
            ];
        }
    }
    return pairs;
});
var toPairsIn = _curry1(function toPairsIn2(obj) {
    var pairs = [];
    for(var prop3 in obj){
        pairs[pairs.length] = [
            prop3,
            obj[prop3]
        ];
    }
    return pairs;
});
var toUpper = invoker(0, "toUpperCase");
var transduce = curryN(4, function transduce2(xf, fn, acc, list65) {
    return _reduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list65);
});
var transpose = _curry1(function transpose2(outerlist) {
    var i46 = 0;
    var result = [];
    while(i46 < outerlist.length){
        var innerlist = outerlist[i46];
        var j15 = 0;
        while(j15 < innerlist.length){
            if (typeof result[j15] === "undefined") {
                result[j15] = [];
            }
            result[j15].push(innerlist[j15]);
            j15 += 1;
        }
        i46 += 1;
    }
    return result;
});
var traverse = _curry3(function traverse2(of2, f44, traversable) {
    return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](f44, of2) : sequence(of2, map(f44, traversable));
});
var ws = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
var zeroWidth = "\u200B";
var hasProtoTrim = typeof String.prototype.trim === "function";
var trim = !hasProtoTrim || ws.trim() || !zeroWidth.trim() ? _curry1(function trim2(str) {
    var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
    var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
    return str.replace(beginRx, "").replace(endRx, "");
}) : _curry1(function trim3(str) {
    return str.trim();
});
var tryCatch = _curry2(function _tryCatch(tryer, catcher) {
    return _arity(tryer.length, function() {
        try {
            return tryer.apply(this, arguments);
        } catch (e14) {
            return catcher.apply(this, _concat([
                e14
            ], arguments));
        }
    });
});
var unapply = _curry1(function unapply2(fn) {
    return function() {
        return fn(Array.prototype.slice.call(arguments, 0));
    };
});
var unary = _curry1(function unary2(fn) {
    return nAry(1, fn);
});
var uncurryN = _curry2(function uncurryN2(depth, fn) {
    return curryN(depth, function() {
        var currentDepth = 1;
        var value = fn;
        var idx = 0;
        var endIdx;
        while(currentDepth <= depth && typeof value === "function"){
            endIdx = currentDepth === depth ? arguments.length : idx + value.length;
            value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
            currentDepth += 1;
            idx = endIdx;
        }
        return value;
    });
});
var unfold = _curry2(function unfold2(fn, seed) {
    var pair3 = fn(seed);
    var result = [];
    while(pair3 && pair3.length){
        result[result.length] = pair3[0];
        pair3 = fn(pair3[1]);
    }
    return result;
});
var union = _curry2(compose(uniq1, _concat));
var uniqWith = _curry2(function uniqWith2(pred, list66) {
    var idx = 0;
    var len = list66.length;
    var result = [];
    var item;
    while(idx < len){
        item = list66[idx];
        if (!_includesWith(pred, item, result)) {
            result[result.length] = item;
        }
        idx += 1;
    }
    return result;
});
var unionWith = _curry3(function unionWith2(pred, list1, list2) {
    return uniqWith(pred, _concat(list1, list2));
});
var unless = _curry3(function unless2(pred, whenFalseFn, x40) {
    return pred(x40) ? x40 : whenFalseFn(x40);
});
var unnest = chain(_identity);
var until = _curry3(function until2(pred, fn, init2) {
    var val = init2;
    while(!pred(val)){
        val = fn(val);
    }
    return val;
});
var valuesIn = _curry1(function valuesIn2(obj) {
    var prop3;
    var vs = [];
    for(prop3 in obj){
        vs[vs.length] = obj[prop3];
    }
    return vs;
});
var Const = function(x41) {
    return {
        value: x41,
        "fantasy-land/map": function() {
            return this;
        }
    };
};
var view = _curry2(function view2(lens3, x42) {
    return lens3(Const)(x42).value;
});
var when = _curry3(function when2(pred, whenTrueFn, x43) {
    return pred(x43) ? whenTrueFn(x43) : x43;
});
var where = _curry2(function where2(spec, testObj) {
    for(var prop3 in spec){
        if (_has(prop3, spec) && !spec[prop3](testObj[prop3])) {
            return false;
        }
    }
    return true;
});
var whereEq = _curry2(function whereEq2(spec, testObj) {
    return where(map(equals, spec), testObj);
});
var without = _curry2(function(xs, list67) {
    return reject(flip(_includes)(xs), list67);
});
var xor = _curry2(function xor2(a48, b38) {
    return Boolean(!a48 ^ !b38);
});
var xprod = _curry2(function xprod2(a49, b39) {
    var idx = 0;
    var ilen = a49.length;
    var j16;
    var jlen = b39.length;
    var result = [];
    while(idx < ilen){
        j16 = 0;
        while(j16 < jlen){
            result[result.length] = [
                a49[idx],
                b39[j16]
            ];
            j16 += 1;
        }
        idx += 1;
    }
    return result;
});
var zip = _curry2(function zip2(a50, b40) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a50.length, b40.length);
    while(idx < len){
        rv[idx] = [
            a50[idx],
            b40[idx]
        ];
        idx += 1;
    }
    return rv;
});
var zipObj = _curry2(function zipObj2(keys4, values3) {
    var idx = 0;
    var len = Math.min(keys4.length, values3.length);
    var out = {};
    while(idx < len){
        out[keys4[idx]] = values3[idx];
        idx += 1;
    }
    return out;
});
var zipWith = _curry3(function zipWith2(fn, a51, b41) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a51.length, b41.length);
    while(idx < len){
        rv[idx] = fn(a51[idx], b41[idx]);
        idx += 1;
    }
    return rv;
});
var thunkify = _curry1(function thunkify2(fn) {
    return curryN(fn.length, function createThunk() {
        var fnArgs = arguments;
        return function invokeThunk() {
            return fn.apply(this, fnArgs);
        };
    });
});
const mod2 = function() {
    return {
        default: null,
        F,
        T: T1,
        __,
        add: add2,
        addIndex,
        adjust,
        all,
        allPass,
        always,
        and,
        andThen,
        any,
        anyPass,
        ap,
        aperture,
        append,
        apply,
        applySpec,
        applyTo,
        ascend,
        assoc,
        assocPath,
        binary,
        bind,
        both,
        call,
        chain,
        clamp,
        clone,
        comparator,
        complement,
        compose,
        composeK,
        composeP,
        composeWith,
        concat,
        cond,
        construct,
        constructN,
        contains: contains$1,
        converge,
        countBy,
        curry,
        curryN,
        dec,
        defaultTo,
        descend,
        difference: difference1,
        differenceWith,
        dissoc,
        dissocPath,
        divide,
        drop,
        dropLast: dropLast$1,
        dropLastWhile: dropLastWhile$1,
        dropRepeats,
        dropRepeatsWith,
        dropWhile,
        either,
        empty,
        endsWith,
        eqBy,
        eqProps,
        equals,
        evolve,
        filter,
        find: find1,
        findIndex,
        findLast,
        findLastIndex,
        flatten,
        flip,
        forEach,
        forEachObjIndexed,
        fromPairs,
        groupBy,
        groupWith,
        gt,
        gte,
        has,
        hasIn,
        hasPath,
        head,
        identical,
        identity,
        ifElse,
        inc,
        includes,
        indexBy,
        indexOf,
        init,
        innerJoin,
        insert,
        insertAll,
        intersection,
        intersperse,
        into,
        invert,
        invertObj,
        invoker,
        is,
        isEmpty,
        isNil,
        join: join5,
        juxt,
        keys,
        keysIn,
        last,
        lastIndexOf,
        length,
        lens,
        lensIndex,
        lensPath,
        lensProp,
        lift,
        liftN,
        lt,
        lte,
        map,
        mapAccum,
        mapAccumRight,
        mapObjIndexed,
        match,
        mathMod,
        max,
        maxBy,
        mean,
        median,
        memoizeWith,
        merge,
        mergeAll,
        mergeDeepLeft,
        mergeDeepRight,
        mergeDeepWith,
        mergeDeepWithKey,
        mergeLeft,
        mergeRight,
        mergeWith,
        mergeWithKey,
        min,
        minBy,
        modulo,
        move,
        multiply,
        nAry,
        negate,
        none,
        not,
        nth,
        nthArg,
        o: o2,
        objOf,
        of,
        omit,
        once,
        or,
        otherwise,
        over,
        pair,
        partial,
        partialRight,
        partition,
        path: path2,
        pathEq,
        pathOr,
        pathSatisfies,
        paths,
        pick,
        pickAll,
        pickBy,
        pipe,
        pipeK,
        pipeP,
        pipeWith,
        pluck,
        prepend,
        product,
        project,
        prop,
        propEq,
        propIs,
        propOr,
        propSatisfies,
        props,
        range,
        reduce,
        reduceBy,
        reduceRight,
        reduceWhile,
        reduced,
        reject,
        remove: remove2,
        repeat,
        replace,
        reverse,
        scan,
        sequence,
        set: set1,
        slice,
        sort,
        sortBy,
        sortWith,
        split,
        splitAt,
        splitEvery,
        splitWhen,
        startsWith,
        subtract,
        sum,
        symmetricDifference,
        symmetricDifferenceWith,
        tail,
        take,
        takeLast,
        takeLastWhile,
        takeWhile,
        tap,
        test,
        thunkify,
        times,
        toLower,
        toPairs,
        toPairsIn,
        toString: toString$1,
        toUpper,
        transduce,
        transpose,
        traverse,
        trim,
        tryCatch,
        type,
        unapply,
        unary,
        uncurryN,
        unfold,
        union,
        unionWith,
        uniq: uniq1,
        uniqBy,
        uniqWith,
        unless,
        unnest,
        until,
        update: update1,
        useWith,
        values,
        valuesIn,
        view,
        when,
        where,
        whereEq,
        without,
        xor,
        xprod,
        zip,
        zipObj,
        zipWith
    };
}();
const base64abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/"
];
function encode(data) {
    const uint8 = typeof data === "string" ? new TextEncoder().encode(data) : data instanceof Uint8Array ? data : new Uint8Array(data);
    let result = "", i47;
    const l8 = uint8.length;
    for(i47 = 2; i47 < l8; i47 += 3){
        result += base64abc[uint8[i47 - 2] >> 2];
        result += base64abc[(uint8[i47 - 2] & 3) << 4 | uint8[i47 - 1] >> 4];
        result += base64abc[(uint8[i47 - 1] & 15) << 2 | uint8[i47] >> 6];
        result += base64abc[uint8[i47] & 63];
    }
    if (i47 === l8 + 1) {
        result += base64abc[uint8[i47 - 2] >> 2];
        result += base64abc[(uint8[i47 - 2] & 3) << 4];
        result += "==";
    }
    if (i47 === l8) {
        result += base64abc[uint8[i47 - 2] >> 2];
        result += base64abc[(uint8[i47 - 2] & 3) << 4 | uint8[i47 - 1] >> 4];
        result += base64abc[(uint8[i47 - 1] & 15) << 2];
        result += "=";
    }
    return result;
}
function decode(b64) {
    const binString = atob(b64);
    const size = binString.length;
    const bytes = new Uint8Array(size);
    for(let i48 = 0; i48 < size; i48++){
        bytes[i48] = binString.charCodeAt(i48);
    }
    return bytes;
}
function addPaddingToBase64url(base64url) {
    if (base64url.length % 4 === 2) return base64url + "==";
    if (base64url.length % 4 === 3) return base64url + "=";
    if (base64url.length % 4 === 1) {
        throw new TypeError("Illegal base64url string!");
    }
    return base64url;
}
function convertBase64urlToBase64(b64url) {
    return addPaddingToBase64url(b64url).replace(/\-/g, "+").replace(/_/g, "/");
}
function convertBase64ToBase64url(b64) {
    return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function encode1(uint8) {
    return convertBase64ToBase64url(encode(uint8));
}
function decode1(b64url) {
    return decode(convertBase64urlToBase64(b64url));
}
const mod3 = {
    addPaddingToBase64url: addPaddingToBase64url,
    encode: encode1,
    decode: decode1
};
new TextEncoder().encode("0123456789abcdef");
function errInvalidByte(__byte) {
    return new Error("encoding/hex: invalid byte: " + new TextDecoder().decode(new Uint8Array([
        __byte
    ])));
}
function errLength() {
    return new Error("encoding/hex: odd length hex string");
}
function fromHexChar(__byte) {
    if (48 <= __byte && __byte <= 57) return __byte - 48;
    if (97 <= __byte && __byte <= 102) return __byte - 97 + 10;
    if (65 <= __byte && __byte <= 70) return __byte - 65 + 10;
    throw errInvalidByte(__byte);
}
function decode2(src) {
    const dst = new Uint8Array(decodedLen(src.length));
    for(let i49 = 0; i49 < dst.length; i49++){
        const a52 = fromHexChar(src[i49 * 2]);
        const b42 = fromHexChar(src[i49 * 2 + 1]);
        dst[i49] = a52 << 4 | b42;
    }
    if (src.length % 2 == 1) {
        fromHexChar(src[dst.length * 2]);
        throw errLength();
    }
    return dst;
}
function decodedLen(x44) {
    return x44 >>> 1;
}
function decodeString(s5) {
    return decode2(new TextEncoder().encode(s5));
}
const HEX_CHARS = "0123456789abcdef".split("");
const EXTRA = [
    -2147483648,
    8388608,
    32768,
    128
];
const SHIFT = [
    24,
    16,
    8,
    0
];
const K = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298, 
];
const blocks = [];
class Sha256 {
    #block;
    #blocks;
    #bytes;
    #finalized;
    #first;
    #h0;
    #h1;
    #h2;
    #h3;
    #h4;
    #h5;
    #h6;
    #h7;
    #hashed;
    #hBytes;
    #is224;
    #lastByteIndex = 0;
    #start;
    constructor(is224 = false, sharedMemory = false){
        this.init(is224, sharedMemory);
    }
    init(is224, sharedMemory) {
        if (sharedMemory) {
            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            this.#blocks = blocks;
        } else {
            this.#blocks = [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
        }
        if (is224) {
            this.#h0 = 3238371032;
            this.#h1 = 914150663;
            this.#h2 = 812702999;
            this.#h3 = 4144912697;
            this.#h4 = 4290775857;
            this.#h5 = 1750603025;
            this.#h6 = 1694076839;
            this.#h7 = 3204075428;
        } else {
            this.#h0 = 1779033703;
            this.#h1 = 3144134277;
            this.#h2 = 1013904242;
            this.#h3 = 2773480762;
            this.#h4 = 1359893119;
            this.#h5 = 2600822924;
            this.#h6 = 528734635;
            this.#h7 = 1541459225;
        }
        this.#block = this.#start = this.#bytes = this.#hBytes = 0;
        this.#finalized = this.#hashed = false;
        this.#first = true;
        this.#is224 = is224;
    }
    update(message) {
        if (this.#finalized) {
            return this;
        }
        let msg;
        if (message instanceof ArrayBuffer) {
            msg = new Uint8Array(message);
        } else {
            msg = message;
        }
        let index7 = 0;
        const length5 = msg.length;
        const blocks1 = this.#blocks;
        while(index7 < length5){
            let i50;
            if (this.#hashed) {
                this.#hashed = false;
                blocks1[0] = this.#block;
                blocks1[16] = blocks1[1] = blocks1[2] = blocks1[3] = blocks1[4] = blocks1[5] = blocks1[6] = blocks1[7] = blocks1[8] = blocks1[9] = blocks1[10] = blocks1[11] = blocks1[12] = blocks1[13] = blocks1[14] = blocks1[15] = 0;
            }
            if (typeof msg !== "string") {
                for(i50 = this.#start; index7 < length5 && i50 < 64; ++index7){
                    blocks1[i50 >> 2] |= msg[index7] << SHIFT[(i50++) & 3];
                }
            } else {
                for(i50 = this.#start; index7 < length5 && i50 < 64; ++index7){
                    let code28 = msg.charCodeAt(index7);
                    if (code28 < 128) {
                        blocks1[i50 >> 2] |= code28 << SHIFT[(i50++) & 3];
                    } else if (code28 < 2048) {
                        blocks1[i50 >> 2] |= (192 | code28 >> 6) << SHIFT[(i50++) & 3];
                        blocks1[i50 >> 2] |= (128 | code28 & 63) << SHIFT[(i50++) & 3];
                    } else if (code28 < 55296 || code28 >= 57344) {
                        blocks1[i50 >> 2] |= (224 | code28 >> 12) << SHIFT[(i50++) & 3];
                        blocks1[i50 >> 2] |= (128 | code28 >> 6 & 63) << SHIFT[(i50++) & 3];
                        blocks1[i50 >> 2] |= (128 | code28 & 63) << SHIFT[(i50++) & 3];
                    } else {
                        code28 = 65536 + ((code28 & 1023) << 10 | msg.charCodeAt(++index7) & 1023);
                        blocks1[i50 >> 2] |= (240 | code28 >> 18) << SHIFT[(i50++) & 3];
                        blocks1[i50 >> 2] |= (128 | code28 >> 12 & 63) << SHIFT[(i50++) & 3];
                        blocks1[i50 >> 2] |= (128 | code28 >> 6 & 63) << SHIFT[(i50++) & 3];
                        blocks1[i50 >> 2] |= (128 | code28 & 63) << SHIFT[(i50++) & 3];
                    }
                }
            }
            this.#lastByteIndex = i50;
            this.#bytes += i50 - this.#start;
            if (i50 >= 64) {
                this.#block = blocks1[16];
                this.#start = i50 - 64;
                this.hash();
                this.#hashed = true;
            } else {
                this.#start = i50;
            }
        }
        if (this.#bytes > 4294967295) {
            this.#hBytes += this.#bytes / 4294967296 << 0;
            this.#bytes = this.#bytes % 4294967296;
        }
        return this;
    }
    finalize() {
        if (this.#finalized) {
            return;
        }
        this.#finalized = true;
        const blocks2 = this.#blocks;
        const i51 = this.#lastByteIndex;
        blocks2[16] = this.#block;
        blocks2[i51 >> 2] |= EXTRA[i51 & 3];
        this.#block = blocks2[16];
        if (i51 >= 56) {
            if (!this.#hashed) {
                this.hash();
            }
            blocks2[0] = this.#block;
            blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        blocks2[14] = this.#hBytes << 3 | this.#bytes >>> 29;
        blocks2[15] = this.#bytes << 3;
        this.hash();
    }
    hash() {
        let a53 = this.#h0;
        let b43 = this.#h1;
        let c5 = this.#h2;
        let d7 = this.#h3;
        let e15 = this.#h4;
        let f45 = this.#h5;
        let g7 = this.#h6;
        let h6 = this.#h7;
        const blocks3 = this.#blocks;
        let s0;
        let s11;
        let maj;
        let t1;
        let t2;
        let ch;
        let ab;
        let da;
        let cd;
        let bc;
        for(let j17 = 16; j17 < 64; ++j17){
            t1 = blocks3[j17 - 15];
            s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
            t1 = blocks3[j17 - 2];
            s11 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
            blocks3[j17] = blocks3[j17 - 16] + s0 + blocks3[j17 - 7] + s11 << 0;
        }
        bc = b43 & c5;
        for(let j1 = 0; j1 < 64; j1 += 4){
            if (this.#first) {
                if (this.#is224) {
                    ab = 300032;
                    t1 = blocks3[0] - 1413257819;
                    h6 = t1 - 150054599 << 0;
                    d7 = t1 + 24177077 << 0;
                } else {
                    ab = 704751109;
                    t1 = blocks3[0] - 210244248;
                    h6 = t1 - 1521486534 << 0;
                    d7 = t1 + 143694565 << 0;
                }
                this.#first = false;
            } else {
                s0 = (a53 >>> 2 | a53 << 30) ^ (a53 >>> 13 | a53 << 19) ^ (a53 >>> 22 | a53 << 10);
                s11 = (e15 >>> 6 | e15 << 26) ^ (e15 >>> 11 | e15 << 21) ^ (e15 >>> 25 | e15 << 7);
                ab = a53 & b43;
                maj = ab ^ a53 & c5 ^ bc;
                ch = e15 & f45 ^ ~e15 & g7;
                t1 = h6 + s11 + ch + K[j1] + blocks3[j1];
                t2 = s0 + maj;
                h6 = d7 + t1 << 0;
                d7 = t1 + t2 << 0;
            }
            s0 = (d7 >>> 2 | d7 << 30) ^ (d7 >>> 13 | d7 << 19) ^ (d7 >>> 22 | d7 << 10);
            s11 = (h6 >>> 6 | h6 << 26) ^ (h6 >>> 11 | h6 << 21) ^ (h6 >>> 25 | h6 << 7);
            da = d7 & a53;
            maj = da ^ d7 & b43 ^ ab;
            ch = h6 & e15 ^ ~h6 & f45;
            t1 = g7 + s11 + ch + K[j1 + 1] + blocks3[j1 + 1];
            t2 = s0 + maj;
            g7 = c5 + t1 << 0;
            c5 = t1 + t2 << 0;
            s0 = (c5 >>> 2 | c5 << 30) ^ (c5 >>> 13 | c5 << 19) ^ (c5 >>> 22 | c5 << 10);
            s11 = (g7 >>> 6 | g7 << 26) ^ (g7 >>> 11 | g7 << 21) ^ (g7 >>> 25 | g7 << 7);
            cd = c5 & d7;
            maj = cd ^ c5 & a53 ^ da;
            ch = g7 & h6 ^ ~g7 & e15;
            t1 = f45 + s11 + ch + K[j1 + 2] + blocks3[j1 + 2];
            t2 = s0 + maj;
            f45 = b43 + t1 << 0;
            b43 = t1 + t2 << 0;
            s0 = (b43 >>> 2 | b43 << 30) ^ (b43 >>> 13 | b43 << 19) ^ (b43 >>> 22 | b43 << 10);
            s11 = (f45 >>> 6 | f45 << 26) ^ (f45 >>> 11 | f45 << 21) ^ (f45 >>> 25 | f45 << 7);
            bc = b43 & c5;
            maj = bc ^ b43 & d7 ^ cd;
            ch = f45 & g7 ^ ~f45 & h6;
            t1 = e15 + s11 + ch + K[j1 + 3] + blocks3[j1 + 3];
            t2 = s0 + maj;
            e15 = a53 + t1 << 0;
            a53 = t1 + t2 << 0;
        }
        this.#h0 = this.#h0 + a53 << 0;
        this.#h1 = this.#h1 + b43 << 0;
        this.#h2 = this.#h2 + c5 << 0;
        this.#h3 = this.#h3 + d7 << 0;
        this.#h4 = this.#h4 + e15 << 0;
        this.#h5 = this.#h5 + f45 << 0;
        this.#h6 = this.#h6 + g7 << 0;
        this.#h7 = this.#h7 + h6 << 0;
    }
    hex() {
        this.finalize();
        const h0 = this.#h0;
        const h1 = this.#h1;
        const h2 = this.#h2;
        const h3 = this.#h3;
        const h4 = this.#h4;
        const h5 = this.#h5;
        const h6 = this.#h6;
        const h7 = this.#h7;
        let hex = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
        if (!this.#is224) {
            hex += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15];
        }
        return hex;
    }
    toString() {
        return this.hex();
    }
    digest() {
        this.finalize();
        const h0 = this.#h0;
        const h1 = this.#h1;
        const h2 = this.#h2;
        const h3 = this.#h3;
        const h4 = this.#h4;
        const h5 = this.#h5;
        const h6 = this.#h6;
        const h7 = this.#h7;
        const arr = [
            h0 >> 24 & 255,
            h0 >> 16 & 255,
            h0 >> 8 & 255,
            h0 & 255,
            h1 >> 24 & 255,
            h1 >> 16 & 255,
            h1 >> 8 & 255,
            h1 & 255,
            h2 >> 24 & 255,
            h2 >> 16 & 255,
            h2 >> 8 & 255,
            h2 & 255,
            h3 >> 24 & 255,
            h3 >> 16 & 255,
            h3 >> 8 & 255,
            h3 & 255,
            h4 >> 24 & 255,
            h4 >> 16 & 255,
            h4 >> 8 & 255,
            h4 & 255,
            h5 >> 24 & 255,
            h5 >> 16 & 255,
            h5 >> 8 & 255,
            h5 & 255,
            h6 >> 24 & 255,
            h6 >> 16 & 255,
            h6 >> 8 & 255,
            h6 & 255, 
        ];
        if (!this.#is224) {
            arr.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, h7 & 255);
        }
        return arr;
    }
    array() {
        return this.digest();
    }
    arrayBuffer() {
        this.finalize();
        const buffer = new ArrayBuffer(this.#is224 ? 28 : 32);
        const dataView = new DataView(buffer);
        dataView.setUint32(0, this.#h0);
        dataView.setUint32(4, this.#h1);
        dataView.setUint32(8, this.#h2);
        dataView.setUint32(12, this.#h3);
        dataView.setUint32(16, this.#h4);
        dataView.setUint32(20, this.#h5);
        dataView.setUint32(24, this.#h6);
        if (!this.#is224) {
            dataView.setUint32(28, this.#h7);
        }
        return buffer;
    }
}
class HmacSha256 extends Sha256 {
    #inner;
    #is224;
    #oKeyPad;
    #sharedMemory;
    constructor(secretKey, is224 = false, sharedMemory = false){
        super(is224, sharedMemory);
        let key;
        if (typeof secretKey === "string") {
            const bytes = [];
            const length6 = secretKey.length;
            let index8 = 0;
            for(let i52 = 0; i52 < length6; ++i52){
                let code29 = secretKey.charCodeAt(i52);
                if (code29 < 128) {
                    bytes[index8++] = code29;
                } else if (code29 < 2048) {
                    bytes[index8++] = 192 | code29 >> 6;
                    bytes[index8++] = 128 | code29 & 63;
                } else if (code29 < 55296 || code29 >= 57344) {
                    bytes[index8++] = 224 | code29 >> 12;
                    bytes[index8++] = 128 | code29 >> 6 & 63;
                    bytes[index8++] = 128 | code29 & 63;
                } else {
                    code29 = 65536 + ((code29 & 1023) << 10 | secretKey.charCodeAt(++i52) & 1023);
                    bytes[index8++] = 240 | code29 >> 18;
                    bytes[index8++] = 128 | code29 >> 12 & 63;
                    bytes[index8++] = 128 | code29 >> 6 & 63;
                    bytes[index8++] = 128 | code29 & 63;
                }
            }
            key = bytes;
        } else {
            if (secretKey instanceof ArrayBuffer) {
                key = new Uint8Array(secretKey);
            } else {
                key = secretKey;
            }
        }
        if (key.length > 64) {
            key = new Sha256(is224, true).update(key).array();
        }
        const oKeyPad = [];
        const iKeyPad = [];
        for(let i53 = 0; i53 < 64; ++i53){
            const b44 = key[i53] || 0;
            oKeyPad[i53] = 92 ^ b44;
            iKeyPad[i53] = 54 ^ b44;
        }
        this.update(iKeyPad);
        this.#oKeyPad = oKeyPad;
        this.#inner = true;
        this.#is224 = is224;
        this.#sharedMemory = sharedMemory;
    }
    finalize() {
        super.finalize();
        if (this.#inner) {
            this.#inner = false;
            const innerHash = this.array();
            super.init(this.#is224, this.#sharedMemory);
            this.update(this.#oKeyPad);
            this.update(innerHash);
            super.finalize();
        }
    }
}
const HEX_CHARS1 = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
];
const EXTRA1 = [
    -2147483648,
    8388608,
    32768,
    128
];
const SHIFT1 = [
    24,
    16,
    8,
    0
];
const K1 = [
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
];
const blocks1 = [];
class Sha512 {
    #blocks;
    #block;
    #bits;
    #start;
    #bytes;
    #hBytes;
    #lastByteIndex = 0;
    #finalized;
    #hashed;
    #h0h;
    #h0l;
    #h1h;
    #h1l;
    #h2h;
    #h2l;
    #h3h;
    #h3l;
    #h4h;
    #h4l;
    #h5h;
    #h5l;
    #h6h;
    #h6l;
    #h7h;
    #h7l;
    constructor(bits = 512, sharedMemory = false){
        this.init(bits, sharedMemory);
    }
    init(bits, sharedMemory) {
        if (sharedMemory) {
            blocks1[0] = blocks1[1] = blocks1[2] = blocks1[3] = blocks1[4] = blocks1[5] = blocks1[6] = blocks1[7] = blocks1[8] = blocks1[9] = blocks1[10] = blocks1[11] = blocks1[12] = blocks1[13] = blocks1[14] = blocks1[15] = blocks1[16] = blocks1[17] = blocks1[18] = blocks1[19] = blocks1[20] = blocks1[21] = blocks1[22] = blocks1[23] = blocks1[24] = blocks1[25] = blocks1[26] = blocks1[27] = blocks1[28] = blocks1[29] = blocks1[30] = blocks1[31] = blocks1[32] = 0;
            this.#blocks = blocks1;
        } else {
            this.#blocks = [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
        }
        if (bits === 224) {
            this.#h0h = 2352822216;
            this.#h0l = 424955298;
            this.#h1h = 1944164710;
            this.#h1l = 2312950998;
            this.#h2h = 502970286;
            this.#h2l = 855612546;
            this.#h3h = 1738396948;
            this.#h3l = 1479516111;
            this.#h4h = 258812777;
            this.#h4l = 2077511080;
            this.#h5h = 2011393907;
            this.#h5l = 79989058;
            this.#h6h = 1067287976;
            this.#h6l = 1780299464;
            this.#h7h = 286451373;
            this.#h7l = 2446758561;
        } else if (bits === 256) {
            this.#h0h = 573645204;
            this.#h0l = 4230739756;
            this.#h1h = 2673172387;
            this.#h1l = 3360449730;
            this.#h2h = 596883563;
            this.#h2l = 1867755857;
            this.#h3h = 2520282905;
            this.#h3l = 1497426621;
            this.#h4h = 2519219938;
            this.#h4l = 2827943907;
            this.#h5h = 3193839141;
            this.#h5l = 1401305490;
            this.#h6h = 721525244;
            this.#h6l = 746961066;
            this.#h7h = 246885852;
            this.#h7l = 2177182882;
        } else if (bits === 384) {
            this.#h0h = 3418070365;
            this.#h0l = 3238371032;
            this.#h1h = 1654270250;
            this.#h1l = 914150663;
            this.#h2h = 2438529370;
            this.#h2l = 812702999;
            this.#h3h = 355462360;
            this.#h3l = 4144912697;
            this.#h4h = 1731405415;
            this.#h4l = 4290775857;
            this.#h5h = 2394180231;
            this.#h5l = 1750603025;
            this.#h6h = 3675008525;
            this.#h6l = 1694076839;
            this.#h7h = 1203062813;
            this.#h7l = 3204075428;
        } else {
            this.#h0h = 1779033703;
            this.#h0l = 4089235720;
            this.#h1h = 3144134277;
            this.#h1l = 2227873595;
            this.#h2h = 1013904242;
            this.#h2l = 4271175723;
            this.#h3h = 2773480762;
            this.#h3l = 1595750129;
            this.#h4h = 1359893119;
            this.#h4l = 2917565137;
            this.#h5h = 2600822924;
            this.#h5l = 725511199;
            this.#h6h = 528734635;
            this.#h6l = 4215389547;
            this.#h7h = 1541459225;
            this.#h7l = 327033209;
        }
        this.#bits = bits;
        this.#block = this.#start = this.#bytes = this.#hBytes = 0;
        this.#finalized = this.#hashed = false;
    }
    update(message) {
        if (this.#finalized) {
            return this;
        }
        let msg;
        if (message instanceof ArrayBuffer) {
            msg = new Uint8Array(message);
        } else {
            msg = message;
        }
        const length7 = msg.length;
        const blocks11 = this.#blocks;
        let index9 = 0;
        while(index9 < length7){
            let i54;
            if (this.#hashed) {
                this.#hashed = false;
                blocks11[0] = this.#block;
                blocks11[1] = blocks11[2] = blocks11[3] = blocks11[4] = blocks11[5] = blocks11[6] = blocks11[7] = blocks11[8] = blocks11[9] = blocks11[10] = blocks11[11] = blocks11[12] = blocks11[13] = blocks11[14] = blocks11[15] = blocks11[16] = blocks11[17] = blocks11[18] = blocks11[19] = blocks11[20] = blocks11[21] = blocks11[22] = blocks11[23] = blocks11[24] = blocks11[25] = blocks11[26] = blocks11[27] = blocks11[28] = blocks11[29] = blocks11[30] = blocks11[31] = blocks11[32] = 0;
            }
            if (typeof msg !== "string") {
                for(i54 = this.#start; index9 < length7 && i54 < 128; ++index9){
                    blocks11[i54 >> 2] |= msg[index9] << SHIFT1[(i54++) & 3];
                }
            } else {
                for(i54 = this.#start; index9 < length7 && i54 < 128; ++index9){
                    let code30 = msg.charCodeAt(index9);
                    if (code30 < 128) {
                        blocks11[i54 >> 2] |= code30 << SHIFT1[(i54++) & 3];
                    } else if (code30 < 2048) {
                        blocks11[i54 >> 2] |= (192 | code30 >> 6) << SHIFT1[(i54++) & 3];
                        blocks11[i54 >> 2] |= (128 | code30 & 63) << SHIFT1[(i54++) & 3];
                    } else if (code30 < 55296 || code30 >= 57344) {
                        blocks11[i54 >> 2] |= (224 | code30 >> 12) << SHIFT1[(i54++) & 3];
                        blocks11[i54 >> 2] |= (128 | code30 >> 6 & 63) << SHIFT1[(i54++) & 3];
                        blocks11[i54 >> 2] |= (128 | code30 & 63) << SHIFT1[(i54++) & 3];
                    } else {
                        code30 = 65536 + ((code30 & 1023) << 10 | msg.charCodeAt(++index9) & 1023);
                        blocks11[i54 >> 2] |= (240 | code30 >> 18) << SHIFT1[(i54++) & 3];
                        blocks11[i54 >> 2] |= (128 | code30 >> 12 & 63) << SHIFT1[(i54++) & 3];
                        blocks11[i54 >> 2] |= (128 | code30 >> 6 & 63) << SHIFT1[(i54++) & 3];
                        blocks11[i54 >> 2] |= (128 | code30 & 63) << SHIFT1[(i54++) & 3];
                    }
                }
            }
            this.#lastByteIndex = i54;
            this.#bytes += i54 - this.#start;
            if (i54 >= 128) {
                this.#block = blocks11[32];
                this.#start = i54 - 128;
                this.hash();
                this.#hashed = true;
            } else {
                this.#start = i54;
            }
        }
        if (this.#bytes > 4294967295) {
            this.#hBytes += this.#bytes / 4294967296 << 0;
            this.#bytes = this.#bytes % 4294967296;
        }
        return this;
    }
    finalize() {
        if (this.#finalized) {
            return;
        }
        this.#finalized = true;
        const blocks2 = this.#blocks;
        const i55 = this.#lastByteIndex;
        blocks2[32] = this.#block;
        blocks2[i55 >> 2] |= EXTRA1[i55 & 3];
        this.#block = blocks2[32];
        if (i55 >= 112) {
            if (!this.#hashed) {
                this.hash();
            }
            blocks2[0] = this.#block;
            blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = blocks2[16] = blocks2[17] = blocks2[18] = blocks2[19] = blocks2[20] = blocks2[21] = blocks2[22] = blocks2[23] = blocks2[24] = blocks2[25] = blocks2[26] = blocks2[27] = blocks2[28] = blocks2[29] = blocks2[30] = blocks2[31] = blocks2[32] = 0;
        }
        blocks2[30] = this.#hBytes << 3 | this.#bytes >>> 29;
        blocks2[31] = this.#bytes << 3;
        this.hash();
    }
    hash() {
        const h0h = this.#h0h, h0l = this.#h0l, h1h = this.#h1h, h1l = this.#h1l, h2h = this.#h2h, h2l = this.#h2l, h3h = this.#h3h, h3l = this.#h3l, h4h = this.#h4h, h4l = this.#h4l, h5h = this.#h5h, h5l = this.#h5l, h6h = this.#h6h, h6l = this.#h6l, h7h = this.#h7h, h7l = this.#h7l;
        let s0h, s0l, s1h, s1l, c11, c2, c3, c4, abh, abl, dah, dal, cdh, cdl, bch, bcl, majh, majl, t1h, t1l, t2h, t2l, chh, chl;
        const blocks3 = this.#blocks;
        for(let j18 = 32; j18 < 160; j18 += 2){
            t1h = blocks3[j18 - 30];
            t1l = blocks3[j18 - 29];
            s0h = (t1h >>> 1 | t1l << 31) ^ (t1h >>> 8 | t1l << 24) ^ t1h >>> 7;
            s0l = (t1l >>> 1 | t1h << 31) ^ (t1l >>> 8 | t1h << 24) ^ (t1l >>> 7 | t1h << 25);
            t1h = blocks3[j18 - 4];
            t1l = blocks3[j18 - 3];
            s1h = (t1h >>> 19 | t1l << 13) ^ (t1l >>> 29 | t1h << 3) ^ t1h >>> 6;
            s1l = (t1l >>> 19 | t1h << 13) ^ (t1h >>> 29 | t1l << 3) ^ (t1l >>> 6 | t1h << 26);
            t1h = blocks3[j18 - 32];
            t1l = blocks3[j18 - 31];
            t2h = blocks3[j18 - 14];
            t2l = blocks3[j18 - 13];
            c11 = (t2l & 65535) + (t1l & 65535) + (s0l & 65535) + (s1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (s0l >>> 16) + (s1l >>> 16) + (c11 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (s0h & 65535) + (s1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (s0h >>> 16) + (s1h >>> 16) + (c3 >>> 16);
            blocks3[j18] = c4 << 16 | c3 & 65535;
            blocks3[j18 + 1] = c2 << 16 | c11 & 65535;
        }
        let ah = h0h, al = h0l, bh = h1h, bl = h1l, ch = h2h, cl = h2l, dh = h3h, dl = h3l, eh = h4h, el = h4l, fh = h5h, fl = h5l, gh = h6h, gl = h6l, hh = h7h, hl = h7l;
        bch = bh & ch;
        bcl = bl & cl;
        for(let j1 = 0; j1 < 160; j1 += 8){
            s0h = (ah >>> 28 | al << 4) ^ (al >>> 2 | ah << 30) ^ (al >>> 7 | ah << 25);
            s0l = (al >>> 28 | ah << 4) ^ (ah >>> 2 | al << 30) ^ (ah >>> 7 | al << 25);
            s1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (el >>> 9 | eh << 23);
            s1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (eh >>> 9 | el << 23);
            abh = ah & bh;
            abl = al & bl;
            majh = abh ^ ah & ch ^ bch;
            majl = abl ^ al & cl ^ bcl;
            chh = eh & fh ^ ~eh & gh;
            chl = el & fl ^ ~el & gl;
            t1h = blocks3[j1];
            t1l = blocks3[j1 + 1];
            t2h = K1[j1];
            t2l = K1[j1 + 1];
            c11 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (hl & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (hl >>> 16) + (c11 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (hh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (hh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c11 & 65535;
            c11 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c11 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c11 & 65535;
            c11 = (dl & 65535) + (t1l & 65535);
            c2 = (dl >>> 16) + (t1l >>> 16) + (c11 >>> 16);
            c3 = (dh & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (dh >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            hh = c4 << 16 | c3 & 65535;
            hl = c2 << 16 | c11 & 65535;
            c11 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c11 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            dh = c4 << 16 | c3 & 65535;
            dl = c2 << 16 | c11 & 65535;
            s0h = (dh >>> 28 | dl << 4) ^ (dl >>> 2 | dh << 30) ^ (dl >>> 7 | dh << 25);
            s0l = (dl >>> 28 | dh << 4) ^ (dh >>> 2 | dl << 30) ^ (dh >>> 7 | dl << 25);
            s1h = (hh >>> 14 | hl << 18) ^ (hh >>> 18 | hl << 14) ^ (hl >>> 9 | hh << 23);
            s1l = (hl >>> 14 | hh << 18) ^ (hl >>> 18 | hh << 14) ^ (hh >>> 9 | hl << 23);
            dah = dh & ah;
            dal = dl & al;
            majh = dah ^ dh & bh ^ abh;
            majl = dal ^ dl & bl ^ abl;
            chh = hh & eh ^ ~hh & fh;
            chl = hl & el ^ ~hl & fl;
            t1h = blocks3[j1 + 2];
            t1l = blocks3[j1 + 3];
            t2h = K1[j1 + 2];
            t2l = K1[j1 + 3];
            c11 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (gl & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (gl >>> 16) + (c11 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (gh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (gh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c11 & 65535;
            c11 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c11 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c11 & 65535;
            c11 = (cl & 65535) + (t1l & 65535);
            c2 = (cl >>> 16) + (t1l >>> 16) + (c11 >>> 16);
            c3 = (ch & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (ch >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            gh = c4 << 16 | c3 & 65535;
            gl = c2 << 16 | c11 & 65535;
            c11 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c11 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            ch = c4 << 16 | c3 & 65535;
            cl = c2 << 16 | c11 & 65535;
            s0h = (ch >>> 28 | cl << 4) ^ (cl >>> 2 | ch << 30) ^ (cl >>> 7 | ch << 25);
            s0l = (cl >>> 28 | ch << 4) ^ (ch >>> 2 | cl << 30) ^ (ch >>> 7 | cl << 25);
            s1h = (gh >>> 14 | gl << 18) ^ (gh >>> 18 | gl << 14) ^ (gl >>> 9 | gh << 23);
            s1l = (gl >>> 14 | gh << 18) ^ (gl >>> 18 | gh << 14) ^ (gh >>> 9 | gl << 23);
            cdh = ch & dh;
            cdl = cl & dl;
            majh = cdh ^ ch & ah ^ dah;
            majl = cdl ^ cl & al ^ dal;
            chh = gh & hh ^ ~gh & eh;
            chl = gl & hl ^ ~gl & el;
            t1h = blocks3[j1 + 4];
            t1l = blocks3[j1 + 5];
            t2h = K1[j1 + 4];
            t2l = K1[j1 + 5];
            c11 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (fl & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (fl >>> 16) + (c11 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (fh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (fh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c11 & 65535;
            c11 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c11 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c11 & 65535;
            c11 = (bl & 65535) + (t1l & 65535);
            c2 = (bl >>> 16) + (t1l >>> 16) + (c11 >>> 16);
            c3 = (bh & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (bh >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            fh = c4 << 16 | c3 & 65535;
            fl = c2 << 16 | c11 & 65535;
            c11 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c11 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            bh = c4 << 16 | c3 & 65535;
            bl = c2 << 16 | c11 & 65535;
            s0h = (bh >>> 28 | bl << 4) ^ (bl >>> 2 | bh << 30) ^ (bl >>> 7 | bh << 25);
            s0l = (bl >>> 28 | bh << 4) ^ (bh >>> 2 | bl << 30) ^ (bh >>> 7 | bl << 25);
            s1h = (fh >>> 14 | fl << 18) ^ (fh >>> 18 | fl << 14) ^ (fl >>> 9 | fh << 23);
            s1l = (fl >>> 14 | fh << 18) ^ (fl >>> 18 | fh << 14) ^ (fh >>> 9 | fl << 23);
            bch = bh & ch;
            bcl = bl & cl;
            majh = bch ^ bh & dh ^ cdh;
            majl = bcl ^ bl & dl ^ cdl;
            chh = fh & gh ^ ~fh & hh;
            chl = fl & gl ^ ~fl & hl;
            t1h = blocks3[j1 + 6];
            t1l = blocks3[j1 + 7];
            t2h = K1[j1 + 6];
            t2l = K1[j1 + 7];
            c11 = (t2l & 65535) + (t1l & 65535) + (chl & 65535) + (s1l & 65535) + (el & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (chl >>> 16) + (s1l >>> 16) + (el >>> 16) + (c11 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (chh & 65535) + (s1h & 65535) + (eh & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (chh >>> 16) + (s1h >>> 16) + (eh >>> 16) + (c3 >>> 16);
            t1h = c4 << 16 | c3 & 65535;
            t1l = c2 << 16 | c11 & 65535;
            c11 = (majl & 65535) + (s0l & 65535);
            c2 = (majl >>> 16) + (s0l >>> 16) + (c11 >>> 16);
            c3 = (majh & 65535) + (s0h & 65535) + (c2 >>> 16);
            c4 = (majh >>> 16) + (s0h >>> 16) + (c3 >>> 16);
            t2h = c4 << 16 | c3 & 65535;
            t2l = c2 << 16 | c11 & 65535;
            c11 = (al & 65535) + (t1l & 65535);
            c2 = (al >>> 16) + (t1l >>> 16) + (c11 >>> 16);
            c3 = (ah & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (ah >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            eh = c4 << 16 | c3 & 65535;
            el = c2 << 16 | c11 & 65535;
            c11 = (t2l & 65535) + (t1l & 65535);
            c2 = (t2l >>> 16) + (t1l >>> 16) + (c11 >>> 16);
            c3 = (t2h & 65535) + (t1h & 65535) + (c2 >>> 16);
            c4 = (t2h >>> 16) + (t1h >>> 16) + (c3 >>> 16);
            ah = c4 << 16 | c3 & 65535;
            al = c2 << 16 | c11 & 65535;
        }
        c11 = (h0l & 65535) + (al & 65535);
        c2 = (h0l >>> 16) + (al >>> 16) + (c11 >>> 16);
        c3 = (h0h & 65535) + (ah & 65535) + (c2 >>> 16);
        c4 = (h0h >>> 16) + (ah >>> 16) + (c3 >>> 16);
        this.#h0h = c4 << 16 | c3 & 65535;
        this.#h0l = c2 << 16 | c11 & 65535;
        c11 = (h1l & 65535) + (bl & 65535);
        c2 = (h1l >>> 16) + (bl >>> 16) + (c11 >>> 16);
        c3 = (h1h & 65535) + (bh & 65535) + (c2 >>> 16);
        c4 = (h1h >>> 16) + (bh >>> 16) + (c3 >>> 16);
        this.#h1h = c4 << 16 | c3 & 65535;
        this.#h1l = c2 << 16 | c11 & 65535;
        c11 = (h2l & 65535) + (cl & 65535);
        c2 = (h2l >>> 16) + (cl >>> 16) + (c11 >>> 16);
        c3 = (h2h & 65535) + (ch & 65535) + (c2 >>> 16);
        c4 = (h2h >>> 16) + (ch >>> 16) + (c3 >>> 16);
        this.#h2h = c4 << 16 | c3 & 65535;
        this.#h2l = c2 << 16 | c11 & 65535;
        c11 = (h3l & 65535) + (dl & 65535);
        c2 = (h3l >>> 16) + (dl >>> 16) + (c11 >>> 16);
        c3 = (h3h & 65535) + (dh & 65535) + (c2 >>> 16);
        c4 = (h3h >>> 16) + (dh >>> 16) + (c3 >>> 16);
        this.#h3h = c4 << 16 | c3 & 65535;
        this.#h3l = c2 << 16 | c11 & 65535;
        c11 = (h4l & 65535) + (el & 65535);
        c2 = (h4l >>> 16) + (el >>> 16) + (c11 >>> 16);
        c3 = (h4h & 65535) + (eh & 65535) + (c2 >>> 16);
        c4 = (h4h >>> 16) + (eh >>> 16) + (c3 >>> 16);
        this.#h4h = c4 << 16 | c3 & 65535;
        this.#h4l = c2 << 16 | c11 & 65535;
        c11 = (h5l & 65535) + (fl & 65535);
        c2 = (h5l >>> 16) + (fl >>> 16) + (c11 >>> 16);
        c3 = (h5h & 65535) + (fh & 65535) + (c2 >>> 16);
        c4 = (h5h >>> 16) + (fh >>> 16) + (c3 >>> 16);
        this.#h5h = c4 << 16 | c3 & 65535;
        this.#h5l = c2 << 16 | c11 & 65535;
        c11 = (h6l & 65535) + (gl & 65535);
        c2 = (h6l >>> 16) + (gl >>> 16) + (c11 >>> 16);
        c3 = (h6h & 65535) + (gh & 65535) + (c2 >>> 16);
        c4 = (h6h >>> 16) + (gh >>> 16) + (c3 >>> 16);
        this.#h6h = c4 << 16 | c3 & 65535;
        this.#h6l = c2 << 16 | c11 & 65535;
        c11 = (h7l & 65535) + (hl & 65535);
        c2 = (h7l >>> 16) + (hl >>> 16) + (c11 >>> 16);
        c3 = (h7h & 65535) + (hh & 65535) + (c2 >>> 16);
        c4 = (h7h >>> 16) + (hh >>> 16) + (c3 >>> 16);
        this.#h7h = c4 << 16 | c3 & 65535;
        this.#h7l = c2 << 16 | c11 & 65535;
    }
    hex() {
        this.finalize();
        const h0h = this.#h0h, h0l = this.#h0l, h1h = this.#h1h, h1l = this.#h1l, h2h = this.#h2h, h2l = this.#h2l, h3h = this.#h3h, h3l = this.#h3l, h4h = this.#h4h, h4l = this.#h4l, h5h = this.#h5h, h5l = this.#h5l, h6h = this.#h6h, h6l = this.#h6l, h7h = this.#h7h, h7l = this.#h7l, bits = this.#bits;
        let hex = HEX_CHARS1[h0h >> 28 & 15] + HEX_CHARS1[h0h >> 24 & 15] + HEX_CHARS1[h0h >> 20 & 15] + HEX_CHARS1[h0h >> 16 & 15] + HEX_CHARS1[h0h >> 12 & 15] + HEX_CHARS1[h0h >> 8 & 15] + HEX_CHARS1[h0h >> 4 & 15] + HEX_CHARS1[h0h & 15] + HEX_CHARS1[h0l >> 28 & 15] + HEX_CHARS1[h0l >> 24 & 15] + HEX_CHARS1[h0l >> 20 & 15] + HEX_CHARS1[h0l >> 16 & 15] + HEX_CHARS1[h0l >> 12 & 15] + HEX_CHARS1[h0l >> 8 & 15] + HEX_CHARS1[h0l >> 4 & 15] + HEX_CHARS1[h0l & 15] + HEX_CHARS1[h1h >> 28 & 15] + HEX_CHARS1[h1h >> 24 & 15] + HEX_CHARS1[h1h >> 20 & 15] + HEX_CHARS1[h1h >> 16 & 15] + HEX_CHARS1[h1h >> 12 & 15] + HEX_CHARS1[h1h >> 8 & 15] + HEX_CHARS1[h1h >> 4 & 15] + HEX_CHARS1[h1h & 15] + HEX_CHARS1[h1l >> 28 & 15] + HEX_CHARS1[h1l >> 24 & 15] + HEX_CHARS1[h1l >> 20 & 15] + HEX_CHARS1[h1l >> 16 & 15] + HEX_CHARS1[h1l >> 12 & 15] + HEX_CHARS1[h1l >> 8 & 15] + HEX_CHARS1[h1l >> 4 & 15] + HEX_CHARS1[h1l & 15] + HEX_CHARS1[h2h >> 28 & 15] + HEX_CHARS1[h2h >> 24 & 15] + HEX_CHARS1[h2h >> 20 & 15] + HEX_CHARS1[h2h >> 16 & 15] + HEX_CHARS1[h2h >> 12 & 15] + HEX_CHARS1[h2h >> 8 & 15] + HEX_CHARS1[h2h >> 4 & 15] + HEX_CHARS1[h2h & 15] + HEX_CHARS1[h2l >> 28 & 15] + HEX_CHARS1[h2l >> 24 & 15] + HEX_CHARS1[h2l >> 20 & 15] + HEX_CHARS1[h2l >> 16 & 15] + HEX_CHARS1[h2l >> 12 & 15] + HEX_CHARS1[h2l >> 8 & 15] + HEX_CHARS1[h2l >> 4 & 15] + HEX_CHARS1[h2l & 15] + HEX_CHARS1[h3h >> 28 & 15] + HEX_CHARS1[h3h >> 24 & 15] + HEX_CHARS1[h3h >> 20 & 15] + HEX_CHARS1[h3h >> 16 & 15] + HEX_CHARS1[h3h >> 12 & 15] + HEX_CHARS1[h3h >> 8 & 15] + HEX_CHARS1[h3h >> 4 & 15] + HEX_CHARS1[h3h & 15];
        if (bits >= 256) {
            hex += HEX_CHARS1[h3l >> 28 & 15] + HEX_CHARS1[h3l >> 24 & 15] + HEX_CHARS1[h3l >> 20 & 15] + HEX_CHARS1[h3l >> 16 & 15] + HEX_CHARS1[h3l >> 12 & 15] + HEX_CHARS1[h3l >> 8 & 15] + HEX_CHARS1[h3l >> 4 & 15] + HEX_CHARS1[h3l & 15];
        }
        if (bits >= 384) {
            hex += HEX_CHARS1[h4h >> 28 & 15] + HEX_CHARS1[h4h >> 24 & 15] + HEX_CHARS1[h4h >> 20 & 15] + HEX_CHARS1[h4h >> 16 & 15] + HEX_CHARS1[h4h >> 12 & 15] + HEX_CHARS1[h4h >> 8 & 15] + HEX_CHARS1[h4h >> 4 & 15] + HEX_CHARS1[h4h & 15] + HEX_CHARS1[h4l >> 28 & 15] + HEX_CHARS1[h4l >> 24 & 15] + HEX_CHARS1[h4l >> 20 & 15] + HEX_CHARS1[h4l >> 16 & 15] + HEX_CHARS1[h4l >> 12 & 15] + HEX_CHARS1[h4l >> 8 & 15] + HEX_CHARS1[h4l >> 4 & 15] + HEX_CHARS1[h4l & 15] + HEX_CHARS1[h5h >> 28 & 15] + HEX_CHARS1[h5h >> 24 & 15] + HEX_CHARS1[h5h >> 20 & 15] + HEX_CHARS1[h5h >> 16 & 15] + HEX_CHARS1[h5h >> 12 & 15] + HEX_CHARS1[h5h >> 8 & 15] + HEX_CHARS1[h5h >> 4 & 15] + HEX_CHARS1[h5h & 15] + HEX_CHARS1[h5l >> 28 & 15] + HEX_CHARS1[h5l >> 24 & 15] + HEX_CHARS1[h5l >> 20 & 15] + HEX_CHARS1[h5l >> 16 & 15] + HEX_CHARS1[h5l >> 12 & 15] + HEX_CHARS1[h5l >> 8 & 15] + HEX_CHARS1[h5l >> 4 & 15] + HEX_CHARS1[h5l & 15];
        }
        if (bits === 512) {
            hex += HEX_CHARS1[h6h >> 28 & 15] + HEX_CHARS1[h6h >> 24 & 15] + HEX_CHARS1[h6h >> 20 & 15] + HEX_CHARS1[h6h >> 16 & 15] + HEX_CHARS1[h6h >> 12 & 15] + HEX_CHARS1[h6h >> 8 & 15] + HEX_CHARS1[h6h >> 4 & 15] + HEX_CHARS1[h6h & 15] + HEX_CHARS1[h6l >> 28 & 15] + HEX_CHARS1[h6l >> 24 & 15] + HEX_CHARS1[h6l >> 20 & 15] + HEX_CHARS1[h6l >> 16 & 15] + HEX_CHARS1[h6l >> 12 & 15] + HEX_CHARS1[h6l >> 8 & 15] + HEX_CHARS1[h6l >> 4 & 15] + HEX_CHARS1[h6l & 15] + HEX_CHARS1[h7h >> 28 & 15] + HEX_CHARS1[h7h >> 24 & 15] + HEX_CHARS1[h7h >> 20 & 15] + HEX_CHARS1[h7h >> 16 & 15] + HEX_CHARS1[h7h >> 12 & 15] + HEX_CHARS1[h7h >> 8 & 15] + HEX_CHARS1[h7h >> 4 & 15] + HEX_CHARS1[h7h & 15] + HEX_CHARS1[h7l >> 28 & 15] + HEX_CHARS1[h7l >> 24 & 15] + HEX_CHARS1[h7l >> 20 & 15] + HEX_CHARS1[h7l >> 16 & 15] + HEX_CHARS1[h7l >> 12 & 15] + HEX_CHARS1[h7l >> 8 & 15] + HEX_CHARS1[h7l >> 4 & 15] + HEX_CHARS1[h7l & 15];
        }
        return hex;
    }
    toString() {
        return this.hex();
    }
    digest() {
        this.finalize();
        const h0h = this.#h0h, h0l = this.#h0l, h1h = this.#h1h, h1l = this.#h1l, h2h = this.#h2h, h2l = this.#h2l, h3h = this.#h3h, h3l = this.#h3l, h4h = this.#h4h, h4l = this.#h4l, h5h = this.#h5h, h5l = this.#h5l, h6h = this.#h6h, h6l = this.#h6l, h7h = this.#h7h, h7l = this.#h7l, bits = this.#bits;
        const arr = [
            h0h >> 24 & 255,
            h0h >> 16 & 255,
            h0h >> 8 & 255,
            h0h & 255,
            h0l >> 24 & 255,
            h0l >> 16 & 255,
            h0l >> 8 & 255,
            h0l & 255,
            h1h >> 24 & 255,
            h1h >> 16 & 255,
            h1h >> 8 & 255,
            h1h & 255,
            h1l >> 24 & 255,
            h1l >> 16 & 255,
            h1l >> 8 & 255,
            h1l & 255,
            h2h >> 24 & 255,
            h2h >> 16 & 255,
            h2h >> 8 & 255,
            h2h & 255,
            h2l >> 24 & 255,
            h2l >> 16 & 255,
            h2l >> 8 & 255,
            h2l & 255,
            h3h >> 24 & 255,
            h3h >> 16 & 255,
            h3h >> 8 & 255,
            h3h & 255
        ];
        if (bits >= 256) {
            arr.push(h3l >> 24 & 255, h3l >> 16 & 255, h3l >> 8 & 255, h3l & 255);
        }
        if (bits >= 384) {
            arr.push(h4h >> 24 & 255, h4h >> 16 & 255, h4h >> 8 & 255, h4h & 255, h4l >> 24 & 255, h4l >> 16 & 255, h4l >> 8 & 255, h4l & 255, h5h >> 24 & 255, h5h >> 16 & 255, h5h >> 8 & 255, h5h & 255, h5l >> 24 & 255, h5l >> 16 & 255, h5l >> 8 & 255, h5l & 255);
        }
        if (bits === 512) {
            arr.push(h6h >> 24 & 255, h6h >> 16 & 255, h6h >> 8 & 255, h6h & 255, h6l >> 24 & 255, h6l >> 16 & 255, h6l >> 8 & 255, h6l & 255, h7h >> 24 & 255, h7h >> 16 & 255, h7h >> 8 & 255, h7h & 255, h7l >> 24 & 255, h7l >> 16 & 255, h7l >> 8 & 255, h7l & 255);
        }
        return arr;
    }
    array() {
        return this.digest();
    }
    arrayBuffer() {
        this.finalize();
        const bits = this.#bits;
        const buffer = new ArrayBuffer(bits / 8);
        const dataView = new DataView(buffer);
        dataView.setUint32(0, this.#h0h);
        dataView.setUint32(4, this.#h0l);
        dataView.setUint32(8, this.#h1h);
        dataView.setUint32(12, this.#h1l);
        dataView.setUint32(16, this.#h2h);
        dataView.setUint32(20, this.#h2l);
        dataView.setUint32(24, this.#h3h);
        if (bits >= 256) {
            dataView.setUint32(28, this.#h3l);
        }
        if (bits >= 384) {
            dataView.setUint32(32, this.#h4h);
            dataView.setUint32(36, this.#h4l);
            dataView.setUint32(40, this.#h5h);
            dataView.setUint32(44, this.#h5l);
        }
        if (bits === 512) {
            dataView.setUint32(48, this.#h6h);
            dataView.setUint32(52, this.#h6l);
            dataView.setUint32(56, this.#h7h);
            dataView.setUint32(60, this.#h7l);
        }
        return buffer;
    }
}
class HmacSha512 extends Sha512 {
    #inner;
    #bits;
    #oKeyPad;
    #sharedMemory;
    constructor(secretKey, bits = 512, sharedMemory = false){
        super(bits, sharedMemory);
        let key;
        if (secretKey instanceof ArrayBuffer) {
            key = new Uint8Array(secretKey);
        } else if (typeof secretKey === "string") {
            const bytes = [];
            const length8 = secretKey.length;
            let index10 = 0;
            let code31;
            for(let i56 = 0; i56 < length8; ++i56){
                code31 = secretKey.charCodeAt(i56);
                if (code31 < 128) {
                    bytes[index10++] = code31;
                } else if (code31 < 2048) {
                    bytes[index10++] = 192 | code31 >> 6;
                    bytes[index10++] = 128 | code31 & 63;
                } else if (code31 < 55296 || code31 >= 57344) {
                    bytes[index10++] = 224 | code31 >> 12;
                    bytes[index10++] = 128 | code31 >> 6 & 63;
                    bytes[index10++] = 128 | code31 & 63;
                } else {
                    code31 = 65536 + ((code31 & 1023) << 10 | secretKey.charCodeAt(++i56) & 1023);
                    bytes[index10++] = 240 | code31 >> 18;
                    bytes[index10++] = 128 | code31 >> 12 & 63;
                    bytes[index10++] = 128 | code31 >> 6 & 63;
                    bytes[index10++] = 128 | code31 & 63;
                }
            }
            key = bytes;
        } else {
            key = secretKey;
        }
        if (key.length > 128) {
            key = new Sha512(bits, true).update(key).array();
        }
        const oKeyPad = [];
        const iKeyPad = [];
        for(let i57 = 0; i57 < 128; ++i57){
            const b45 = key[i57] || 0;
            oKeyPad[i57] = 92 ^ b45;
            iKeyPad[i57] = 54 ^ b45;
        }
        this.update(iKeyPad);
        this.#inner = true;
        this.#bits = bits;
        this.#oKeyPad = oKeyPad;
        this.#sharedMemory = sharedMemory;
    }
    finalize() {
        super.finalize();
        if (this.#inner) {
            this.#inner = false;
            const innerHash = this.array();
            super.init(this.#bits, this.#sharedMemory);
            this.update(this.#oKeyPad);
            this.update(innerHash);
            super.finalize();
        }
    }
}
function big_base64(m3) {
    if (m3 === undefined) return undefined;
    const bytes = [];
    while(m3 > 0n){
        bytes.push(Number(m3 & 255n));
        m3 = m3 >> 8n;
    }
    bytes.reverse();
    let a54 = btoa(String.fromCharCode.apply(null, bytes)).replace(/=/g, "");
    a54 = a54.replace(/\+/g, "-");
    a54 = a54.replace(/\//g, "_");
    return a54;
}
function getHashFunctionName(hash) {
    if (hash === "sha1") return "SHA-1";
    if (hash === "sha256") return "SHA-256";
    return "";
}
async function createWebCryptoKey(key, usage, options) {
    let jwk = {
        kty: "RSA",
        n: big_base64(key.n),
        ext: true
    };
    if (usage === "encrypt") {
        jwk = {
            ...jwk,
            e: big_base64(key.e)
        };
    } else if (usage === "decrypt") {
        jwk = {
            ...jwk,
            d: big_base64(key.d),
            e: big_base64(key.e),
            p: big_base64(key.p),
            q: big_base64(key.q),
            dp: big_base64(key.dp),
            dq: big_base64(key.dq),
            qi: big_base64(key.qi)
        };
    }
    return await crypto.subtle.importKey("jwk", jwk, {
        name: "RSA-OAEP",
        hash: {
            name: getHashFunctionName(options.hash)
        }
    }, false, [
        usage
    ]);
}
class WebCryptoRSA {
    key;
    options;
    encryptedKey = null;
    decryptedKey = null;
    constructor(key, options){
        this.key = key;
        this.options = options;
    }
    static isSupported(options) {
        if (!crypto.subtle) return false;
        if (options.padding !== "oaep") return false;
        return true;
    }
    static async encrypt(key, m4, options) {
        return await crypto.subtle.encrypt({
            name: "RSA-OAEP"
        }, await createWebCryptoKey(key, "encrypt", options), m4);
    }
    static async decrypt(key, m5, options) {
        return await crypto.subtle.decrypt({
            name: "RSA-OAEP"
        }, await createWebCryptoKey(key, "decrypt", options), m5);
    }
}
function power_mod(n28, p15, m6) {
    if (p15 === 1n) return n28;
    if (p15 % 2n === 0n) {
        const t12 = power_mod(n28, p15 >> 1n, m6);
        return t12 * t12 % m6;
    } else {
        const t13 = power_mod(n28, p15 >> 1n, m6);
        return t13 * t13 * n28 % m6;
    }
}
function getLengths(b64) {
    const len = b64.length;
    let validLen = b64.indexOf("=");
    if (validLen === -1) {
        validLen = len;
    }
    const placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
function init1(lookup2, revLookup2, urlsafe = false) {
    function _byteLength(validLen, placeHoldersLen) {
        return Math.floor((validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen);
    }
    function tripletToBase64(num) {
        return lookup2[num >> 18 & 63] + lookup2[num >> 12 & 63] + lookup2[num >> 6 & 63] + lookup2[num & 63];
    }
    function encodeChunk(buf, start, end) {
        const out = new Array((end - start) / 3);
        for(let i58 = start, curTriplet = 0; i58 < end; i58 += 3){
            out[curTriplet++] = tripletToBase64((buf[i58] << 16) + (buf[i58 + 1] << 8) + buf[i58 + 2]);
        }
        return out.join("");
    }
    return {
        byteLength (b64) {
            return _byteLength.apply(null, getLengths(b64));
        },
        toUint8Array (b64) {
            const [validLen, placeHoldersLen] = getLengths(b64);
            const buf = new Uint8Array(_byteLength(validLen, placeHoldersLen));
            const len = placeHoldersLen ? validLen - 4 : validLen;
            let tmp;
            let curByte = 0;
            let i59;
            for(i59 = 0; i59 < len; i59 += 4){
                tmp = revLookup2[b64.charCodeAt(i59)] << 18 | revLookup2[b64.charCodeAt(i59 + 1)] << 12 | revLookup2[b64.charCodeAt(i59 + 2)] << 6 | revLookup2[b64.charCodeAt(i59 + 3)];
                buf[curByte++] = tmp >> 16 & 255;
                buf[curByte++] = tmp >> 8 & 255;
                buf[curByte++] = tmp & 255;
            }
            if (placeHoldersLen === 2) {
                tmp = revLookup2[b64.charCodeAt(i59)] << 2 | revLookup2[b64.charCodeAt(i59 + 1)] >> 4;
                buf[curByte++] = tmp & 255;
            } else if (placeHoldersLen === 1) {
                tmp = revLookup2[b64.charCodeAt(i59)] << 10 | revLookup2[b64.charCodeAt(i59 + 1)] << 4 | revLookup2[b64.charCodeAt(i59 + 2)] >> 2;
                buf[curByte++] = tmp >> 8 & 255;
                buf[curByte++] = tmp & 255;
            }
            return buf;
        },
        fromUint8Array (buf) {
            const maxChunkLength = 16383;
            const len = buf.length;
            const extraBytes = len % 3;
            const len2 = len - extraBytes;
            const parts = new Array(Math.ceil(len2 / 16383) + (extraBytes ? 1 : 0));
            let curChunk = 0;
            let chunkEnd;
            for(let i60 = 0; i60 < len2; i60 += maxChunkLength){
                chunkEnd = i60 + maxChunkLength;
                parts[curChunk++] = encodeChunk(buf, i60, chunkEnd > len2 ? len2 : chunkEnd);
            }
            let tmp;
            if (extraBytes === 1) {
                tmp = buf[len2];
                parts[curChunk] = lookup2[tmp >> 2] + lookup2[tmp << 4 & 63];
                if (!urlsafe) parts[curChunk] += "==";
            } else if (extraBytes === 2) {
                tmp = buf[len2] << 8 | buf[len2 + 1] & 255;
                parts[curChunk] = lookup2[tmp >> 10] + lookup2[tmp >> 4 & 63] + lookup2[tmp << 2 & 63];
                if (!urlsafe) parts[curChunk] += "=";
            }
            return parts.join("");
        }
    };
}
const lookup = [];
const revLookup = [];
const code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
for(let i2 = 0, l1 = code.length; i2 < l1; ++i2){
    lookup[i2] = code[i2];
    revLookup[code.charCodeAt(i2)] = i2;
}
const { byteLength , toUint8Array , fromUint8Array  } = init1(lookup, revLookup, true);
const decoder = new TextDecoder();
const encoder = new TextEncoder();
function toHexString(buf) {
    return buf.reduce((hex, __byte)=>`${hex}${__byte < 16 ? "0" : ""}${__byte.toString(16)}`
    , "");
}
function fromHexString(hex) {
    const len = hex.length;
    if (len % 2 || !/^[0-9a-fA-F]+$/.test(hex)) {
        throw new TypeError("Invalid hex string.");
    }
    hex = hex.toLowerCase();
    const buf = new Uint8Array(Math.floor(len / 2));
    const end = len / 2;
    for(let i61 = 0; i61 < end; ++i61){
        buf[i61] = parseInt(hex.substr(i61 * 2, 2), 16);
    }
    return buf;
}
function decode3(buf, encoding = "utf8") {
    if (/^utf-?8$/i.test(encoding)) {
        return decoder.decode(buf);
    } else if (/^base64$/i.test(encoding)) {
        return fromUint8Array(buf);
    } else if (/^hex(?:adecimal)?$/i.test(encoding)) {
        return toHexString(buf);
    } else {
        throw new TypeError("Unsupported string encoding.");
    }
}
function encode2(str, encoding = "utf8") {
    if (/^utf-?8$/i.test(encoding)) {
        return encoder.encode(str);
    } else if (/^base64$/i.test(encoding)) {
        return toUint8Array(str);
    } else if (/^hex(?:adecimal)?$/i.test(encoding)) {
        return fromHexString(str);
    } else {
        throw new TypeError("Unsupported string encoding.");
    }
}
function rotl(x45, n29) {
    return x45 << n29 | x45 >>> 32 - n29;
}
class SHA1 {
    hashSize = 20;
    _buf = new Uint8Array(64);
    _bufIdx;
    _count;
    _K = new Uint32Array([
        1518500249,
        1859775393,
        2400959708,
        3395469782
    ]);
    _H;
    _finalized;
    constructor(){
        this.init();
    }
    static F(t14, b46, c6, d8) {
        if (t14 <= 19) {
            return b46 & c6 | ~b46 & d8;
        } else if (t14 <= 39) {
            return b46 ^ c6 ^ d8;
        } else if (t14 <= 59) {
            return b46 & c6 | b46 & d8 | c6 & d8;
        } else {
            return b46 ^ c6 ^ d8;
        }
    }
    init() {
        this._H = new Uint32Array([
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
        ]);
        this._bufIdx = 0;
        this._count = new Uint32Array(2);
        this._buf.fill(0);
        this._finalized = false;
        return this;
    }
    update(msg, inputEncoding) {
        if (msg === null) {
            throw new TypeError("msg must be a string or Uint8Array.");
        } else if (typeof msg === "string") {
            msg = encode2(msg, inputEncoding);
        }
        for(let i62 = 0; i62 < msg.length; i62++){
            this._buf[this._bufIdx++] = msg[i62];
            if (this._bufIdx === 64) {
                this.transform();
                this._bufIdx = 0;
            }
        }
        const c7 = this._count;
        if ((c7[0] += msg.length << 3) < msg.length << 3) {
            c7[1]++;
        }
        c7[1] += msg.length >>> 29;
        return this;
    }
    digest(outputEncoding) {
        if (this._finalized) {
            throw new Error("digest has already been called.");
        }
        this._finalized = true;
        const b47 = this._buf;
        let idx = this._bufIdx;
        b47[idx++] = 128;
        while(idx !== 56){
            if (idx === 64) {
                this.transform();
                idx = 0;
            }
            b47[idx++] = 0;
        }
        const c8 = this._count;
        b47[56] = c8[1] >>> 24 & 255;
        b47[57] = c8[1] >>> 16 & 255;
        b47[58] = c8[1] >>> 8 & 255;
        b47[59] = c8[1] >>> 0 & 255;
        b47[60] = c8[0] >>> 24 & 255;
        b47[61] = c8[0] >>> 16 & 255;
        b47[62] = c8[0] >>> 8 & 255;
        b47[63] = c8[0] >>> 0 & 255;
        this.transform();
        const hash = new Uint8Array(20);
        for(let i63 = 0; i63 < 5; i63++){
            hash[(i63 << 2) + 0] = this._H[i63] >>> 24 & 255;
            hash[(i63 << 2) + 1] = this._H[i63] >>> 16 & 255;
            hash[(i63 << 2) + 2] = this._H[i63] >>> 8 & 255;
            hash[(i63 << 2) + 3] = this._H[i63] >>> 0 & 255;
        }
        this.init();
        return outputEncoding ? decode3(hash, outputEncoding) : hash;
    }
    transform() {
        const h7 = this._H;
        let a55 = h7[0];
        let b48 = h7[1];
        let c9 = h7[2];
        let d9 = h7[3];
        let e16 = h7[4];
        const w = new Uint32Array(80);
        for(let i64 = 0; i64 < 16; i64++){
            w[i64] = this._buf[(i64 << 2) + 3] | this._buf[(i64 << 2) + 2] << 8 | this._buf[(i64 << 2) + 1] << 16 | this._buf[i64 << 2] << 24;
        }
        for(let t15 = 0; t15 < 80; t15++){
            if (t15 >= 16) {
                w[t15] = rotl(w[t15 - 3] ^ w[t15 - 8] ^ w[t15 - 14] ^ w[t15 - 16], 1);
            }
            const tmp = rotl(a55, 5) + SHA1.F(t15, b48, c9, d9) + e16 + w[t15] + this._K[Math.floor(t15 / 20)] | 0;
            e16 = d9;
            d9 = c9;
            c9 = rotl(b48, 30);
            b48 = a55;
            a55 = tmp;
        }
        h7[0] = h7[0] + a55 | 0;
        h7[1] = h7[1] + b48 | 0;
        h7[2] = h7[2] + c9 | 0;
        h7[3] = h7[3] + d9 | 0;
        h7[4] = h7[4] + e16 | 0;
    }
}
function sha1(msg, inputEncoding, outputEncoding) {
    return new SHA1().update(msg, inputEncoding).digest(outputEncoding);
}
class SHA256 {
    hashSize = 32;
    _buf;
    _bufIdx;
    _count;
    _K;
    _H;
    _finalized;
    constructor(){
        this._buf = new Uint8Array(64);
        this._K = new Uint32Array([
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298
        ]);
        this.init();
    }
    init() {
        this._H = new Uint32Array([
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225
        ]);
        this._bufIdx = 0;
        this._count = new Uint32Array(2);
        this._buf.fill(0);
        this._finalized = false;
        return this;
    }
    update(msg, inputEncoding) {
        if (msg === null) {
            throw new TypeError("msg must be a string or Uint8Array.");
        } else if (typeof msg === "string") {
            msg = encode2(msg, inputEncoding);
        }
        for(let i65 = 0, len = msg.length; i65 < len; i65++){
            this._buf[this._bufIdx++] = msg[i65];
            if (this._bufIdx === 64) {
                this._transform();
                this._bufIdx = 0;
            }
        }
        const c10 = this._count;
        if ((c10[0] += msg.length << 3) < msg.length << 3) {
            c10[1]++;
        }
        c10[1] += msg.length >>> 29;
        return this;
    }
    digest(outputEncoding) {
        if (this._finalized) {
            throw new Error("digest has already been called.");
        }
        this._finalized = true;
        const b49 = this._buf;
        let idx = this._bufIdx;
        b49[idx++] = 128;
        while(idx !== 56){
            if (idx === 64) {
                this._transform();
                idx = 0;
            }
            b49[idx++] = 0;
        }
        const c12 = this._count;
        b49[56] = c12[1] >>> 24 & 255;
        b49[57] = c12[1] >>> 16 & 255;
        b49[58] = c12[1] >>> 8 & 255;
        b49[59] = c12[1] >>> 0 & 255;
        b49[60] = c12[0] >>> 24 & 255;
        b49[61] = c12[0] >>> 16 & 255;
        b49[62] = c12[0] >>> 8 & 255;
        b49[63] = c12[0] >>> 0 & 255;
        this._transform();
        const hash = new Uint8Array(32);
        for(let i66 = 0; i66 < 8; i66++){
            hash[(i66 << 2) + 0] = this._H[i66] >>> 24 & 255;
            hash[(i66 << 2) + 1] = this._H[i66] >>> 16 & 255;
            hash[(i66 << 2) + 2] = this._H[i66] >>> 8 & 255;
            hash[(i66 << 2) + 3] = this._H[i66] >>> 0 & 255;
        }
        this.init();
        return outputEncoding ? decode3(hash, outputEncoding) : hash;
    }
    _transform() {
        const h8 = this._H;
        let h0 = h8[0];
        let h1 = h8[1];
        let h2 = h8[2];
        let h3 = h8[3];
        let h4 = h8[4];
        let h5 = h8[5];
        let h6 = h8[6];
        let h7 = h8[7];
        const w = new Uint32Array(16);
        let i67;
        for(i67 = 0; i67 < 16; i67++){
            w[i67] = this._buf[(i67 << 2) + 3] | this._buf[(i67 << 2) + 2] << 8 | this._buf[(i67 << 2) + 1] << 16 | this._buf[i67 << 2] << 24;
        }
        for(i67 = 0; i67 < 64; i67++){
            let tmp;
            if (i67 < 16) {
                tmp = w[i67];
            } else {
                let a56 = w[i67 + 1 & 15];
                let b50 = w[i67 + 14 & 15];
                tmp = w[i67 & 15] = (a56 >>> 7 ^ a56 >>> 18 ^ a56 >>> 3 ^ a56 << 25 ^ a56 << 14) + (b50 >>> 17 ^ b50 >>> 19 ^ b50 >>> 10 ^ b50 << 15 ^ b50 << 13) + w[i67 & 15] + w[i67 + 9 & 15] | 0;
            }
            tmp = tmp + h7 + (h4 >>> 6 ^ h4 >>> 11 ^ h4 >>> 25 ^ h4 << 26 ^ h4 << 21 ^ h4 << 7) + (h6 ^ h4 & (h5 ^ h6)) + this._K[i67] | 0;
            h7 = h6;
            h6 = h5;
            h5 = h4;
            h4 = h3 + tmp;
            h3 = h2;
            h2 = h1;
            h1 = h0;
            h0 = tmp + (h1 & h2 ^ h3 & (h1 ^ h2)) + (h1 >>> 2 ^ h1 >>> 13 ^ h1 >>> 22 ^ h1 << 30 ^ h1 << 19 ^ h1 << 10) | 0;
        }
        h8[0] = h8[0] + h0 | 0;
        h8[1] = h8[1] + h1 | 0;
        h8[2] = h8[2] + h2 | 0;
        h8[3] = h8[3] + h3 | 0;
        h8[4] = h8[4] + h4 | 0;
        h8[5] = h8[5] + h5 | 0;
        h8[6] = h8[6] + h6 | 0;
        h8[7] = h8[7] + h7 | 0;
    }
}
function sha256(msg, inputEncoding, outputEncoding) {
    return new SHA256().update(msg, inputEncoding).digest(outputEncoding);
}
const lookup1 = [];
const revLookup1 = [];
const code1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(let i3 = 0, l2 = code1.length; i3 < l2; ++i3){
    lookup1[i3] = code1[i3];
    revLookup1[code1.charCodeAt(i3)] = i3;
}
revLookup1["-".charCodeAt(0)] = 62;
revLookup1["_".charCodeAt(0)] = 63;
const { byteLength: byteLength1 , toUint8Array: toUint8Array1 , fromUint8Array: fromUint8Array1  } = init1(lookup1, revLookup1);
const decoder1 = new TextDecoder();
const encoder1 = new TextEncoder();
function toHexString1(buf) {
    return buf.reduce((hex, __byte)=>`${hex}${__byte < 16 ? "0" : ""}${__byte.toString(16)}`
    , "");
}
function fromHexString1(hex) {
    const len = hex.length;
    if (len % 2 || !/^[0-9a-fA-F]+$/.test(hex)) {
        throw new TypeError("Invalid hex string.");
    }
    hex = hex.toLowerCase();
    const buf = new Uint8Array(Math.floor(len / 2));
    const end = len / 2;
    for(let i68 = 0; i68 < end; ++i68){
        buf[i68] = parseInt(hex.substr(i68 * 2, 2), 16);
    }
    return buf;
}
function decode4(buf, encoding = "utf8") {
    if (/^utf-?8$/i.test(encoding)) {
        return decoder1.decode(buf);
    } else if (/^base64$/i.test(encoding)) {
        return fromUint8Array1(buf);
    } else if (/^base64url$/i.test(encoding)) {
        return fromUint8Array(buf);
    } else if (/^hex(?:adecimal)?$/i.test(encoding)) {
        return toHexString1(buf);
    } else {
        throw new TypeError("Unsupported string encoding.");
    }
}
function encode3(str, encoding = "utf8") {
    if (/^utf-?8$/i.test(encoding)) {
        return encoder1.encode(str);
    } else if (/^base64(?:url)?$/i.test(encoding)) {
        return toUint8Array1(str);
    } else if (/^hex(?:adecimal)?$/i.test(encoding)) {
        return fromHexString1(str);
    } else {
        throw new TypeError("Unsupported string encoding.");
    }
}
class SHA512 {
    hashSize = 64;
    _buffer = new Uint8Array(128);
    _bufferIndex;
    _count;
    _K;
    _H;
    _finalized;
    constructor(){
        this._K = new Uint32Array([
            1116352408,
            3609767458,
            1899447441,
            602891725,
            3049323471,
            3964484399,
            3921009573,
            2173295548,
            961987163,
            4081628472,
            1508970993,
            3053834265,
            2453635748,
            2937671579,
            2870763221,
            3664609560,
            3624381080,
            2734883394,
            310598401,
            1164996542,
            607225278,
            1323610764,
            1426881987,
            3590304994,
            1925078388,
            4068182383,
            2162078206,
            991336113,
            2614888103,
            633803317,
            3248222580,
            3479774868,
            3835390401,
            2666613458,
            4022224774,
            944711139,
            264347078,
            2341262773,
            604807628,
            2007800933,
            770255983,
            1495990901,
            1249150122,
            1856431235,
            1555081692,
            3175218132,
            1996064986,
            2198950837,
            2554220882,
            3999719339,
            2821834349,
            766784016,
            2952996808,
            2566594879,
            3210313671,
            3203337956,
            3336571891,
            1034457026,
            3584528711,
            2466948901,
            113926993,
            3758326383,
            338241895,
            168717936,
            666307205,
            1188179964,
            773529912,
            1546045734,
            1294757372,
            1522805485,
            1396182291,
            2643833823,
            1695183700,
            2343527390,
            1986661051,
            1014477480,
            2177026350,
            1206759142,
            2456956037,
            344077627,
            2730485921,
            1290863460,
            2820302411,
            3158454273,
            3259730800,
            3505952657,
            3345764771,
            106217008,
            3516065817,
            3606008344,
            3600352804,
            1432725776,
            4094571909,
            1467031594,
            275423344,
            851169720,
            430227734,
            3100823752,
            506948616,
            1363258195,
            659060556,
            3750685593,
            883997877,
            3785050280,
            958139571,
            3318307427,
            1322822218,
            3812723403,
            1537002063,
            2003034995,
            1747873779,
            3602036899,
            1955562222,
            1575990012,
            2024104815,
            1125592928,
            2227730452,
            2716904306,
            2361852424,
            442776044,
            2428436474,
            593698344,
            2756734187,
            3733110249,
            3204031479,
            2999351573,
            3329325298,
            3815920427,
            3391569614,
            3928383900,
            3515267271,
            566280711,
            3940187606,
            3454069534,
            4118630271,
            4000239992,
            116418474,
            1914138554,
            174292421,
            2731055270,
            289380356,
            3203993006,
            460393269,
            320620315,
            685471733,
            587496836,
            852142971,
            1086792851,
            1017036298,
            365543100,
            1126000580,
            2618297676,
            1288033470,
            3409855158,
            1501505948,
            4234509866,
            1607167915,
            987167468,
            1816402316,
            1246189591
        ]);
        this.init();
    }
    init() {
        this._H = new Uint32Array([
            1779033703,
            4089235720,
            3144134277,
            2227873595,
            1013904242,
            4271175723,
            2773480762,
            1595750129,
            1359893119,
            2917565137,
            2600822924,
            725511199,
            528734635,
            4215389547,
            1541459225,
            327033209
        ]);
        this._bufferIndex = 0;
        this._count = new Uint32Array(2);
        this._buffer.fill(0);
        this._finalized = false;
        return this;
    }
    update(msg, inputEncoding) {
        if (msg === null) {
            throw new TypeError("msg must be a string or Uint8Array.");
        } else if (typeof msg === "string") {
            msg = encode3(msg, inputEncoding);
        }
        for(let i69 = 0; i69 < msg.length; i69++){
            this._buffer[this._bufferIndex++] = msg[i69];
            if (this._bufferIndex === 128) {
                this.transform();
                this._bufferIndex = 0;
            }
        }
        let c13 = this._count;
        if ((c13[0] += msg.length << 3) < msg.length << 3) {
            c13[1]++;
        }
        c13[1] += msg.length >>> 29;
        return this;
    }
    digest(outputEncoding) {
        if (this._finalized) {
            throw new Error("digest has already been called.");
        }
        this._finalized = true;
        var b51 = this._buffer, idx = this._bufferIndex;
        b51[idx++] = 128;
        while(idx !== 112){
            if (idx === 128) {
                this.transform();
                idx = 0;
            }
            b51[idx++] = 0;
        }
        let c14 = this._count;
        b51[112] = b51[113] = b51[114] = b51[115] = b51[116] = b51[117] = b51[118] = b51[119] = 0;
        b51[120] = c14[1] >>> 24 & 255;
        b51[121] = c14[1] >>> 16 & 255;
        b51[122] = c14[1] >>> 8 & 255;
        b51[123] = c14[1] >>> 0 & 255;
        b51[124] = c14[0] >>> 24 & 255;
        b51[125] = c14[0] >>> 16 & 255;
        b51[126] = c14[0] >>> 8 & 255;
        b51[127] = c14[0] >>> 0 & 255;
        this.transform();
        let i70, hash = new Uint8Array(64);
        for(i70 = 0; i70 < 16; i70++){
            hash[(i70 << 2) + 0] = this._H[i70] >>> 24 & 255;
            hash[(i70 << 2) + 1] = this._H[i70] >>> 16 & 255;
            hash[(i70 << 2) + 2] = this._H[i70] >>> 8 & 255;
            hash[(i70 << 2) + 3] = this._H[i70] & 255;
        }
        this.init();
        return outputEncoding ? decode4(hash, outputEncoding) : hash;
    }
    transform() {
        let h9 = this._H, h0h = h9[0], h0l = h9[1], h1h = h9[2], h1l = h9[3], h2h = h9[4], h2l = h9[5], h3h = h9[6], h3l = h9[7], h4h = h9[8], h4l = h9[9], h5h = h9[10], h5l = h9[11], h6h = h9[12], h6l = h9[13], h7h = h9[14], h7l = h9[15];
        let ah = h0h, al = h0l, bh = h1h, bl = h1l, ch = h2h, cl = h2l, dh = h3h, dl = h3l, eh = h4h, el = h4l, fh = h5h, fl = h5l, gh = h6h, gl = h6l, hh = h7h, hl = h7l;
        let i71, w = new Uint32Array(160);
        for(i71 = 0; i71 < 32; i71++){
            w[i71] = this._buffer[(i71 << 2) + 3] | this._buffer[(i71 << 2) + 2] << 8 | this._buffer[(i71 << 2) + 1] << 16 | this._buffer[i71 << 2] << 24;
        }
        let gamma0xl, gamma0xh, gamma0l, gamma0h, gamma1xl, gamma1xh, gamma1l, gamma1h, wrl, wrh, wr7l, wr7h, wr16l, wr16h;
        for(i71 = 16; i71 < 80; i71++){
            gamma0xh = w[(i71 - 15) * 2];
            gamma0xl = w[(i71 - 15) * 2 + 1];
            gamma0h = (gamma0xl << 31 | gamma0xh >>> 1) ^ (gamma0xl << 24 | gamma0xh >>> 8) ^ gamma0xh >>> 7;
            gamma0l = (gamma0xh << 31 | gamma0xl >>> 1) ^ (gamma0xh << 24 | gamma0xl >>> 8) ^ (gamma0xh << 25 | gamma0xl >>> 7);
            gamma1xh = w[(i71 - 2) * 2];
            gamma1xl = w[(i71 - 2) * 2 + 1];
            gamma1h = (gamma1xl << 13 | gamma1xh >>> 19) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
            gamma1l = (gamma1xh << 13 | gamma1xl >>> 19) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xh << 26 | gamma1xl >>> 6);
            wr7h = w[(i71 - 7) * 2], wr7l = w[(i71 - 7) * 2 + 1], wr16h = w[(i71 - 16) * 2], wr16l = w[(i71 - 16) * 2 + 1];
            wrl = gamma0l + wr7l;
            wrh = gamma0h + wr7h + (wrl >>> 0 < gamma0l >>> 0 ? 1 : 0);
            wrl += gamma1l;
            wrh += gamma1h + (wrl >>> 0 < gamma1l >>> 0 ? 1 : 0);
            wrl += wr16l;
            wrh += wr16h + (wrl >>> 0 < wr16l >>> 0 ? 1 : 0);
            w[i71 * 2] = wrh;
            w[i71 * 2 + 1] = wrl;
        }
        let chl, chh, majl, majh, sig0l, sig0h, sig1l, sig1h, krl, krh, t1l, t1h, t2l, t2h;
        for(i71 = 0; i71 < 80; i71++){
            chh = eh & fh ^ ~eh & gh;
            chl = el & fl ^ ~el & gl;
            majh = ah & bh ^ ah & ch ^ bh & ch;
            majl = al & bl ^ al & cl ^ bl & cl;
            sig0h = (al << 4 | ah >>> 28) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
            sig0l = (ah << 4 | al >>> 28) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
            sig1h = (el << 18 | eh >>> 14) ^ (el << 14 | eh >>> 18) ^ (eh << 23 | el >>> 9);
            sig1l = (eh << 18 | el >>> 14) ^ (eh << 14 | el >>> 18) ^ (el << 23 | eh >>> 9);
            krh = this._K[i71 * 2];
            krl = this._K[i71 * 2 + 1];
            t1l = hl + sig1l;
            t1h = hh + sig1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
            t1l += chl;
            t1h += chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
            t1l += krl;
            t1h += krh + (t1l >>> 0 < krl >>> 0 ? 1 : 0);
            t1l = t1l + w[i71 * 2 + 1];
            t1h += w[i71 * 2] + (t1l >>> 0 < w[i71 * 2 + 1] >>> 0 ? 1 : 0);
            t2l = sig0l + majl;
            t2h = sig0h + majh + (t2l >>> 0 < sig0l >>> 0 ? 1 : 0);
            hh = gh;
            hl = gl;
            gh = fh;
            gl = fl;
            fh = eh;
            fl = el;
            el = dl + t1l | 0;
            eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
            dh = ch;
            dl = cl;
            ch = bh;
            cl = bl;
            bh = ah;
            bl = al;
            al = t1l + t2l | 0;
            ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
        }
        h0l = h9[1] = h0l + al | 0;
        h9[0] = h0h + ah + (h0l >>> 0 < al >>> 0 ? 1 : 0) | 0;
        h1l = h9[3] = h1l + bl | 0;
        h9[2] = h1h + bh + (h1l >>> 0 < bl >>> 0 ? 1 : 0) | 0;
        h2l = h9[5] = h2l + cl | 0;
        h9[4] = h2h + ch + (h2l >>> 0 < cl >>> 0 ? 1 : 0) | 0;
        h3l = h9[7] = h3l + dl | 0;
        h9[6] = h3h + dh + (h3l >>> 0 < dl >>> 0 ? 1 : 0) | 0;
        h4l = h9[9] = h4l + el | 0;
        h9[8] = h4h + eh + (h4l >>> 0 < el >>> 0 ? 1 : 0) | 0;
        h5l = h9[11] = h5l + fl | 0;
        h9[10] = h5h + fh + (h5l >>> 0 < fl >>> 0 ? 1 : 0) | 0;
        h6l = h9[13] = h6l + gl | 0;
        h9[12] = h6h + gh + (h6l >>> 0 < gl >>> 0 ? 1 : 0) | 0;
        h7l = h9[15] = h7l + hl | 0;
        h9[14] = h7h + hh + (h7l >>> 0 < hl >>> 0 ? 1 : 0) | 0;
    }
}
function sha512(msg, inputEncoding, outputEncoding) {
    return new SHA512().init().update(msg, inputEncoding).digest(outputEncoding);
}
function digest(algorithm, m7) {
    if (algorithm === "sha1") {
        return sha1(m7);
    } else if (algorithm === "sha256") {
        return sha256(m7);
    } else if (algorithm === "sha512") {
        return sha512(m7);
    }
    throw "Unsupport hash algorithm";
}
function digestLength(algorithm) {
    if (algorithm === "sha512") return 64;
    if (algorithm === "sha256") return 32;
    return 20;
}
function i2osp(x46, length9) {
    const t16 = new Uint8Array(length9);
    for(let i72 = length9 - 1; i72 >= 0; i72--){
        if (x46 === 0n) break;
        t16[i72] = Number(x46 & 255n);
        x46 = x46 >> 8n;
    }
    return t16;
}
function os2ip(m8) {
    let n30 = 0n;
    for (const c15 of m8)n30 = (n30 << 8n) + BigInt(c15);
    return n30;
}
function mgf1(seed, length10, hash) {
    let counter = 0n;
    let output = [];
    while(output.length < length10){
        const c16 = i2osp(counter, 4);
        const h10 = new Uint8Array(digest(hash, new Uint8Array([
            ...seed,
            ...c16
        ])));
        output = [
            ...output,
            ...h10
        ];
        counter++;
    }
    return new Uint8Array(output.slice(0, length10));
}
function xor1(a57, b52) {
    const c17 = new Uint8Array(a57.length);
    for(let i73 = 0; i73 < c17.length; i73++){
        c17[i73] = a57[i73] ^ b52[i73 % b52.length];
    }
    return c17;
}
function concat1(...arg) {
    const length11 = arg.reduce((a58, b53)=>a58 + b53.length
    , 0);
    const c18 = new Uint8Array(length11);
    let ptr = 0;
    for(let i74 = 0; i74 < arg.length; i74++){
        c18.set(arg[i74], ptr);
        ptr += arg[i74].length;
    }
    return c18;
}
function random_bytes(length12) {
    const n31 = new Uint8Array(length12);
    for(let i75 = 0; i75 < length12; i75++)n31[i75] = (Math.random() * 254 | 0) + 1;
    return n31;
}
function get_key_size(n32) {
    const size_list = [
        64n,
        128n,
        256n,
        512n,
        1024n
    ];
    for (const size of size_list){
        if (n32 < 1n << size * 8n) return Number(size);
    }
    return 2048;
}
function base64_to_binary(b54) {
    let binaryString = window.atob(b54);
    let len = binaryString.length;
    let bytes = new Uint8Array(len);
    for(var i76 = 0; i76 < len; i76++){
        bytes[i76] = binaryString.charCodeAt(i76);
    }
    return bytes;
}
function eme_oaep_encode(label, m9, k11, algorithm) {
    const labelHash = new Uint8Array(digest(algorithm, label));
    const ps = new Uint8Array(k11 - labelHash.length * 2 - 2 - m9.length);
    const db1 = concat1(labelHash, ps, [
        1
    ], m9);
    const seed = random_bytes(labelHash.length);
    const dbMask = mgf1(seed, k11 - labelHash.length - 1, algorithm);
    const maskedDb = xor1(db1, dbMask);
    const seedMask = mgf1(maskedDb, labelHash.length, algorithm);
    const maskedSeed = xor1(seed, seedMask);
    return concat1([
        0
    ], maskedSeed, maskedDb);
}
function eme_oaep_decode(label, c19, k12, algorithm) {
    const labelHash = new Uint8Array(digest(algorithm, label));
    const maskedSeed = c19.slice(1, 1 + labelHash.length);
    const maskedDb = c19.slice(1 + labelHash.length);
    const seedMask = mgf1(maskedDb, labelHash.length, algorithm);
    const seed = xor1(maskedSeed, seedMask);
    const dbMask = mgf1(seed, k12 - labelHash.length - 1, algorithm);
    const db2 = xor1(maskedDb, dbMask);
    let ptr = labelHash.length;
    while(ptr < db2.length && db2[ptr] === 0)ptr++;
    return db2.slice(ptr + 1);
}
function ber_decode(bytes, from, to) {
    return ber_next(bytes);
}
function ber_sequence(bytes, from, length13) {
    const end = from + length13;
    let res = [];
    let ptr = from;
    while(ptr < end){
        const next = ber_next(bytes, ptr);
        res.push(next);
        ptr += next.totalLength;
    }
    return res;
}
function ber_integer(bytes, from, length14) {
    let n33 = 0n;
    for (const b55 of bytes.slice(from, from + length14)){
        n33 = (n33 << 8n) + BigInt(b55);
    }
    return n33;
}
function ber_oid(bytes, from, length15) {
    const id = [
        bytes[from] / 40 | 0,
        bytes[from] % 40
    ];
    let value = 0;
    for (const b56 of bytes.slice(from + 1, from + length15)){
        if (b56 > 128) value += value * 127 + (b56 - 128);
        else {
            value = value * 128 + b56;
            id.push(value);
            value = 0;
        }
    }
    return id.join(".");
}
function ber_unknown(bytes, from, length16) {
    return bytes.slice(from, from + length16);
}
function ber_simple(n34) {
    if (Array.isArray(n34.value)) return n34.value.map((x47)=>ber_simple(x47)
    );
    return n34.value;
}
function ber_next(bytes, from, to) {
    if (!from) from = 0;
    if (!to) to = bytes.length;
    let ptr = from;
    const type137 = bytes[ptr++];
    let size = bytes[ptr++];
    if ((size & 128) > 0) {
        let ext = size - 128;
        size = 0;
        while(--ext >= 0){
            size = (size << 8) + bytes[ptr++];
        }
    }
    let value = null;
    if (type137 === 48) {
        value = ber_sequence(bytes, ptr, size);
    } else if (type137 === 2) {
        value = ber_integer(bytes, ptr, size);
    } else if (type137 === 3) {
        value = ber_sequence(bytes, ptr + 1, size - 1);
    } else if (type137 === 5) {
        value = null;
    } else if (type137 === 6) {
        value = ber_oid(bytes, ptr, size);
    } else {
        value = ber_unknown(bytes, ptr, size);
    }
    return {
        totalLength: ptr - from + size,
        type: type137,
        length: size,
        value
    };
}
class RawBinary extends Uint8Array {
    hex() {
        return [
            ...this
        ].map((x48)=>x48.toString(16).padStart(2, "0")
        ).join("");
    }
    binary() {
        return this;
    }
    base64() {
        return btoa(String.fromCharCode.apply(null, [
            ...this
        ]));
    }
    base64url() {
        let a59 = btoa(String.fromCharCode.apply(null, [
            ...this
        ])).replace(/=/g, "");
        a59 = a59.replace(/\+/g, "-");
        a59 = a59.replace(/\//g, "_");
        return a59;
    }
    base32() {
        const lookup3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        const trim1 = [
            0,
            1,
            3,
            7,
            15,
            31,
            63,
            127,
            255
        ];
        let output = "";
        let bits = 0;
        let current = 0;
        for(let i77 = 0; i77 < this.length; i77++){
            current = (current << 8) + this[i77];
            bits += 8;
            while(bits >= 5){
                bits -= 5;
                output += lookup3[current >> bits];
                current = current & trim1[bits];
            }
        }
        if (bits > 0) {
            output += lookup3[current << 5 - bits];
        }
        return output;
    }
    toString() {
        return new TextDecoder().decode(this);
    }
}
function rsaep(n35, e17, m10) {
    return power_mod(m10, e17, n35);
}
function rsadp(key, c20) {
    if (!key.d) throw "Invalid RSA key";
    if (key.dp && key.dq && key.qi && key.q && key.p) {
        const m1 = power_mod(c20 % key.p, key.dp, key.p);
        const m2 = power_mod(c20 % key.q, key.dq, key.q);
        let h11 = 0n;
        if (m1 >= m2) {
            h11 = key.qi * (m1 - m2) % key.p;
        } else {
            h11 = key.qi * (m1 - m2 + key.p * (key.p / key.q)) % key.p;
        }
        return (m2 + h11 * key.q) % (key.q * key.p);
    } else {
        return power_mod(c20, key.d, key.n);
    }
}
function rsa_oaep_encrypt(bytes, n36, e18, m11, algorithm) {
    const em = eme_oaep_encode(new Uint8Array(0), m11, bytes, algorithm);
    const msg = os2ip(em);
    const c21 = rsaep(n36, e18, msg);
    return i2osp(c21, bytes);
}
function rsa_oaep_decrypt(key, c22, algorithm) {
    const em = rsadp(key, os2ip(c22));
    const m12 = eme_oaep_decode(new Uint8Array(0), i2osp(em, key.length), key.length, algorithm);
    return m12;
}
function rsa_pkcs1_encrypt(bytes, n37, e19, m13) {
    const p16 = concat1([
        0,
        2
    ], random_bytes(bytes - m13.length - 3), [
        0
    ], m13);
    const msg = os2ip(p16);
    const c23 = rsaep(n37, e19, msg);
    return i2osp(c23, bytes);
}
function rsa_pkcs1_decrypt(key, c24) {
    const em = i2osp(rsadp(key, os2ip(c24)), key.length);
    if (em[0] !== 0) throw "Decryption error";
    if (em[1] !== 2) throw "Decryption error";
    let psCursor = 2;
    for(; psCursor < em.length; psCursor++){
        if (em[psCursor] === 0) break;
    }
    if (psCursor < 10) throw "Decryption error";
    return em.slice(psCursor + 1);
}
function rsa_pkcs1_verify(key, s6, m14) {
    if (!key.e) throw "Invalid RSA key";
    let em = i2osp(rsaep(key.n, key.e, os2ip(s6)), key.length);
    if (em[0] !== 0) throw "Decryption error";
    if (em[1] !== 1) throw "Decryption error";
    let psCursor = 2;
    for(; psCursor < em.length; psCursor++){
        if (em[psCursor] === 0) break;
    }
    if (psCursor < 10) throw "Decryption error";
    em = em.slice(psCursor + 1);
    const ber = ber_simple(ber_decode(em));
    const decryptedMessage = ber[1];
    if (decryptedMessage.length !== m14.length) return false;
    for(let i78 = 0; i78 < decryptedMessage.length; i78++){
        if (decryptedMessage[i78] !== m14[i78]) return false;
    }
    return true;
}
function rsa_pkcs1_sign(bytes, n38, d10, message, algorithm) {
    const oid = [
        48,
        13,
        6,
        9,
        96,
        134,
        72,
        1,
        101,
        3,
        4,
        2,
        algorithm === "sha512" ? 3 : 1,
        5,
        0, 
    ];
    const der = [
        48,
        message.length + 2 + oid.length,
        ...oid,
        4,
        message.length,
        ...message, 
    ];
    const ps = new Array(bytes - 3 - der.length).fill(255);
    const em = new Uint8Array([
        0,
        1,
        ...ps,
        0,
        ...der
    ]);
    const msg = os2ip(em);
    const c25 = rsaep(n38, d10, msg);
    return new RawBinary(i2osp(c25, bytes));
}
function emsa_pss_encode(m15, emBits, sLen, algorithm) {
    const mHash = digest(algorithm, m15);
    const hLen = mHash.length;
    const emLen = Math.ceil(emBits / 8);
    if (emLen < hLen + sLen + 2) throw "Encoding Error";
    const salt = new Uint8Array(sLen);
    crypto.getRandomValues(salt);
    const m1 = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        ...mHash,
        ...salt
    ]);
    const h12 = digest(algorithm, m1);
    const ps = new Uint8Array(emLen - sLen - hLen - 2);
    const db3 = new Uint8Array([
        ...ps,
        1,
        ...salt
    ]);
    const dbMask = mgf1(h12, emLen - hLen - 1, algorithm);
    const maskedDB = xor1(db3, dbMask);
    const leftMost = 8 * emLen - emBits;
    maskedDB[0] = maskedDB[0] & 255 >> leftMost;
    return new Uint8Array([
        ...maskedDB,
        ...h12,
        188
    ]);
}
function emsa_pss_verify(m16, em, emBits, sLen, algorithm) {
    const mHash = digest(algorithm, m16);
    const hLen = mHash.length;
    const emLen = Math.ceil(emBits / 8);
    if (emLen < hLen + sLen + 2) return false;
    if (em[em.length - 1] !== 188) return false;
    const maskedDB = em.slice(0, emLen - hLen - 1);
    const h13 = em.slice(emLen - hLen - 1, emLen - 1);
    const leftMost = 8 * emLen - emBits;
    if (maskedDB[0] >> 8 - leftMost != 0) return false;
    const dbMask = mgf1(h13, emLen - hLen - 1, algorithm);
    const db4 = xor1(maskedDB, dbMask);
    db4[0] = db4[0] & 255 >> leftMost;
    for(let i79 = 1; i79 < emLen - hLen - sLen - 2; i79++){
        if (db4[i79] !== 0) return false;
    }
    if (db4[emLen - hLen - sLen - 2] !== 1) return false;
    const salt = db4.slice(emLen - hLen - sLen - 1);
    const m1 = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        ...mHash,
        ...salt
    ]);
    const h1 = digest(algorithm, m1);
    for(let i111 = 0; i111 < hLen; i111++){
        if (h1[i111] !== h13[i111]) return false;
    }
    return true;
}
function rsassa_pss_sign(key, m17, algorithm) {
    if (!key.d) throw "Invalid RSA Key";
    const hLen = digestLength(algorithm);
    let em = emsa_pss_encode(m17, key.length * 8 - 1, hLen, algorithm);
    return new RawBinary(i2osp(rsaep(key.n, key.d, os2ip(em)), key.length));
}
function rsassa_pss_verify(key, m18, signature, algorithm) {
    if (!key.e) throw "Invalid RSA Key";
    const hLen = digestLength(algorithm);
    const em = i2osp(rsaep(key.n, key.e, os2ip(signature)), key.length);
    return emsa_pss_verify(m18, em, key.length * 8 - 1, hLen, algorithm);
}
class PureRSA {
    static async encrypt(key, message, options) {
        if (!key.e) throw "Invalid RSA key";
        if (options.padding === "oaep") {
            return new RawBinary(rsa_oaep_encrypt(key.length, key.n, key.e, message, options.hash));
        } else if (options.padding === "pkcs1") {
            return new RawBinary(rsa_pkcs1_encrypt(key.length, key.n, key.e, message));
        }
        throw "Invalid parameters";
    }
    static async decrypt(key, ciper, options) {
        if (!key.d) throw "Invalid RSA key";
        if (options.padding === "oaep") {
            return new RawBinary(rsa_oaep_decrypt(key, ciper, options.hash));
        } else if (options.padding === "pkcs1") {
            return new RawBinary(rsa_pkcs1_decrypt(key, ciper));
        }
        throw "Invalid parameters";
    }
    static async verify(key, signature, message, options) {
        if (!key.e) throw "Invalid RSA key";
        if (options.algorithm === "rsassa-pkcs1-v1_5") {
            return rsa_pkcs1_verify(key, signature, digest(options.hash, message));
        } else {
            return rsassa_pss_verify(key, message, signature, options.hash);
        }
    }
    static async sign(key, message, options) {
        if (!key.d) throw "You need private key to sign the message";
        if (options.algorithm === "rsassa-pkcs1-v1_5") {
            return rsa_pkcs1_sign(key.length, key.n, key.d, digest(options.hash, message), options.hash);
        } else {
            return rsassa_pss_sign(key, message, options.hash);
        }
    }
}
class encode4 {
    static hex(data) {
        if (data.length % 2 !== 0) throw "Invalid hex format";
        const output = new RawBinary(data.length >> 1);
        let ptr = 0;
        for(let i80 = 0; i80 < data.length; i80 += 2){
            output[ptr++] = parseInt(data.substr(i80, 2), 16);
        }
        return output;
    }
    static bigint(n39) {
        const bytes = [];
        while(n39 > 0){
            bytes.push(Number(n39 & 255n));
            n39 = n39 >> 8n;
        }
        bytes.reverse();
        return new RawBinary(bytes);
    }
    static string(data) {
        return new RawBinary(new TextEncoder().encode(data));
    }
    static base64(data) {
        return new RawBinary(Uint8Array.from(atob(data), (c26)=>c26.charCodeAt(0)
        ));
    }
    static base64url(data) {
        let input = data.replace(/-/g, "+").replace(/_/g, "/");
        const pad1 = input.length % 4;
        if (pad1) {
            if (pad1 === 1) throw "Invalid length";
            input += new Array(5 - pad1).join("=");
        }
        return encode4.base64(input);
    }
    static binary(data) {
        return new RawBinary(data);
    }
    static base32(data) {
        data = data.toUpperCase();
        data = data.replace(/=+$/g, "");
        const lookup4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        const size = data.length * 5 >> 3;
        const output = new RawBinary(size);
        let ptr = 0;
        let bits = 0;
        let current = 0;
        for(let i81 = 0; i81 < data.length; i81++){
            const value = lookup4.indexOf(data[i81]);
            if (value < 0) throw "Invalid base32 format";
            current = (current << 5) + value;
            bits += 5;
            if (bits >= 8) {
                bits -= 8;
                const t17 = current >> bits;
                current -= t17 << bits;
                output[ptr++] = t17;
            }
        }
        return output;
    }
}
function detect_format(key) {
    if (typeof key === "object") {
        if (key.kty === "RSA") return "jwk";
    } else if (typeof key === "string") {
        if (key.substr(0, "-----".length) === "-----") return "pem";
    }
    throw new TypeError("Unsupported key format");
}
function rsa_import_jwk(key) {
    if (typeof key !== "object") throw new TypeError("Invalid JWK format");
    if (!key.n) throw new TypeError("RSA key requires n");
    const n40 = os2ip(encode4.base64url(key.n));
    return {
        e: key.e ? os2ip(encode4.base64url(key.e)) : undefined,
        n: os2ip(encode4.base64url(key.n)),
        d: key.d ? os2ip(encode4.base64url(key.d)) : undefined,
        p: key.p ? os2ip(encode4.base64url(key.p)) : undefined,
        q: key.q ? os2ip(encode4.base64url(key.q)) : undefined,
        dp: key.dp ? os2ip(encode4.base64url(key.dp)) : undefined,
        dq: key.dq ? os2ip(encode4.base64url(key.dq)) : undefined,
        qi: key.qi ? os2ip(encode4.base64url(key.qi)) : undefined,
        length: get_key_size(n40)
    };
}
function rsa_import_pem_cert(key) {
    const trimmedKey = key.substr(27, key.length - 53);
    const parseKey = ber_simple(ber_decode(base64_to_binary(trimmedKey)));
    return {
        length: get_key_size(parseKey[0][5][1][0][0]),
        n: parseKey[0][5][1][0][0],
        e: parseKey[0][5][1][0][1]
    };
}
function rsa_import_pem_private(key) {
    const trimmedKey = key.substr(31, key.length - 61);
    const parseKey = ber_simple(ber_decode(base64_to_binary(trimmedKey)));
    return {
        n: parseKey[1],
        d: parseKey[3],
        e: parseKey[2],
        p: parseKey[4],
        q: parseKey[5],
        dp: parseKey[6],
        dq: parseKey[7],
        qi: parseKey[8],
        length: get_key_size(parseKey[1])
    };
}
function rsa_import_pem_private_pkcs8(key) {
    const trimmedKey = key.substr(27, key.length - 57);
    const parseWrappedKey = ber_simple(ber_decode(base64_to_binary(trimmedKey)));
    const parseKey = ber_simple(ber_decode(parseWrappedKey[2]));
    return {
        n: parseKey[1],
        d: parseKey[3],
        e: parseKey[2],
        p: parseKey[4],
        q: parseKey[5],
        dp: parseKey[6],
        dq: parseKey[7],
        qi: parseKey[8],
        length: get_key_size(parseKey[1])
    };
}
function rsa_import_pem_public(key) {
    const trimmedKey = key.substr(26, key.length - 51);
    const parseKey = ber_simple(ber_decode(base64_to_binary(trimmedKey)));
    return {
        length: get_key_size(parseKey[1][0][0]),
        n: parseKey[1][0][0],
        e: parseKey[1][0][1]
    };
}
function rsa_import_pem(key) {
    if (typeof key !== "string") throw new TypeError("PEM key must be string");
    const trimmedKey = key.trim();
    const maps = [
        [
            "-----BEGIN RSA PRIVATE KEY-----",
            rsa_import_pem_private
        ],
        [
            "-----BEGIN PRIVATE KEY-----",
            rsa_import_pem_private_pkcs8
        ],
        [
            "-----BEGIN PUBLIC KEY-----",
            rsa_import_pem_public
        ],
        [
            "-----BEGIN CERTIFICATE-----",
            rsa_import_pem_cert
        ], 
    ];
    for (const [prefix, func] of maps){
        if (trimmedKey.indexOf(prefix) === 0) return func(trimmedKey);
    }
    throw new TypeError("Unsupported key format");
}
function rsa_import_key(key, format3) {
    const finalFormat = format3 === "auto" ? detect_format(key) : format3;
    if (finalFormat === "jwk") return rsa_import_jwk(key);
    if (finalFormat === "pem") return rsa_import_pem(key);
    throw new TypeError("Unsupported key format");
}
function createSizeBuffer(size) {
    if (size <= 127) return new Uint8Array([
        size
    ]);
    const bytes = [];
    while(size > 0){
        bytes.push(size & 255);
        size = size >> 8;
    }
    bytes.reverse();
    return new Uint8Array([
        128 + bytes.length,
        ...bytes
    ]);
}
class BER {
    static createSequence(children) {
        const size = children.reduce((accumlatedSize, child)=>accumlatedSize + child.length
        , 0);
        return new Uint8Array([
            48,
            ...createSizeBuffer(size),
            ...children.reduce((buffer, child)=>[
                    ...buffer,
                    ...child
                ]
            , []), 
        ]);
    }
    static createNull() {
        return new Uint8Array([
            5,
            0
        ]);
    }
    static createBoolean(value) {
        return new Uint8Array([
            1,
            1,
            value ? 1 : 0
        ]);
    }
    static createInteger(value) {
        if (typeof value === "number") return BER.createBigInteger(BigInt(value));
        return BER.createBigInteger(value);
    }
    static createBigInteger(value) {
        if (value === 0n) return new Uint8Array([
            2,
            1,
            0
        ]);
        const isNegative = value < 0;
        const content = [];
        let n41 = isNegative ? -value : value;
        while(n41 > 0n){
            content.push(Number(n41 & 255n));
            n41 = n41 >> 8n;
        }
        if (!isNegative) {
            if (content[content.length - 1] & 128) content.push(0);
        } else {
            for(let i82 = 0; i82 < content.length; i82++)content[i82] = 256 - content[i82];
            if (!(content[content.length - 1] & 128)) content.push(255);
        }
        content.reverse();
        return new Uint8Array([
            2,
            ...createSizeBuffer(content.length),
            ...content, 
        ]);
    }
    static createBitString(value) {
        return new Uint8Array([
            3,
            ...createSizeBuffer(value.length + 1),
            0,
            ...value, 
        ]);
    }
}
function add_line_break(base64_str) {
    const lines = [];
    for(let i83 = 0; i83 < base64_str.length; i83 += 64){
        lines.push(base64_str.substr(i83, 64));
    }
    return lines.join("\n");
}
function rsa_export_pkcs8_public(key) {
    const content = BER.createSequence([
        BER.createSequence([
            new Uint8Array([
                6,
                9,
                42,
                134,
                72,
                134,
                247,
                13,
                1,
                1,
                1, 
            ]),
            BER.createNull(), 
        ]),
        BER.createBitString(BER.createSequence([
            BER.createInteger(key.n),
            BER.createInteger(key.e || 0n), 
        ])), 
    ]);
    return "-----BEGIN PUBLIC KEY-----\n" + add_line_break(encode4.binary(content).base64()) + "\n-----END PUBLIC KEY-----\n";
}
function rsa_export_pkcs8_private(key) {
    const content = BER.createSequence([
        BER.createInteger(0),
        BER.createInteger(key.n),
        BER.createInteger(key.e || 0n),
        BER.createInteger(key.d || 0n),
        BER.createInteger(key.p || 0n),
        BER.createInteger(key.q || 0n),
        BER.createInteger(key.dp || 0n),
        BER.createInteger(key.dq || 0n),
        BER.createInteger(key.qi || 0n), 
    ]);
    const ber = encode4.binary(content).base64();
    return "-----BEGIN RSA PRIVATE KEY-----\n" + add_line_break(ber) + "\n-----END RSA PRIVATE KEY-----\n";
}
class RSAKey {
    n;
    e;
    d;
    p;
    q;
    dp;
    dq;
    qi;
    length;
    constructor(params){
        this.n = params.n;
        this.e = params.e;
        this.d = params.d;
        this.p = params.p;
        this.q = params.q;
        this.dp = params.dp;
        this.dq = params.dq;
        this.qi = params.qi;
        this.length = params.length;
    }
    pem() {
        if (this.d) {
            return rsa_export_pkcs8_private(this);
        } else {
            return rsa_export_pkcs8_public(this);
        }
    }
    jwk() {
        let jwk = {
            kty: "RSA",
            n: encode4.bigint(this.n).base64url()
        };
        if (this.d) jwk = {
            ...jwk,
            d: encode4.bigint(this.d).base64url()
        };
        if (this.e) jwk = {
            ...jwk,
            e: encode4.bigint(this.e).base64url()
        };
        if (this.p) jwk = {
            ...jwk,
            p: encode4.bigint(this.p).base64url()
        };
        if (this.q) jwk = {
            ...jwk,
            q: encode4.bigint(this.q).base64url()
        };
        if (this.dp) jwk = {
            ...jwk,
            dp: encode4.bigint(this.dp).base64url()
        };
        if (this.dq) jwk = {
            ...jwk,
            dq: encode4.bigint(this.dq).base64url()
        };
        if (this.qi) jwk = {
            ...jwk,
            qi: encode4.bigint(this.qi).base64url()
        };
        return jwk;
    }
}
function computeMessage(m19) {
    return typeof m19 === "string" ? new TextEncoder().encode(m19) : m19;
}
function computeOption(options) {
    return {
        hash: "sha1",
        padding: "oaep",
        ...options
    };
}
class RSA {
    key;
    constructor(key){
        this.key = key;
    }
    async encrypt(m20, options) {
        const computedOption = computeOption(options);
        const func = WebCryptoRSA.isSupported(computedOption) ? WebCryptoRSA.encrypt : PureRSA.encrypt;
        return new RawBinary(await func(this.key, computeMessage(m20), computedOption));
    }
    async decrypt(m21, options) {
        const computedOption = computeOption(options);
        const func = WebCryptoRSA.isSupported(computedOption) ? WebCryptoRSA.decrypt : PureRSA.decrypt;
        return new RawBinary(await func(this.key, m21, computedOption));
    }
    async verify(signature, message, options) {
        const computedOption = {
            algorithm: "rsassa-pkcs1-v1_5",
            hash: "sha256",
            ...options
        };
        return await PureRSA.verify(this.key, signature, computeMessage(message), computedOption);
    }
    async sign(message, options) {
        const computedOption = {
            algorithm: "rsassa-pkcs1-v1_5",
            hash: "sha256",
            ...options
        };
        return await PureRSA.sign(this.key, computeMessage(message), computedOption);
    }
    static parseKey(key, format4 = "auto") {
        return this.importKey(key, format4);
    }
    static importKey(key, format5 = "auto") {
        return new RSAKey(rsa_import_key(key, format5));
    }
}
function assertNever(alg, message) {
    throw new RangeError(message);
}
function convertHexToBase64url(input) {
    return mod3.encode(decodeString(input));
}
async function encrypt(algorithm, key, message) {
    switch(algorithm){
        case "none":
            return "";
        case "HS256":
            return new HmacSha256(key).update(message).toString();
        case "HS512":
            return new HmacSha512(key).update(message).toString();
        case "RS256":
            return (await new RSA(RSA.parseKey(key)).sign(message, {
                algorithm: "rsassa-pkcs1-v1_5",
                hash: "sha256"
            })).hex();
        case "RS512":
            return (await new RSA(RSA.parseKey(key)).sign(message, {
                algorithm: "rsassa-pkcs1-v1_5",
                hash: "sha512"
            })).hex();
        case "PS256":
            return (await new RSA(RSA.parseKey(key)).sign(message, {
                algorithm: "rsassa-pss",
                hash: "sha256"
            })).hex();
        case "PS512":
            return (await new RSA(RSA.parseKey(key)).sign(message, {
                algorithm: "rsassa-pss",
                hash: "sha512"
            })).hex();
        default:
            assertNever(algorithm, "no matching crypto algorithm in the header: " + algorithm);
    }
}
async function create2(algorithm, key, input) {
    return convertHexToBase64url(await encrypt(algorithm, key, input));
}
const encoder2 = new TextEncoder();
new TextDecoder();
function createSigningInput(header, payload) {
    return `${mod3.encode(encoder2.encode(JSON.stringify(header)))}.${mod3.encode(encoder2.encode(JSON.stringify(payload)))}`;
}
async function create3(header, payload, key) {
    const signingInput = createSigningInput(header, payload);
    const signature = await create2(header.alg, key, signingInput);
    return `${signingInput}.${signature}`;
}
const { lensPath: lensPath1 , set: set2  } = mod2;
const service2 = "search";
const add3 = (key, doc)=>(hyper14)=>hyper14({
            service: service2,
            method: Method.POST,
            body: {
                key,
                doc
            }
        })
;
const remove3 = (key)=>(hyper15)=>hyper15({
            service: service2,
            method: Method.DELETE,
            resource: key
        })
;
const get2 = (key)=>(hyper16)=>hyper16({
            service: service2,
            method: Method.GET,
            resource: key
        })
;
const update2 = (key, doc)=>(hyper17)=>hyper17({
            service: service2,
            method: Method.PUT,
            resource: key,
            body: doc
        })
;
const query2 = (query11, options)=>(hyper18)=>hyper18([
            {
                service: service2,
                method: Method.POST,
                action: Action.QUERY,
                body: {
                    query: query11
                }
            }
        ].map((r)=>options && options.fields ? set2(lensPath1([
                "body",
                "fields"
            ]), options.fields, r) : r
        ).map((r)=>options && options.filter ? set2(lensPath1([
                "body",
                "filter"
            ]), options.filter, r) : r
        )[0])
;
const load = (docs)=>(hyper19)=>hyper19({
            service: service2,
            method: Method.POST,
            action: Action.BULK,
            body: docs
        })
;
const create4 = (fields, storeFields)=>(hyper20)=>hyper20({
            service: service2,
            method: Method.PUT,
            body: {
                fields,
                storeFields
            }
        })
;
const destroy2 = (confirm = true)=>(hyper21)=>confirm ? hyper21({
            service: service2,
            method: Method.DELETE
        }) : Promise.reject({
            ok: false,
            msg: "request not confirmed!"
        })
;
const service3 = "info";
const services = ()=>(h14)=>h14({
            service: service3,
            method: Method.GET
        })
;
const { assoc: assoc1  } = mod2;
const generateToken = (sub, secret)=>{
    const exp = Math.floor(Date.now() / 1000) + 60 * 5;
    return create3({
        alg: "HS256",
        type: "JWT"
    }, {
        sub: sub,
        exp
    }, secret);
};
const hyper = (conn, domain)=>async ({ service: service4 , method , resource , body , params , action  })=>{
        const isCloud = /^cloud/.test(conn.protocol);
        const protocol = isCloud ? "https:" : conn.protocol;
        let options = {
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            method: method ? method : Method.GET
        };
        if (body) {
            options = assoc1("body", JSON.stringify(body), options);
        }
        if (conn.username && conn.password) {
            const token = await generateToken(conn.username, conn.password);
            options.headers = new Headers({
                ...Object.fromEntries(options.headers.entries()),
                Authorization: `Bearer ${token}`
            });
        }
        const pathname = isCloud ? conn.pathname : "";
        const appdomain = isCloud ? "/" + domain : conn.pathname;
        let url = `${protocol}//${conn.host}${pathname}/${service4}${appdomain}`;
        if (service4 === "info") {
            url = `${protocol}//${conn.host}`;
        }
        if (resource) url += `/${resource}`;
        else if (action) url += `/${action}`;
        if (params) {
            url += `?${new URLSearchParams(params).toString()}`;
        }
        return {
            url,
            options
        };
    }
;
const { assoc: assoc2 , includes: includes1 , ifElse: ifElse1  } = mod2;
function connect(CONNECTION_STRING, domain = "default") {
    const config = new URL(CONNECTION_STRING);
    const h15 = async (hyperRequest)=>{
        const { url , options  } = await hyper(config, domain)(hyperRequest);
        return new Request(url, options);
    };
    const handleResponse = (response)=>Promise.resolve(response).then(ifElse1((r)=>includes1("application/json", r.headers.get("content-type"))
        , (r)=>r.json()
        , (r)=>r.text().then((msg)=>({
                    ok: r.ok,
                    msg
                })
            )
        )).then((r)=>response.ok ? r : assoc2("status", response.status, r)
        ).then((r)=>response.status >= 500 ? Promise.reject(r) : r
        )
    ;
    return {
        data: {
            add: (body)=>Promise.resolve(h15).then(add(body)).then(fetch).then(handleResponse)
            ,
            get: (id)=>Promise.resolve(h15).then(get(id)).then(fetch).then(handleResponse)
            ,
            list: (options)=>Promise.resolve(h15).then(list(options)).then(fetch).then(handleResponse)
            ,
            update: (id, doc)=>Promise.resolve(h15).then(update(id, doc)).then(fetch).then(handleResponse)
            ,
            remove: (id)=>Promise.resolve(h15).then(remove(id)).then(fetch).then(handleResponse)
            ,
            query: (selector, options)=>Promise.resolve(h15).then(query(selector, options)).then(fetch).then(handleResponse)
            ,
            bulk: (docs)=>Promise.resolve(h15).then(bulk(docs)).then(fetch).then(handleResponse)
            ,
            index: (indexName, fields)=>Promise.resolve(h15).then(index(indexName, fields)).then(fetch).then(handleResponse)
            ,
            create: ()=>Promise.resolve(h15).then(create()).then(fetch).then(handleResponse)
            ,
            destroy: (confirm)=>Promise.resolve(h15).then(destroy(confirm)).then(fetch).then(handleResponse)
        },
        cache: {
            add: (key, value, ttl)=>Promise.resolve(h15).then(add1(key, value, ttl)).then(fetch).then(handleResponse)
            ,
            get: (key)=>Promise.resolve(h15).then(get1(key)).then(fetch).then(handleResponse)
            ,
            remove: (key)=>Promise.resolve(h15).then(remove1(key)).then(fetch).then(handleResponse)
            ,
            set: (key, value, ttl)=>Promise.resolve(h15).then(set(key, value, ttl)).then(fetch).then(handleResponse)
            ,
            query: (pattern)=>Promise.resolve(h15).then(query1(pattern)).then(fetch).then(handleResponse)
            ,
            create: ()=>Promise.resolve(h15).then(create1()).then(fetch).then(handleResponse)
            ,
            destroy: (confirm)=>Promise.resolve(h15).then(destroy1(confirm)).then(fetch).then(handleResponse)
        },
        search: {
            add: (key, doc)=>Promise.resolve(h15).then(add3(key, doc)).then(fetch).then(handleResponse)
            ,
            remove: (key)=>Promise.resolve(h15).then(remove3(key)).then(fetch).then(handleResponse)
            ,
            get: (key)=>Promise.resolve(h15).then(get2(key)).then(fetch).then(handleResponse)
            ,
            update: (key, doc)=>Promise.resolve(h15).then(update2(key, doc)).then(fetch).then(handleResponse)
            ,
            query: (query6, options)=>Promise.resolve(h15).then(query2(query6, options)).then(fetch).then(handleResponse)
            ,
            load: (docs)=>Promise.resolve(h15).then(load(docs)).then(fetch).then(handleResponse)
            ,
            create: (fields, storeFields)=>Promise.resolve(h15).then(create4(fields, storeFields)).then(fetch).then(handleResponse)
            ,
            destroy: (confirm)=>Promise.resolve(h15).then(destroy2(confirm)).then(fetch).then(handleResponse)
        },
        info: {
            services: ()=>Promise.resolve(h15).then(services()).then(fetch).then(handleResponse)
        }
    };
}
const hyper1 = connect(Deno.env.get("HYPER"));
const typeDefs = gql`
  type Shortcut {
    code: String,
    href: String
  }

  type Result {
    ok: Boolean
  }

  type Query {
    shortcut(code: String!) : Shortcut
  }

  type Mutation {
    createShortcut(code: String, href: String) : Result!
  }
`;
const resolvers = {
    Query: {
        shortcut: async (_parent, { code: code32  })=>await hyper1.data.get(code32)
    },
    Mutation: {
        createShortcut (_parent, { code: code33 , href  }) {
            return hyper1.data.add({
                _id: code33,
                code: code33,
                href
            });
        }
    }
};
const graphql1 = async (req)=>await GraphQLHTTP({
        schema: makeExecutableSchema({
            resolvers,
            typeDefs
        }),
        graphiql: true
    })(req)
;
const shortcut = async (code34)=>{
    const result = await hyper1.data.get(code34);
    return result.href;
};
const app_html = await Deno.readTextFile('./public/index.html');
const app_css = await Deno.readTextFile('./public/build/bundle.css');
const app_js = await Deno.readTextFile('./public/build/bundle.js');
serve({
    '/': ()=>new Response(app_html, {
            headers: {
                'content-type': 'text/html'
            }
        })
    ,
    '/build/bundle.css': ()=>new Response(app_css, {
            headers: {
                'content-type': 'text/css'
            }
        })
    ,
    '/build/bundle.js': ()=>new Response(app_js, {
            headers: {
                'content-type': 'text/javascript'
            }
        })
    ,
    '/graphql': graphql1,
    '/:code': async (_, params)=>params ? Response.redirect(await shortcut(params.code)) : new Response('Not Found!')
});
