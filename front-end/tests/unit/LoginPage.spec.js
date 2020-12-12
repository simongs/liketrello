import Vue from 'vue';
import LoginPage from "@/views/LoginPage";

describe('LoginPage.vue', () => {
  test ('should render correct content', () => {
    const Contructor = Vue.extend(LoginPage);
    const vm = new Contructor().$mount();
    expect(vm.$el.querySelector('h1').textContent).toEqual('Like Trello');
  });
})
