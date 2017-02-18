import React from 'react';

class FootLinks extends React.Component {

  footerLinks() {
    const activeTab = 'active-foot-link';
    const links = ['Overview', 'Episodes', 'Details'];
    return(
      links.map((link, index) => (
        <li onClick={this.props.onTabChosen.bind(this, index)}
            className={ index === this.props.selectedPane ? 'bb active-foot-link' : 'bb foot-link' }
            >{link}</li>
        ))
    );
  }



 render() {
   return (
     <div className='foot-links'>
       <ul>
         {this.footerLinks()}
       </ul>
     </div>

   );
 }
}

export default FootLinks;

// render() {
//   const activeTab = 'active-foot-link';
//   return (
//     <div className='foot-links'>
//       <ul>
//         <li onClick={this.props.onTabChosen.bind(this, 0)}
//             className={ activeTab }
//             >Overview</li>
//         <li onClick={this.props.onTabChosen.bind(this, 1)}
//             className={ activeTab }
//             >Episodes</li>
//         <li onClick={this.props.onTabChosen.bind(this, 2)}
//             className={ activeTab }
//             >Details</li>
//       </ul>
//     </div>
//
//   );
// }
