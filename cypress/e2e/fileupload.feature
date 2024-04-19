Feature: File Upload

    As a user, I should be able to upload a file successfully

    Scenario Outline: Verify that <file format> can be accepted
        Given I click file upload Demo
        When I upload the "<file format>"
        Then the file upload should be successful

        Examples:
            | file format |
            | .png        |
            | .jpg        |
            | .pdf        |

