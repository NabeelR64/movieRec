from flask import Flask, request, jsonify

app = Flask(__name)

@app.route('/recommend', methods=['POST'])
def recommend_movies():
    # Receive the selected mood from the frontend.
    selected_mood = request.json['mood']

    # TODO: Use the OMDB API or any movie database API to fetch movie recommendations based on the mood.

    # For now, return a sample response.
    recommended_movies = ['Movie 1', 'Movie 2', 'Movie 3']

    return jsonify({'movies': recommended_movies})

if __name__ == '__main__':
    app.run(debug=True)
