import App from '@framework/Vue/App.vue';
import { mount, VueWrapper } from '@vue/test-utils';

describe('App', () => 
{
    it('renders the heading', () => 
{
        const wrapper: VueWrapper = mount(App);
        expect(wrapper.text()).toContain('coucou');
    });
});
 