Feature: Search on Google
  @focus
  Scenario: Search cat Google
    Given I open Google page
    And I search "cat"
    Then I see "Cat" on the page