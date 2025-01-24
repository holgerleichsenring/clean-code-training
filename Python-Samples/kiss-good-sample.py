def get_player_status(player):
    if not player.is_online:
        return "Player is offline"

    if player.current_game is not None:
        return "Player is currently in a game"

    return "Player has pending invitations" if player.pending_invitations else "Player is online"
