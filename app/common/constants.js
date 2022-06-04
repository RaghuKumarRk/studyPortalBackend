const stringConstants = {
    SERVICE_STATUS_HTML:
    '<body style="font-family: Helvetica !important; background-color: black">' +
    '<div style="display: flex; flex:1; height: 100% ; justify-content: center; align-items: center; min-height: 100vh !important; font-size: 24px !important; color: #605DFF !important;">' +
    '⚡  Studyportal  🔋 MicroService is working fine</div></body>'
}
const httpConstants = {
  METHOD_TYPE: {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    PATCH: 'PATCH'
  },
  HEADER_TYPE: {
    URL_ENCODED: 'application/x-www-form-urlencoded',
    APPLICATION_JSON: 'application/json'
  },
  RESPONSE_STATUS: {
    SUCCESS: true,
    FAILURE: false
  },
  RESPONSE_CODES: {
    UNAUTHORIZED: 401,
    SERVER_ERROR: 500,
    NOT_FOUND: 404,
    OK: 200,
    NO_CONTENT_FOUND: 204,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    GONE: 410,
    UNSUPPORTED_MEDIA_TYPE: 415,
    TOO_MANY_REQUEST: 429
  },
  LOG_LEVEL_TYPE: {
    INFO: 'info',
    ERROR: 'error',
    WARN: 'warn',
    VERBOSE: 'verbose',
    DEBUG: 'debug',
    SILLY: 'silly',
    FUNCTIONAL: 'functional',
    HTTP_REQUEST: 'http request'
  },
}
const apiSuccessMessage = {
  FETCH_SUCCESS: 'Information fetched successfully',
  
  USER_CREATE_SUCCESS: 'User created sucessfully',
  USER_UPDATE_SUCCESS: "User updated successfully",
  USER_DELETE_SUCCES: "User deleted successfully",

  NOTES_CREATE_SUCCESS: "Notes Created Successfully",
  NOTES_UPDATE_SUCCESS: "Notes updated Successfully",
  NOTES_DELETE_SUCCESS: "Notes deleted Successfully",
  CHANGE_PASSWORD_SUCCESS: "Password changed Successfully"
}
const apiFailureMessage = {
  FETCH_FAIL: 'Failed To fetch Information',
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  CREATE_USER_FAIL: 'unable To Create user',
  GET_USER_FAIL: 'unable To Get users List',
  UPDATE_USER_FAIL: 'unable To update user',
  DELETE_USER_FAIL: 'unable To delete user',
  CREATE_NOTES_FAIL: 'unable To Create notes',
  GET_NOTES_FAIL: 'unable To Get notes List',
  UPDATE_NOTES_FAIL: 'unable To update notes',
  DELETE_NOTES_FAIL: 'unable To delete notes',
}


module.exports.apiFailureMessage = apiFailureMessage;
module.exports.apiSuccessMessage = apiSuccessMessage;
module.exports.stringConstants = stringConstants;
module.exports.httpConstants = httpConstants;

