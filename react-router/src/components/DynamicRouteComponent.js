import React from 'react';
// import { Link, Route } from 'react-router-dom';
import { Link, Route } from "../implements/my-react-router";
export default function DynamicRouteComponent(props){
  const {id} = props.match.params
  return (
    <div>
      <h3>dynamic route page</h3>
      {id}
      <Link to={"/search/" + id + "/detail"}>详情</Link>
      <Route to={"/search/" + id + "/detail"} component={DetailComponent}/>
    </div>
  )
}

function DetailComponent(props){
  return <div>DetailComponent</div>
}