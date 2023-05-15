Feature: Trade Me General Test Suite

Scenario: Marketplace item search directs user to Marketplace
    Given I navigate to the Trade Me home page
    When I search value a Marketplace item on the home page
    Then The resulting page's URL and the page's title contains Marketplace