import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.jino.ru",
  port: 465,
  secure: true,
  auth: {
    user: 'service@allestate.pro',
    pass: '[Password]',
  },
})

let confirm = async (mail: string, key: string) => {
  await transport.sendMail({
    from: '"no-reply allEstate.pro" <service@allestate.pro',
    to: mail,
    subject: 'Подтверждение email ✔',
    html: `
    <p style="text-align:center; ">Для подтверждения email прейдите по <a style="color:#F0723B" href="https://allestate.pro/auth/confirm/${key}">ссылке</a></p>
    `,
  })
}

let resetPass = async (mail: string, key: string) => {
  await transport.sendMail({
    from: '"no-reply allEstate.pro" <service@allestate.pro',
    to: mail,
    subject: 'Восстановление доступа ✔',
    html: `
    <p style="text-align:center; ">Для восстановления доступа к учетной записи прейдите по <a style="color:#F0723B" href="https://allestate.pro/auth/reset/${key}">ссылке</a></p>
    <p style="text-align:center; ">Ссылка доступна в течение двух часов</p>
    `,
  })
}

let setPass = async (mail: string, key: string, site:string) => {
  await transport.sendMail({
    from: '"no-reply allEstate.pro" <service@allestate.pro',
    to: mail,
    subject: `Устаноаить пароль для доступа к ${site} ✔`,
    html: `
    <p style="text-align:center; ">Для установки пароля к учетной записи прейдите по <a style="color:#F0723B" href="${site}/auth/reset/${key}">ссылке</a></p>
    <p style="text-align:center; ">Ссылка доступна в течение двух суток</p>
    `,
  })
}

let rieltorsPopup = async (data:any) => {
  await transport.sendMail({
    from: '"no-reply allEstate.pro" <service@allestate.pro',
    to: 'krd@allestate.pro',
    subject: 'Заявка на риелтора',
    html: `
    <table>
      <tbody>
        <tr>
          <td>Город</td>
          <td>${data?.city}</td>
        </tr>
        <tr>
          <td>Задача</td>
          <td>${data?.todo}</td>
        </tr>
        <tr>
          <td>Объект</td>
          <td>${data?.type}</td>
        </tr>
        <tr>
          <td>Имя</td>
          <td>${data?.name}</td>
        </tr>
        <tr>
          <td>Телефон</td>
          <td>${data?.phone}</td>
        </tr>
        <tr>
          <td>Комментарий</td>
          <td>${data?.comment}</td>
        </tr>
      </tbody>
    </table>
    `,
  })
}

let mortgagePopup = async (data:any) => {
  await transport.sendMail({
    from: '"no-reply allEstate.pro" <service@allestate.pro',
    to: 'krd@allestate.pro',
    subject: 'Заявка на ипотеку онлайн',
    html: `
    <table>
      <tbody>
        <tr>
          <td>Предполагаемый город</td>
          <td>${data?.city}</td>
        </tr>
        <tr>
          <td>Имя</td>
          <td>${data?.name}</td>
        </tr>
        <tr>
          <td>Телефон</td>
          <td>${data?.phone}</td>
        </tr>
      </tbody>
    </table>
    `,
  })
}

let callPopup = async (data:any) => {
  await transport.sendMail({
    from: '"no-reply allEstate.pro" <service@allestate.pro',
    to: 'krd@allestate.pro',
    subject: `Лид по теме ${data.subject}`,
    html: `
    <table>
      <tbody>
        <tr>
          <td>Предполагаемый город</td>
          <td>${data?.city}</td>
        </tr>
        <tr>
          <td>Телефон</td>
          <td>${data?.phone}</td>
        </tr>
      </tbody>
    </table>
    `,
  })
}

let messagePopup = async (data:any) => {
  await transport.sendMail({
    from: '"no-reply allEstate.pro" <service@allestate.pro',
    to: 'krd@allestate.pro',
    subject: `Лид по объекту`,
    html: `
    <table>
      <tbody>
        <tr>
          <td>Сообщение</td>
          <td>${data?.message}</td>
        </tr>
        <tr>
          <td>Объект</td>
          <td>${data?.advert.title}<br>${data?.advert.href}</td>
        </tr>
        <tr>
          <td>Имя</td>
          <td>${data?.name}</td>
        </tr>
        <tr>
          <td>Телефон</td>
          <td>${data?.phone}</td>
        </tr>
      </tbody>
    </table>
    `,
  })
}

export { confirm, resetPass, rieltorsPopup, mortgagePopup, callPopup, messagePopup, setPass }
