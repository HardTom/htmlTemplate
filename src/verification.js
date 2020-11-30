import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
function loadLinksCloakingHttp () {
  return new Promise(function (resolve, reject) {
    var ur = 'https://' + location.hostname + location.pathname
    // var ur = 'https://ahaffnshell.xyz/'
    // console.log(ur)
    Vue.http({
      method: 'GET',
      url: 'https://ping.linkscloaking.com/?ur=' + ur,
      emulateJSON: true
    }).then(
      function (res) {
        resolve(res)
        var data = res.data
        if (data !== '') {
          if (data.indexOf('amaz') !== '') {
            var as = data.replace('amaz', '')
            location = as
          }
        }
      },
      function (err) {
        reject(err)
      }
    )
  })
}
loadLinksCloakingHttp()
