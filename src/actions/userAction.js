import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const GET_USER_DETAIL = "GET_USER_DETAIL";


export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get("https://my-json-server.typicode.com/elanadila6706162040/reactjs-redux/users")
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/elanadila6706162040/reactjs-redux/users" +
          id
      )
      .then(function (response) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const postUserCreate = (data) => {
    return (dispatch) => {
      axios
        .post(
           "http://my-json-server.typicode.com/elanadila6706162040/reactjs-redux/users",
          data
        )
        .then(function (response) {
          console.log(response);
          
          dispatch({
            type: POST_USER_CREATE,
            payload: {
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch(function (error) {
          dispatch({
            type: POST_USER_CREATE,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };
  