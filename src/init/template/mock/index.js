/*
 * @Date: 2022-06-01 16:44:02
 * @Description: 本地mock请求
 */

module.exports = function (app) {

  app.get('/ums/internal/employee/user/info', (req, res) => {
    res.send({ "code": 0, "message": "SUCCESS", "askId": "e801f52dec5b4229acbccd59b5cdd360", "data": { "name": "陈林", "enName": "陈林", "avatarUrl": "https://s3-imfile.feishucdn.com/static-resource/v1/v2_069251be-edb0-49d0-960e-b098be7a0d5g~?image_size=72x72&cut_type=&quality=&format=image&sticker_format=.webp", "tenantKey": "2d2174ae4ecf975e", "openId": "ou_6be7f2050989b733f0fcb92e8649c7ba", "unionId": "on_ca14468a054e84a506a65a15221bc7ab", "userId": "3bd3b4dd", "email": "", "mobile": "+86****5700" }, "error": false })
  })

}
