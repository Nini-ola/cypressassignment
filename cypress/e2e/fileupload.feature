Feature: File Upload

    As a user, I should be able to upload a file successfully

    Scenario: Successful upload of acceptable file formats>.
    Given I click "Upload File Demo"
    When I select the for upload
    Then the file upload should be successful


    # Scenario: Successful upload of acceptable file <file formats>.
    # Given I click "Upload File Demo"
    # When I select the <file formats> for upload
    # Then the file upload should be successful

    # Acceptable formats:
    # | file format |
    # |"cypress/fixtures/example.png"|
    # |"cypress/fixtures/example.jpg"|
    # |"cypress/fixtures/example.pdf"|

