let React = require('react');
let { Link, IndexLink } = require('react-router');


var Nav = (props) => {
    return (
        <div>
            <h2>Nav component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
            <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
        </div>
    );
};

module.exports = Nav;