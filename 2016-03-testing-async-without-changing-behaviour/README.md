Testing Anecdote: Stubbing without changing behaviour
=====================================================

Run the suite:

    python -m SimpleHTTPServer 8900
    open http://localhost:8900

Open a console and you should see logs printed in a different order based on how
the stub in each test is implemented.
