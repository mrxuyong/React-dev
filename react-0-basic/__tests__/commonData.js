import Immutable from 'immutable';
import iflux, {msg as msg, Store} from 'iflux';

/**
 * @create by xuyong on 2016/01/01;----未完成，待续。。。
 * @desc 公共数据源，用于提供 某个bean 数据 的set 和get；
 * @constructor
 */
let CommonData = ()=> {
};
module.export = CommonData;


let appStore = Store({
    //阿姨(我的)基本信息:图像,姓名,描述 等;
    myInfo: {
        name: '',
        phone: '',
        idcard: '',
        censusRegisterAddress: '',//户籍地址；
        birthday: '',
        sex: '',

        photoUrl: '',
        province: '',
        city: '',
        district: '',
        address: '',
        education: '', //学历
        emerPhone: '', //紧急电话
        married: '', //婚姻状况 0：未婚，1：已婚，2：离异
        height: '', //身高
        weight: '', //体重

        imgUrls: [], //我的照片,我的视频
        //imagesInfo: [], //我的照片
        //videosInfo: []  //我的视频
    }
});
export default appStore;

CommonData.setData = (key, value)=> {
    localStorage.setItem(`${key}`, `${value}`);
};

/**
 * @desc 用户存二级/三级...数据；
 * @param key
 * @param value
 * @param keyA
 * @param valueA
 * @param keyB
 * @param valueB
 * @param keyC
 * @param valueC
 * @param keyD
 * @param valueD
 * @param dataType 需要改变的这级数是 字符串/数组/对象。。。 stringType, arrayType, objectType
 */
CommonData.setClassData = (key, value, keyA, valueA, keyB, valueB, keyC, valueC, keyD, valueD, dataType)=> {
    let jsonValue = value != null && value != 'undefined' ? JSON.parse(value) : {};
    //let jsonValueA = valueA != null && valueA != 'undefined' ? JSON.parse(valueA) : {};

    if (jsonValue && jsonValue.phone) {
        appStore.data().set('myInfo', Immutable.fromJS(jsonValue));
    }

    if (keyA) {
        //`${key}.${keyA}` = valueA;

        //jsonValue = {
        //    `${key}.${keyA}`: valueA
        //};
        switch (dataType) {
            case 'stringType':
                appStore.cursor().setIn(['myInfo', `${keyA}`], `${valueA}`);
                break;
            case 'arrayAddType':
                let tempArray = appStore.data().getIn(['myInfo', `${keyA}`]) ? appStore.data().getIn(['myInfo', `${keyA}`]).toJS() : [];
                tempArray.push(JSON.parse(`${valueA}`));
                appStore.cursor().setIn(['myInfo', `${keyA}`], tempArray);
                break;
            case 'objectType':
                break;
            default :
                break;
        }
    } else if (keyB) {
        switch (dataType) {
            case 'stringType':
                break;
            case 'arrayType':
                break;
            case 'arrayDelType':
                let tempArray = appStore.data().getIn(['myInfo', `${keyA}`]) ? appStore.data().getIn(['myInfo', `${keyA}`]).toJS() : [];
                let newArray = [];
                tempArray.map((item, index)=> {
                    if (item.get(`${keyB}`) != `${valueB}`) {
                        newArray.push(item);
                    }
                });
                appStore.cursor().setIn(['myInfo', `${keyA}`], tempArray);
                break;
            case 'objectType':
                break;
            default :
                break;
        }
        appStore.data().setIn(['myInfo', `${keyA}`, `${keyB}`], `${valueB}`);
    } else if (keyC) {
        switch (dataType) {
            case 'stringType':
                break;
            case 'arrayType':
                break;
            case 'objectType':
                break;
            default :
                break;
        }
        appStore.data().setIn(['myInfo', `${keyA}`, `${keyB}`, `${keyC}`], `${valueC}`);
    } else if (keyD) {
        switch (dataType) {
            case 'stringType':
                break;
            case 'arrayType':
                break;
            case 'objectType':
                break;
            default :
                break;
        }
        appStore.data().setIn(['myInfo', `${keyA}`, `${keyB}`, `${keyC}`, `${keyD}`], `${valueD}`);
    }

    localStorage.setItem(`${key}`, `${value}`)
};

CommonData.getData = (key)=> {
    return localStorage.getItem(`${key}`) != null && localStorage.getItem(`${key}`) != 'undefined' ? localStorage.getItem(`${key}`) : '';
};
