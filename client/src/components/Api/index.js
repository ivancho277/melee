// FROM GOOGLE BOOKS THIS IS NOT TAYLORED FOR MELEE

//these are our front end methods that link to our server CRUD side operations.
import axios from "axios";

export default {
  getArmors: function() {
    return axios.get("/api/armors");
  },

  getSingleArmors: function(id) {
    return axios.get("/api/armors" + id);
  },

  getWeapons: function() {
    return axios.get("/api/weapons");
  },

  getSingleWeapons: function(id) {
    return axios.get("/api/weapons" + id);
  },

  getPlayers: function() {
    return axios.get("/api/players");
  },

  getSinglePlayers: function(id) {
    return axios.get("/api/players" + id);
  },

  getThralls: function() {
    return axios.get("/api/thralls");
  },

  getSingleThralls: function(id) {
    return axios.get("/api/thralls" + id);
  },

  getUser: function() {
    return axios.get("/api/users");
  },

  getSingleUsers: function(id) {
    return axios.get("/api/users" + id);
  }
};
