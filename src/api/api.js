import axios from 'axios';
import CONFIG from '../config';

export default {
  loadPostList() {
    return axios.get(CONFIG.POSTS);
  },
  loadPostInfo(postIndex, jwt) {
    return axios.get(CONFIG.POST_ONE.replace("${postIndex}", postIndex), {
      headers: {
        "infranics": jwt
      }
    });
  },
  addPost(post, jwt) {
    return axios.post(CONFIG.POSTS, post, {
      headers: {
        "infranics": jwt,
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  addPostReply(postIndex, reply, jwt) {
    return axios.post(CONFIG.POST_REPLY.replace("${postIndex}", postIndex), reply, {
      headers: {
        'Content-Type': 'application/json',
        "infranics": jwt
      }
    });
  },
  signIn(signin) {
    return axios.post(CONFIG.SING_IN, signin, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  },
  signUp(signUp) {
    return axios.post(CONFIG.SING_UP, signUp, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  },
  userInfo(jwt) {
    return axios.get(CONFIG.USER_AUTH, {
      headers: {
        "infranics": jwt
      }
    });
  },
  // downloadFile(url, jwt) {
  //   return axios.get(url, {
  //     headers: {
  //       "infranics": jwt
  //     }
  //   })
  // }

}
