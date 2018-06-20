'use strict';


module.exports = new class {
  compareUrl(arr, check) {
    let match = false;

    //lower case all and split at the '//'
    let url1 = arr.toLowerCase().split('//')
    let url2 = check.toLowerCase().split('//')

    //grabs just the port
    let proto = url1[0];
    let proto1 = url2[0];

    //grabs just the domain name
    let domain = url1[1].split('/')[0]
    let domain1 = url2[1].split('/')[0]

    //grabs the path and puts it all back together
    let path = url1[1].split('/').splice(1).join()
    let path1 = url2[1].split('/').splice(1).join()

    //checks to see if there is a port and then adds it to the other
    if (domain1.length > domain.length) {
      if (domain1.includes(';')) {
        let port = domain1.split(';')[1]
        domain += ';' + port
      }
    } else if (domain1.length < domain.length) {
      if (domain.includes(';')) {
        let port = domain.split(';')[1]
        domain1 += ';' + port
      }
      let port = domain.split(';')[1]
      domain1 += ';' + port
    }

    //checks to see if the protos are the same, returns false if they dont.
    if (proto === proto1) {
      match = true;
    } else {
      match = false;
    }

    //checks the domains and see if they match, returns false if they dont.
    if (domain === domain1 && match) {
      match = true;
    } else {
      match = false;
    }

    //checks to see if the paths match, returns false if they dont.
    if (path === path1 && match) {
      match = true;
    } else {
      match = false;
    }

    console.log('url', url1)
    console.log('url1',url2)
    console.log('propo', proto)
    console.log('proto1', proto1)
    console.log('domain', domain)
    console.log('domain1', domain1)
    console.log('path', path)
    console.log('path1', path1)

    return match
  }
}
