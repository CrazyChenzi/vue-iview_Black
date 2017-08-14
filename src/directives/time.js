/**
 * Created by aresn on 16/7/18.
 */
export default {
    bind () {

    },
    update () {
        console.log(this)
        this.el.innerHTML = new Date();
        this.timeout = setInterval(() => {
            this.el.innerHTML = new Date();
        })
    },
    unbind () {
        clearInterval(this.timeout);
    }
};
