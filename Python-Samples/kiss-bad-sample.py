def get_player_status(player):
    if player.is_online:
        if player.current_game is not None:
            return "Player is currently in a game"
        else:
            if len(player.pending_invitations) > 0:
                return "Player has pending invitations"
            else:
                return "Player is online"
    else:
        return "Player is offline"
