<template>
  <table>
    <thead>
      <tr>
        <th>Название</th>
        <th>Что делает</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>fetch</td>
        <td>Работает только на клиенте</td>
      </tr>
      <tr>
        <td>$fetch</td>
        <td>Работает на сервере и клиенте. При SSR сработает дважды</td>
      </tr>
      <tr>
        <td>useFetch</td>
        <td>Работает на сервере и клиенте. При SSR сработает единожды. Очень удобный интерфейс</td>
      </tr>
      <tr>
        <td>useAsyncData</td>
        <td>Работает как useFetch. Имеет расширенный интерфейс</td>
      </tr>
    </tbody>
  </table>
</template>