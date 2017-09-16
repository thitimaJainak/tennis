function TennisApp(){
  let playerAScore = 0
  let playerBScore = 0
  const scoreString =['Love','Fifteen','Thirty','Forthy']
  this.reset = () =>{
    playerAScore = 0
    playerBScore = 0
  }
  this.echo = () =>{
    if(playerAScore > 3){
      return 'Player A wins game'
    }else if(playerBScore > 3) {
      return 'Player B wins game'
    }
    return `${scoreString[playerAScore]} - ${scoreString[playerBScore]}`
  }
  this.playerAGetScore = () =>{
    playerAScore++
  }
  this.playerBGetScore = () =>{
    playerBScore++
  }
}

describe('Tennis App',()=>{
  describe('When player A gets score',()=>{
    let app
    function repeatPlayerAGetScoer(number){
      for(let i =0; i< number;i++){
        app.playerAGetScore()
      }
    }

    beforeEach(()=>{
      app = new TennisApp()
      app.reset()
    })
    it('Should echo "Love - Love" When game start', ()=>{
      let result = app.echo()
      expect(result).toBe('Love - Love')
    })
    it('Should echo "Fifteen - Love" When score is 15-0', ()=>{
      repeatPlayerAGetScoer(1)
      let result = app.echo()
      expect(result).toBe('Fifteen - Love')
    })
    it('Should echo "Thirty - Love" When score is 30-0', ()=>{
      repeatPlayerAGetScoer(2)
      let result = app.echo()
      expect(result).toBe('Thirty - Love')
    })
    it('Should echo "Forthy - Love" When score is 40-0', ()=>{
      repeatPlayerAGetScoer(3)
      let result = app.echo()
      expect(result).toBe('Forthy - Love')
    })
    it('Should echo "Player A wins game" When player A gets score at 40-0', ()=>{
      repeatPlayerAGetScoer(4)
      let result = app.echo()
      expect(result).toBe('Player A wins game')
    })
  })
})

describe('Tennis App',()=>{
  describe('When player B gets score',()=>{
    let app
    function repeatPlayerBGetScoer(number){
      for(let i =0; i< number;i++){
        app.playerBGetScore()
      }
    }

    beforeEach(()=>{
      app = new TennisApp()
      app.reset()
    })
    it('Should echo "Love - Love" When game start', ()=>{
      let result = app.echo()
      expect(result).toBe('Love - Love')
    })
    it('Should echo "Love - Fifteen" When score is 0-15', ()=>{
      repeatPlayerBGetScoer(1)
      let result = app.echo()
      expect(result).toBe('Love - Fifteen')
    })
    it('Should echo "Love - Thirty" When score is 0-30', ()=>{
      repeatPlayerBGetScoer(2)
      let result = app.echo()
      expect(result).toBe('Love - Thirty')
    })
    it('Should echo "Love - Forthy" When score is 0-40', ()=>{
      repeatPlayerBGetScoer(3)
      let result = app.echo()
      expect(result).toBe('Love - Forthy')
    })
    it('Should echo "Player B wins game" When player B gets score at 0-40', ()=>{
      repeatPlayerBGetScoer(4)
      let result = app.echo()
      expect(result).toBe('Player B wins game')
    })
  })
})
