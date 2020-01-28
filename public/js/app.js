const getBurger = () => {
    axios.get('/burgers')
      .then(burgers => {
        console.log(burgers)
      })
      .catch(e => console.error(e))
  }
  
  const addBurger = (burger_name) => {
    axios.post('/burgers', {
        burger_name,
      eaten: false
    })
      .then(() => {
        console.log('Biurger Added!')
      })
      .catch(e => console.error(e))
  }
  
  const eatBurger = id => {
    axios.put(`/burgers/${id}`)
      .then(() => {
        console.log('Burger Eaten!')
      })
      .catch(e => console.error(e))
  }
  
  const removeBurger = id => {
    axios.delete(`/burgers/${id}`)
      .then(() => {
        console.log('Burger Removed!')
      })
      .catch(e => console.error(e))
  }
  
  document.getElementById('addBurger').addEventListener('click', e => {
    e.preventDefault()
    addBurger(document.getElementById('burgers').value)
    document.getElementById('burgers').value = ''
    window.location.reload()
  })
  
  document.addEventListener('click', e => {
    if(e.target.className.includes('eatBurger')) {
      eatBurger(e.target.dataset.burger)
      window.location.reload()
    } else if (e.target.className.includes('removeBurger')) {
      removeBurger(e.target.dataset.burger)
      window.location.reload()
    }
  })