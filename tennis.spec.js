function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerAScore = 0
    this.playerBScore = 0

    this.reset = () => {
        this.playerAScore = 0
        this.playerBScore = 0
    }

    this.echo = () => {
       return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`
    }

    this.playerAGetScore = () => {
        this.playerAScore++
    }

    this.playerBGetScore = () => {
      this.playerBScore++
    }

}
describe('echo()',() => {
  let app
  beforeEach(()=>{
    app = new TennisGame()
    app.reset()

  })

  test('Echo "Love - Love" when game start', () => {
      // Arrange


      // Act

      let result = app.echo()

      // Assert
      expect(result).toBe('Love - Love')
  })

  test('Echo "Fifteen - Love" when playerA get first score', () => {
      // Arrange

      app.playerAGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Fifteen - Love')
  })

  test('Echo "Forthy - Thirty" when score is 40 - 30', () => {
      // Arrange

      app.playerAGetScore()
      app.playerAGetScore()
      app.playerAGetScore()
      app.playerBGetScore()
      app.playerBGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Forthy - Thirty')
  })

  test('Echo "Love - Fifteen" when playerB gte fiest score ', () => {
      // Arrange

      app.playerBGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Love - Fifteen')
  })
  test('Echo "Thirty - Fifteen" when score is 30 - 15 ', () => {
      // Arrange

      app.playerAGetScore()
      app.playerAGetScore()
      app.playerBGetScore()

      // Act
      let result = app.echo()

      // Assert
      expect(result).toBe('Thirty - Fifteen')
  })

})
