import React from "react";
import { Heart, MessageCircle, Repeat2, Share2 } from "lucide-react";

export default function VKPost() {
  return (
    <div className="vk-post">
      <div className="vk-post-header">
        <img src="/images/avatar.jpg" alt="Аватар" />
        <div>
          <p className="name">Никита Стеничкин</p>
          <p className="date">сегодня в 18:42</p>
        </div>
      </div>

      <div className="vk-post-text">
        👨‍💻 В свободное время изучаю новые технологии, вдохновляюсь дизайном и
        работаю над личными проектами. <br />
        ✨ Всегда открыт к новым вызовам.
      </div>

      <div className="vk-post-actions">
        <button className="heart">
          <Heart size={16} /> <span>25</span>
        </button>
        <button>
          <MessageCircle size={16} /> <span>4</span>
        </button>
        <button>
          <Repeat2 size={16} /> <span>3</span>
        </button>
        <button>
          <Share2 size={16} />
        </button>
      </div>
    </div>
  );
}
