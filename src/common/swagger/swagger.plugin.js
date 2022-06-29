"use strict";
exports.__esModule = true;
exports.CustomLayoutPlugin = exports.CaseInsensitiveFilterPlugin = exports.operationsSorter = void 0;
// https://github.com/swagger-api/swagger-ui/issues/4158
var operationsSorter = function (a, b) {
    var methodsOrder = ['get', 'post', 'put', 'delete', 'patch', 'options', 'trace'];
    var result = methodsOrder.indexOf(a.get('method')) - methodsOrder.indexOf(b.get('method'));
    // Or if you want to sort the methods alphabetically (delete, get, head, options, ...):
    // var result = a.get("method").localeCompare(b.get("method"));
    if (result === 0) {
        result = a.get('path').localeCompare(b.get('path'));
    }
    return result;
};
exports.operationsSorter = operationsSorter;
// https://github.com/swagger-api/swagger-ui/issues/3876
var CaseInsensitiveFilterPlugin = function () {
    return {
        fn: {
            opsFilter: function (taggedOps, phrase) {
                return taggedOps.filter(function (tagObj, tag) { return tag.toLowerCase().indexOf(phrase.toLowerCase()) !== -1; });
            }
        }
    };
};
exports.CaseInsensitiveFilterPlugin = CaseInsensitiveFilterPlugin;
// https://github.com/swagger-api/swagger-ui/blob/master/docs/customization/custom-layout.md
// https://reactjs.org/docs/react-without-jsx.html
var CustomLayoutPlugin = function (props) {
    var getComponent = props.getComponent, React = props.React;
    var BaseLayout = getComponent('BaseLayout', true);
    var styles = {
        root: {
            paddingTop: 60
        },
        header: {
            background: '#20232a',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 100
        },
        wrapper: {
            maxWidth: 1430,
            margin: '0 auto',
            padding: '12px 0px 8px'
        },
        image: {
            height: 35
        }
    };
    var Image = props.React.createElement('img', {
        style: styles.image,
        src: 'https://docs.nestjs.com/assets/logo-small.svg'
    });
    var Wrapper = React.createElement('div', { style: styles.wrapper }, Image);
    var Header = React.createElement('div', { style: styles.header }, Wrapper);
    var CustomLayout = React.createElement('div', { style: styles.root }, React.createElement(function () { return Header; }, null), React.createElement(BaseLayout, { style: { paddingTop: 60 } }));
    return { components: { CustomLayout: function () { return CustomLayout; } } };
};
exports.CustomLayoutPlugin = CustomLayoutPlugin;
