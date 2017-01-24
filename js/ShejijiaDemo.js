/**
 * Created by liuhe on 2017/1/24.
 */


fetch('http://cp-plan.shejijia.com/api/v1/projects/1579534/patrols', {
    method: 'GET',
    headers: {
        'X-AFC':'HW1ON1',
        'X-SESSION':'5B1B9A7F-197B-4D78-BB35-CEEEBC4165B6',
        'X-Token':'8ce8d467-e2f5-485a-b43e-5eef8eaca403',
    }
})
    .then((response) => response.json())
    .then((jsondata) => {

        this.setState ({
            ds: this.state.ds.cloneWithRows(jsondata.data),
            loadingOver: true,
        });
    })
    .catch((error) => {

        console.warn(error);
    });