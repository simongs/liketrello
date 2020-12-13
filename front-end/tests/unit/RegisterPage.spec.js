import Vue from 'vue';
import RegisterPage from "@/views/RegisterPage.vue";

describe('RegisterPage.vue', () => {
  test ('should render correct content', () => {
    const Contructor = Vue.extend(RegisterPage);
    const vm = new Contructor().$mount();
    expect(vm.$el.querySelector('.logo').getAttribute('src')).toEqual('/static/images/logo.png');
    expect(vm.$el.querySelector('.tagline').textContent).toEqual('Open source task management tool');
    expect(vm.$el.querySelector('#username').value).toEqual('');
    expect(vm.$el.querySelector('#emailAddress').value).toEqual('');
    expect(vm.$el.querySelector('#password').value).toEqual('');
    expect(vm.$el.querySelector('form button[type="submit"]').textContent).toEqual('Create account');
  });
})
